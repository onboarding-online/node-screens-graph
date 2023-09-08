/* eslint-disable @typescript-eslint/no-explicit-any */
export function exists(json: any, key: string) {
  const value = json[key];
  return value !== null && value !== undefined;
}

// eslint-disable-next-line no-unused-vars
export function mapValues(data: any, fn: (item: any) => any) {
  return Object.keys(data).reduce(
    (acc, key) => ({ ...acc, [key]: fn(data[key]) }),
    {}
  );
}
