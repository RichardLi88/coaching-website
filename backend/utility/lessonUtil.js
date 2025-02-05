export function validateAllParameters(data) {
  if (!data.title || !data.coach || !data.desc || !data.image || !data.price) {
    return false;
  }
  if (
    typeof data.coach !== "string" ||
    typeof data.title !== "string" ||
    typeof data.desc !== "string" ||
    typeof data.image !== "string" ||
    typeof data.price !== "number"
  ) {
    return false;
  }
  return true;
}
