type Report = {name: string; message: string};

export const getFieldErrors = (errors: Report[]) => {
    const formErrors: any = {};
    for (const error of errors) {
        formErrors[error.name] = error.message;
    }

    return formErrors;
}