export interface UtilsError {
    type: "not_found" | "bad_request";
  }
  
  export function notFound(): UtilsError {
    return { type: "not_found" };
  }
  