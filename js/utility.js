export function doesTextFit(element) {
    console.log("scroll width: " + element.scrollWidth + "    client width: " + element.clientWidth)
    return element.scrollWidth <= element.clientWidth && element.scrollHeight <= element.clientHeight;
}