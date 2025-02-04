export function validateAllParameters(data) {
  if (!data.name || !data.desc || !data.image || !data.price) {
    return false;
  }
  if (
    typeof data.name !== String ||
    typeof data.desc !== String ||
    typeof data.image ||
    String ||
    typeof data.price !== Number
  ) {
    return false;
  }
  return true;
}
