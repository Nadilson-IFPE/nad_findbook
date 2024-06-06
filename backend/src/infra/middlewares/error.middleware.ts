import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../types/HttpException";

export function errorMiddleware(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(err.status).json({
    status: err.status,
    message: err.message || "Internal server error",
  });
}
