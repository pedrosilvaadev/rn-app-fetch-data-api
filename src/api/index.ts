export interface ApiError {
  message: string;
  status?: number;
}

export const api = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw {
        message: "Network response was not ok",
        status: response.status,
      } as ApiError;
    }
    const data = await response.json();

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw { message: error.message } as ApiError;
    }
    throw { message: "Unknown error" } as ApiError;
  }
};
