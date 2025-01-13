export function doesTextFit(element) {
    return element.scrollWidth <= element.clientWidth && element.scrollHeight <= element.clientHeight;
}

export function isStringNum(string) {
  let num = parseFloat(string);
  return !isNaN(num);
}