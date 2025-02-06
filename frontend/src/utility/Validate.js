export function simpleValidateSignUp(data) {
  if (
    !data.confirmPassword ||
    !data.email ||
    !data.firstname ||
    !data.lastname ||
    !data.password ||
    !data.username
  ) {
    return { success: false, reason: "please fill in all fields" };
  } else if (data.confirmPassword !== data.password) {
    return { success: false, reason: "passwords do not match" };
  } else {
    return { success: true };
  }
}

export function simpleValidateLogin(data) {
  if (!data.username || !data.password) {
    return { success: false, reason: "please fille in all fields" };
  }
  return { success: true };
}
