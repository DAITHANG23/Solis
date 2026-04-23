import { isEmpty } from "lodash";
import { stringify } from "qs";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function buildQueryString(params: any) {
  if (isEmpty(params)) {
    return "";
  }

  const query = stringify(params, { arrayFormat: "repeat" });
  return `?${query}`;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function cleanEmptyFields(obj: Record<string, any>) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const newObj: Record<string, any> = {};

  for (const key in obj) {
    const value = obj[key];

    const isEmptyObject =
      typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0;
    const isEmptyArray = Array.isArray(value) && value.length === 0;
    const isEmptyString = typeof value === "string" && value.trim() === "";

    if (!isEmptyObject && !isEmptyArray && !isEmptyString) {
      newObj[key] = value;
    }
  }

  return newObj;
}
