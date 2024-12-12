export function checkPasswordStrength(password: string) {
  const checks = {
    minLength: password.length >= 6,
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  }

  const strength = Object.values(checks).filter(Boolean).length

  return {
    score: strength,
    label: 
      strength === 0 ? 'Very Weak' :
      strength === 1 ? 'Weak' :
      strength === 2 ? 'Fair' :
      strength === 3 ? 'Good' :
      strength === 4 ? 'Strong' : 'Very Strong',
    checks
  }
}

