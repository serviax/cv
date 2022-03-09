const sendErrorResponse = (response: any , statusCode: number, errorMessage: string) => response.status(statusCode).json({ error: errorMessage });

export {sendErrorResponse};