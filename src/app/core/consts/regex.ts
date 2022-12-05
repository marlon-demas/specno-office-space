export const EmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const ContainsLowerCase = /(?=.*[a-z])/;
export const ContainsUpperCase = /(?=.*[A-Z])/;
export const ContainsDigit = /(?=.*\d)/;
export const ContainsSpecialCharacter = /(?=.*[!@#$&*])/;

export const PasswordRegex = new RegExp(`^${ContainsLowerCase.source}${ContainsUpperCase.source}${ContainsDigit.source}${ContainsSpecialCharacter.source}.{8,}$`);
