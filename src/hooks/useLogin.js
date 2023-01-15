import { useState } from "react";

function useLogin() {
  const [user, set] = useState();
  if (!user) return [user, set];
  const { textId } = user;
  const configs = require(`../company_configs/${textId}.json`);
  return [{ ...user, ...configs }, set];
}

export default useLogin;
