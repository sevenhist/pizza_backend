export default class ApiError extends Error {
    status: number;
    errors: any[];
  
    constructor(status: number, message: string, errors: any[] = []) {
      super(message);
      this.status = status;
      this.errors = errors;
  
      Object.setPrototypeOf(this, ApiError.prototype);
    }
  
    static NotFound(message: string, errors: any[] = []): ApiError {
      return new ApiError(404, message, errors);
    }
  }
  