export const EmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const ContainsLowerCase = /(?=.*[a-z])/;
export const ContainsUpperCase = /(?=.*[A-Z])/;
export const ContainsDigit = /(?=.*\d)/;
export const ContainsSpecialCharacter = /(?=.*[!@#$&*])/;

export const PasswordRegex = new RegExp(`^${ContainsLowerCase.source}${ContainsUpperCase.source}${ContainsDigit.source}${ContainsSpecialCharacter.source}.{8,}$`);
