import gsap from 'gsap'

const bubbleSize = 15
const swayDuration = 5
const swayDist = 25

let width = 0
let height = 0

if (process.client) {
    width = window.innerWidth
    height = window.innerHeight
    window.addEventListener('resize', () => {
        width = window.innerWidth
        height = window.innerHeight
    })
}

export const createTween = (bubble: HTMLDivElement, starting?: boolean) => {
    const floatDist = height * 0.25
    const dimension = bubble.getBoundingClientRect()

    if (starting || dimension.top + bubble.offsetHeight < 0 || dimension.left + bubble.offsetWidth < 0 || dimension.left + bubble.offsetWidth > width) {
        const size = getRandom(bubbleSize, bubbleSize * 5)
        gsap.set(bubble, {
            width: size,
            height: size,
            x: 0,
            y: 0,
            top: getRandom(height),
            left: getRandom(-(size / 2), width - size / 2),
            opacity: getRandom(0.5, 1),
            rotation: getRandom(0, 360),
        })
    }

    gsap.to(bubble, {
        duration: getRandom(swayDuration),
        ease: 'none',
        y: '-=' + getRandom(floatDist) + 'px',
        x: (Math.random() >= 0.5 ? '+=' : '-=') + getRandom(swayDist) + 'px',
        rotation: getRandom(-90, 90),
        onComplete: () => createTween(bubble, false),
    })
}

const getRandom = (min: number, max: number | null = null) => {
    const realMax = max === null ? min * 2 : max
    return min + Math.random() * (realMax - min)
}
