export const fakePromise = async (timeout: number) => {
  return await new Promise((resolve) => setTimeout(resolve, timeout));
}