export function doesTextFit(element) {
    return element.scrollWidth <= element.clientWidth && element.scrollHeight <= element.clientHeight;
}