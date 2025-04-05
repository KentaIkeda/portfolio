import { createClient } from "microcms-js-sdk";
import { getEnvVariable } from "@/utils/getEnvVariable";

export const microcms = createClient({
  serviceDomain: getEnvVariable().domain,
  apiKey: getEnvVariable().api,
});
