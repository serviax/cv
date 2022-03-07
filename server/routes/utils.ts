import { response } from 'express';


const sendErrorResponse = (statusCode: number, errorMessage: string) => response.status(statusCode).json({ error: errorMessage });

export {sendErrorResponse};