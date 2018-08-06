export function isStrong(password) {
  if (password.length < 8) {
    return { success: false, reason: REQUIREMENTS.LENGTH };
  }

  if (containsIlegalChar(password)) {
    return { success: false, reason: REQUIREMENTS.ILLEGAL_CHAR };
  }

  if (containsThreeCharsInARow(password)) {
    return { success: false, reason: REQUIREMENTS.DOUBLE };
  }

  if (!containsUppercaseLetters(password)) {
    return { success: false, reason: REQUIREMENTS.UPPERCASE };
  }
  return { success: true };
}

function containsIlegalChar(string) {
  return /[^\w\d!@#$%^&*()]/.test(string);
}

function containsThreeCharsInARow(string) {
  return /(.)\1{2}/.test(string);
}

function containsUppercaseLetters(string) {
  return /[A-Z]/.test(string);
}

export const errors = {
  REQUIRED: 'Password is required',
  NOT_STRONG: 'Password is not strong enough',
};

export const REQUIREMENTS = {
  LENGTH: 1,
  ILLEGAL_CHAR: 2,
  DOUBLE: 3,
  UPPERCASE: 4,
};
