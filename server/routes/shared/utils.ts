import { Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sendExpressErrorResponse = (response: Response<any, Record<string, any>> , statusCode: number, errorMessage: string) => response.status(statusCode).json({ error: errorMessage });

export {sendExpressErrorResponse};