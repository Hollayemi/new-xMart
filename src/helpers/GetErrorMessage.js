export const ErrorMessage = (errObj) => {
    if (typeof errObj === 'string') return errObj;

    let errResponse;
    if (errObj?.response?.data) errResponse = errObj.response;
    else return errObj?.message;

    const message = "An error occured. We've notified our team";

    const errorMessage = errResponse === null ? message : errResponse;

    return errorMessage;
};
