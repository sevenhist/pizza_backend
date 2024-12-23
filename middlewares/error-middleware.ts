import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

// Типизация ошибки middleware
const errorMiddleware: ErrorRequestHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(err);

  if (err instanceof Error) {
    res.status(500).json({ message: err.message });
  } else {
    res.status(500).json({ message: "An unknown error occurred" });
  }

};

export default errorMiddleware;
