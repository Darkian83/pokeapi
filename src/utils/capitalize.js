function capitalizeString(inputString) {
  if (!inputString) {
    return inputString;
  }

  const capitalized =
    inputString.charAt(0).toUpperCase() +
    inputString.slice(1).toLowerCase();

  return capitalized;
}

export default capitalizeString;
