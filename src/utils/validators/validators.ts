export const required = (value: any) => {
    if (value) return undefined;
    return "field is Required!!!"
};

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value.length > maxLength) return `max length is ${maxLength} symbols!!!`;
    return undefined
};

