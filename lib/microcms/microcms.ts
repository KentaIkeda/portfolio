import { createClient } from "microcms-js-sdk";
import { getEnvVariable } from "@/utils/getEnvVariable";

const client = createClient({
  serviceDomain: getEnvVariable().domain,
  apiKey: getEnvVariable().api,
});

export { client };
