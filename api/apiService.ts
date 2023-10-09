export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface ApiServiceOptions<B = undefined> {
  method: HttpMethod;
  url: string;
  headers?: Record<string, string>;
  body?: B;
  params?: Record<string, string>;
  formData?: FormData;
  hasResponse?: boolean;
  timeout?: number;
  isCSV?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: APIError;
}

class APIError extends Error {
  constructor(
    public message: string,
    public status: number,
    public response?: Response
  ) {
    super(message);
  }
}

function fetchWithTimeout(
  input: RequestInfo,
  init?: RequestInit,
  timeout?: number
): Promise<Response> {
  if (!timeout) {
    return fetch(input, init);
  }

  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Request timed out"));
    }, timeout);

    fetch(input, init)
      .then(resolve, reject)
      .finally(() => clearTimeout(timer));
  });
}

async function apiService<T, B = undefined>(
  options: ApiServiceOptions<B>
): Promise<ApiResponse<T>> {
  const { method, url, headers, body, params, formData, timeout, isCSV } =
    options;

  const defaultHeaders: Record<string, string> = {};

  if (body && formData) {
    throw new Error("You cannot provide both 'body' and 'formData' options");
  }

  // Create a URL object with the given URL string
  const urlObj = new URL(url);

  // Append search parameters if 'params' is provided
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      urlObj.searchParams.append(key, `${value}`);
    }
  }

  const finalHeaders: Record<string, string> = {
    ...defaultHeaders,
    ...headers,
  };

  if (!formData && body) {
    finalHeaders["Content-Type"] = "application/json";
  }

  const requestOptions: RequestInit = {
    method,
    headers: finalHeaders,
    body: formData ? formData : body ? JSON.stringify(body) : undefined,
  };

  try {
    const response = await fetchWithTimeout(
      urlObj.toString(),
      requestOptions,
      timeout
    );

    if (!response.ok) {
      const error = await response.text();
      throw new APIError(error, response.status, response);
    }

    // For DELETE requests, there might not be a response body.
    const data = isCSV
      ? await response.text()
      : method === "GET" || options.hasResponse
      ? await response.json()
      : undefined;

    return { success: true, data };
  } catch (err) {
    if (err instanceof APIError) {
      return { success: false, error: err };
    } else {
      const error = new APIError("An unexpected error occurred.", 500);
      return { success: false, error };
    }
  }
}

export { apiService, APIError };
