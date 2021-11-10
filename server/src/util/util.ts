export const handleJsonResponse = (data: any, message: any, type: string) => {
    return {
        error: type === 'success' ? false : true,
        message: type === 'success' ? 'Successfully Processed' : message,
        data,
    };
};

export const convertToUTC = (dateArgs: Date) => +dateArgs
   

