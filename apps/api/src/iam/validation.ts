export function isUsernameValid(username: string): boolean {
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,14}$/
  return usernameRegex.test(username)
}

export function isPasswordValid(password: string): boolean {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{6,}$/
  return passwordRegex.test(password)
}
