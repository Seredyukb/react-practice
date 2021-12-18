export const required = (values) => {
    if (values) { return undefined }
    return 'Field is required';
}

export const MaxLength30 = (values) => {
    if (values.length > 30) return 'max length must be 30 symbols'
    return undefined;
}
export const MinLength2 = (values) => {
    if (values.length < 2) return 'min length must be 2 symbols'
    return undefined;
}
export const MaxLength100 = (values) => {
    if (values.length > 100) return 'max length must be 100 symbols'
    return undefined;
}




