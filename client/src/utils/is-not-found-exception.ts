import { HttpStatus } from '../enumerations';
import { HttpException } from '../exceptions';

export const isNotFoundException = (error: Error) => {
  return error instanceof HttpException && error.code === HttpStatus.NotFound;
};
