type ErrorType = { [key:string]: number };

const errorType: ErrorType = {
  'number.min': 422,
  'string.min': 422,
  'string.base': 422,
  'any.required': 400,
};

const errorMap = (error: string): number => errorType[error] || 500;

export default errorMap;