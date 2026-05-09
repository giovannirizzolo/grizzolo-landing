const en = {
    nav: {
        contacts: 'Contacts',
        about: 'About',
        experiences: 'Experiences',
    },
    hero: {
        welcome: 'Welcome to my website',
        words: ['Frontend web', 'Sicilian', 'Relentless', 'Sushi lover 🍣'],
        iam: "I'm",
        developer: 'developer',
        bookCall: 'Book a call',
        seeExperiences: 'See my experiences',
    },
    about: {
        title: 'Who is grizzolo?',
        subtitle: 'Well... still not famous enough to find an answer on Wikipedia, so...',
        bio1: 'Giovanni Rizzolo (aka grizzolo) is a web developer born in the sunny city of Palermo, Sicily.',
        bio2: '{age} years old, 100% mediterranean blood flows through his veins.',
        bio3: 'His obsession for tech, mixed with an unconditional love for his homeland, fuels his will to make Sicily a better place for people to work, live, and grow, as professionals and, most importantly, as human beings.',
    },
    projects: {
        intro: "Still figuring out how to compete with Musk's SpaceX, but meanwhile...",
        nomafiaTitle: 'A NoMafia museum of memory',
        nomafiaDesc: 'NoMafiaMemorial is a project developed by Uppercat Studio which aims to keep alive the memory of the deceased pioneers of anti-mafia and justice\'s heroes such as Falcone and Borsellino.',
        magicDesc: 'A platform entirely dedicated to Magicmotorsport distributors all over the world. Goal of this project is to give them more visibility and chances to increase their market opportunities',
        checkItOut: 'Check it out',
    },
    social: {
        tagline: "Okay, so... now if you don't want to sell me water purifiers...",
        callOrEmail: 'You can call me at',
        thisNumber: 'this number',
        or: 'or',
        emailMe: 'email me!',
        socialIntro: 'But if you want to find out more, check out my social links to...',
        linkedinBefore: 'Read my',
        linkedinMiddle: 'megalomaniacal',
        linkedinAfter: 'posts on',
        githubBefore: 'Fix my broken code on',
        instagramBefore: 'Like my pics on',
        email: 'Email',
        callMe: 'Call me',
    },
    footer: {
        designed: 'Designed and coded with passion by',
        rights: 'All rights reserved®',
    },
} as const

export default en

type LooseTranslations<T> = {
  [K in keyof T]: T[K] extends readonly string[]
    ? string[]
    : T[K] extends object
    ? LooseTranslations<T[K]>
    : string
}
export type Translations = LooseTranslations<typeof en>
