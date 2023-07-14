
import gsap from 'gsap';

const bubbleSize = 15
const swayDuration = 5
const  swayDist = 25

const width = ref<number>(process.client ? window.innerWidth : 0)
const height = ref<number>(process.client ? window.innerHeight : 0)

let floatDist = height.value * 0.25

if(process.client){
    window.addEventListener("resize", () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    });
}

export const createTween = (bubble: HTMLDivElement, starting?: boolean) => {
    
    let startPos = getRandom(height.value),
    dimension = bubble.getBoundingClientRect();

    if(
        starting || 
        (
        ((dimension.top + bubble.offsetHeight) < 0) ||
        ((dimension.left + bubble.offsetWidth) < 0) ||
        ((dimension.left + bubble.offsetWidth) > width.value)
        )
    ) {
    let size = getRandom(bubbleSize, bubbleSize * 5); 
    gsap.set(bubble, {
        width: size,
        height: size,
        x: 0, y: 0,
        top: startPos,
        left: getRandom(-(size / 2), width.value - (size / 2)),
        opacity: getRandom(0.5, 1),
        rotation: getRandom(0, 360),
    });
    }

    gsap.to(bubble, {
    duration: getRandom(swayDuration),
    ease: "none",
    y: getFloatDist(floatDist),
    x: getSwayDist(),
    rotation: getRandom(-90, 90),
    onComplete: () => createTween(bubble, false),
    });
}

const  getSwayDist = () =>  {
    let dir = Math.random() >= 0.5 ? '-' : '+';
    return dir + '=' + getRandom(swayDist) + 'px';
}

const  getFloatDist = (floatDist: number) =>  {
    return '-=' + getRandom(floatDist) + 'px';
}

const  getRandom = (min: number, max: number | null = null) => {
    let realMax = (max === null ? min * 2 : max);
    return min + Math.random() * (realMax - min);    
}