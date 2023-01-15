import { useState } from "react";

function useLogin() {
  const user = useState();
  return user;
}

export default useLogin;
