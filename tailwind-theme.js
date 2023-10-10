// Create some re-useable definitions because
// many input types are identical in how
// we want to style them.
const textClassification = {
  outer: "mb-5 formkit-disabled:opacity-50 w-full",
  label: "block mb-1 text-sm text-on-surface font-normal",
  inner:
    "focus-within:shadow-none focus-within:border-positive shadow-none border border-around-forms focus:border-positive border border-around-forms rounded bg-inherit w-full flex focus:ring-positive mb-1 overflow-hidden focus:border-positive focus-within:!border-positive py-1",
  input:
    "w-full px-3 bg-inherit focus:ring-positive ring-positive text-sm text-on-surface placeholder-on-surface-tertiary focus:!outline-none ",
  help: "text-xs text-on-surface-secondary",
  messages: "list-none p-0 mt-1 mb-0",

  message: "!text-destructive-secondary mb-1 text-xs",
  listbox: "bg-background rounded border border-around-forms",
  listitem: "bg-surface aria-selected:bg-secondary-surface",
  selection: "focus:bg-secondary-surface",
  selector:
    "text-on-surface py-0 text-sm border !border-around-forms  focus:ring-positive focus:border-positive focus-within:!border-positive bg-inherit",
  dropdownWrapper: "bg-surface text-sm rounded",
  tags: "!py-0.5",
  panelWrapper: "!bg-surface text-sm rounded border !border-around-forms",
  panel: "bg-surface text-sm rounded",
  panelHeader: "bg-surface text-sm rounded",
  calendar: "bg-surface text-sm rounded",
  day: "text-black",
  month: "text-black",
  year: "text-black",
  timeInput: "bg-background",
};
const boxClassification = {
  option: "",
  fieldset: "max-w-none p-0 !border-none",
  outer: "mb-5 formkit-disabled:opacity-50 w-full",
  legend: "font-bold text-sm",
  wrapper: "flex items-start mb-1 cursor-pointer w-full pb-4",
  help: "mb-2 text-xs text-on-surface-secondary",
  inner: "flex mt-1 bg-inherit",
  messages: "list-none p-0 mt-1 mb-0 relative w-full",
  message: "!text-destructive-secondary mb-1 text-xs absolute",
  input:
    "form-check-input ring-0 !ring-offset-0 appearance-none h-6 w-6 mr-2 !border-2 !border-primary hover:bg-transparent !bg-background focus:bg-transparent rounded-sm checked:!bg-background  hover:cursor-pointer focus:!outline-none  focus:ring-0 transition duration-200",
  label: "text-sm text-on-surface-secondary mt-1",
  decorator: "border border-around-forms rounded",
  decoratorIcon: "!text-background rounded ",
};
const buttonClassification = {
  wrapper: "mb-1",
  input:
    "bg-blue-500 hover:bg-blue-700 text-white text-sm font-normal py-3 px-5 rounded",
};

// export our definitions using our above
// templates and declare one-offs and
// overrides as needed.
export default {
  // the global key will apply to all inputs
  global: {
    wrapper: "!max-w-none",
    prefixIcon:
      "child:h-5 text-around-forms flex items-center justify-center ml-4 focus:text-on-surface",
    suffixIcon:
      "child:h-5 text-around-forms flex items-center justify-center mr-4 focus:text-on-surface",
    inner:
      "focus-within:shadow-none focus-within:border-positive shadow-none border border-around-forms focus:border-positive",
  },
  button: buttonClassification,
  color: {
    label: "block mb-1 text-sm",
    input:
      "w-16 h-6 appearance-none cursor-pointer border border-around-forms rounded mb-2 p-1",
    message: "!text-destructive-secondary mb-1 text-xs",
  },
  wysiwyg: {
    ...textClassification,
  },
  date: {
    ...textClassification,
  },
  form: {
    outer: "w-full",
  },
  "datetime-local": textClassification,
  checkbox: boxClassification,
  email: textClassification,
  file: {
    label: "block mb-1 text-sm text-on-surface ",
    inner: "max-w-md w-fit cursor-pointer text-sm text-on-surface-tertiary",
    wrapper: "mb-2",
    input:
      "text-on-surface-tertiary text-sm mb-1 file:mr-4 file:px-4 file:rounded-full file:text-sm file:bg-surface file:border-2 file:border-primary file:text-white hover:file:bg-primary hover:file:cursor-pointer hover:cursor-pointer",
    noFiles: "text-on-surface-tertiary",
    fileRemove: "ml-auto text-blue-500 text-sm",
    messages: "list-none p-0 mt-1 mb-0",
    message: "!text-destructive-secondary mb-1 text-xs",
    help: "text-xs text-on-surface-secondary",
  },
  toggle: {
    altLabel: "block w-full mb-1 font-bold text-sm",
    inner: "$reset inline-block mr-2",
    input: "peer absolute opacity-0 pointer-events-none focus-within:!bg-blue",
    innerLabel:
      "text-[10px] font-bold absolute left-full top-1/2 -translate-x-full -translate-y-1/2 px-1",
    thumb:
      "relative left-0 aspect-square rounded-full transition-all w-5 bg-on-surface",
    track:
      'p-0.5 min-w-[3em] relative rounded-full transition-all !bg-secondary-surface focus-within:!bg-blue peer-checked:!bg-secondary peer-checked:!shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"> peer-checked:[&>div:last-child]:left-full peer-checked:[&>div:last-child]:-translate-x-full peer-checked:[&>div:first-child:not(:last-child)]:left-0 peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0',
    valueLabel: "font-bold text-sm",
    wrapper: "flex flex-wrap items-center mb-1",
  },
  month: textClassification,
  number: textClassification,
  password: textClassification,
  radio: {
    ...boxClassification,
    input: boxClassification.input.replace("rounded-sm", "rounded-full"),
  },
  range: {
    inner: "max-w-md",
    input:
      "form-range appearance-none w-full h-2 p-0 bg-gray-200 rounded-full focus:outline-none focus:ring-0 focus:shadow-none",
  },
  search: textClassification,

  submit: buttonClassification,
  tel: textClassification,
  text: textClassification,
  textarea: {
    ...textClassification,
    input:
      "block w-full h-32 px-3 border-none text-base text-on-surface bg-inherit placeholder-on-surface-tertiary",
  },
  time: textClassification,
  url: textClassification,
  week: textClassification,
  datepicker: {
    ...textClassification,
    overlayPlaceholder: "!text-on-surface-secondary",
    inner:
      "!overflow-visible focus-within:shadow-none focus-within:border-positive shadow-none border border-around-forms focus:border-positive",
  },
  taglist: {
    ...textClassification,
    inner:
      "!overflow-visible focus-within:shadow-none focus-within:border-positive shadow-none border border-around-forms focus:border-positive",
  },
  select: {
    ...textClassification,
    inner:
      "!overflow-visible focus-within:shadow-none focus-within:border-positive shadow-none border border-around-forms focus:border-positive",
  },
  dropdown: {
    ...textClassification,
    inner:
      "!overflow-visible focus-within:shadow-none focus-within:border-positive shadow-none border border-around-forms focus:border-positive",
  },
};
