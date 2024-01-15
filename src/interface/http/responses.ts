import { Response } from 'express';

interface HttpResponse {
  response: any;
  status: {
    success: boolean;
    message: string | undefined;
  };
}

const makeResponse = (data: any, success: boolean): HttpResponse => ({
  response: data,
  status: {
    success: success,
    message: undefined,
  },
});

export function ok(data: any, res: Response): void {
  const response = makeResponse(data, true);
  res.status(200).json(response);
}
