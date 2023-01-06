import { useEffect } from "react";

function Redirect({path}) {
  useEffect(() => {
    window.location.replace(path);
  }, [path]);
  return null;
}

export default Redirect;