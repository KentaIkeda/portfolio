export const getEnvVariable = (): { api: string; domain: string } => {
  let ENV_VARIABLE_API_KEY: string;
  let ENV_VARIABLE_SERVICE_DOMAIN: string;

  if (process.env.NODE_ENV === "development") {
    if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) throw new Error("NOT FOUND MICROCMS API KEY");
    if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) throw new Error("NOT FOUND MICROCMS SERVICE DOMAIN");
    ENV_VARIABLE_API_KEY = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
    ENV_VARIABLE_SERVICE_DOMAIN = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
  } else if (process.env.NODE_ENV === "production") {
    if (!process.env.MICROCMS_API_KEY) throw new Error("NOT FOUND MICROCMS API KEY");
    if (!process.env.MICROCMS_SERVICE_DOMAIN) throw new Error("NOT FOUND MICROCMS SERVICE DOMAIN");
    ENV_VARIABLE_API_KEY = process.env.MICROCMS_API_KEY;
    ENV_VARIABLE_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
  } else {
    if (!process.env.MICROCMS_API_KEY) throw new Error("NOT FOUND MICROCMS API KEY");
    if (!process.env.MICROCMS_SERVICE_DOMAIN) throw new Error("NOT FOUND MICROCMS SERVICE DOMAIN");
    ENV_VARIABLE_API_KEY = process.env.MICROCMS_API_KEY;
    ENV_VARIABLE_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
  }

  return {
    api: ENV_VARIABLE_API_KEY,
    domain: ENV_VARIABLE_SERVICE_DOMAIN,
  };
};
