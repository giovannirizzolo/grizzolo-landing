export const isMouseOverElement = (event: MouseEvent, element: Element) => {
    const { clientX, clientY } = event
    const { top, left, right, bottom } = element.getBoundingClientRect()

    return clientX >= left && clientX <= right && clientY >= top && clientY <= bottom
}

export const mouseLeaveHandler = (tween: GSAPTween | undefined) => {
    if (!tween) return
    tween.reverse()
}

export function getOffset(el: HTMLDivElement) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}