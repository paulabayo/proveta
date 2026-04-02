import { Level } from './types';

export const LEVELS: Level[] = [
  {
    id: '2-digit-add',
    title: '2 Cifras',
    description: 'Perfecto para entrenar',
    operation: 'addition',
    digits: 2,
    stars: 2,
    maxStars: 3,
    status: 'active',
    tag: 'NIVEL 1'
  },
  {
    id: '3-digit-add',
    title: '3 Cifras',
    description: 'El reto definitivo',
    operation: 'addition',
    digits: 3,
    stars: 0,
    maxStars: 3,
    status: 'active',
    tag: 'NIVEL 2'
  },
  {
    id: 'multiplication',
    title: 'Multiplicación',
    description: 'Desbloquea ganando estrellas',
    operation: 'multiplication',
    digits: 1,
    stars: 0,
    maxStars: 3,
    status: 'locked'
  }
];

export const MONSTERS = {
  blue: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXClQSAjUnLLFzlqNFrkv9LFWOmNwQ2gD0MOaCr8Oe9vMCgl2u_3ZgWLut78g0TNKr6_sSwwS_x0IHhnLMn81BvKGF5XAQSbaGVT4YtpcGBu9IAoUlUKEvLsbtQqBL9rxPupHGmUtLRi2mDhS-gI_xc7L52VgUztBhERstHxEuFYiRHGip6zUchsZjvY_kvOrLXSmChAW0x937ZzX-m51FLOfOs2fS4mnUbrZ01c7izc0QgvIBSmavRgWNUZ9oMtZxG4P9dkELDu8R",
  owl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX6FZxPmLN3R32oiYmN5YE6nxPG0bZ1j7k6QqBoASz2alKe1tOKTW8P8Y4qonmGoGVu84hmw0aCRIxA61Becr0zINkqca3nDfZFM5c0rtRhklO4J5dQwszpz9-QXNl60qBDJB55a84wRT8SXsp59myp0I8IRCX9E6sbTdq3GAhEGL63JSo0A_jPBMVKD4Oo00cbE-fHB02i7eS_DkmO8410Vrk_ztw_OabAb_4aogwlLkSfhfvpDnUTSU8OeqAWbTfmFbNzLbpTc8X",
  green: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVXwkU4n4YiCXwX2f9CjhoTIaC_S52qqqHoQU53H8L1WNrqpV60AhyiZHiRdyW5oPW5aRZt4DDKlVy02b_30ykEKZSx7AnYmE88QjAiYR7QxFkYQPDkIMNW5nugrnkuA6tFJ_Vt_sc-k_W_a34aVaUvIpfbSIGmxBFyjrmIwO-0l2RDSYDnXG9aOUQJHHx43hOazy7LGBs45acsdVeAuAoca0zK82rcDLzYKYsBXqheJjMHgfaH0fnEqmlb0wiCLLI0lA_28CjwlMq",
  purple: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7G8RRo_PRp9-lYbWeLEFRF-JKyQD8UlqItBQmyQ9P2nbcYRbEbtzv04baUAmId3-LYlCTgqsWJY7OlpWdmdFnyt3Zrd9eXBIBSkjl0clSeL5PhKsgK7fLQjAORrQHRq80tyvQoQbTIPiPDtOINIV3ZIE5xgZUySFf6BsMM8XEijpwU7S2XNU6fKKTgbeWkKSUrJsUSVHSgJld2Dvh54EUbbqM34jCR-2B5feI2baC6vx8uN8tZyUhhAYVBKUlbuE5X_ILCM1XvROX",
  trophy: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdlMVtCzGp6ql-7zuivKndIIL15QORwKv7iXSavBWYWZCe5xIZvU9pXHljZYAzQZfrKRrygA0_tgZgocLkNhNlZIWtot8yK4yxqs6EszgGJ3VV9rL252t2ut5P-F9xP8v9Q-mkKJ4u9C2IALCv_QwUk7AuCF3WMC-FGL7kW0Ph_wHNBSJAF57x1Ic6ZqxiIPyBp-OQBvZIv1ifHgC4IZaSerRuZyXdgLA056mMDOXLYBqT4RyybXcQtqGl9WgXsQGf3rtQsJIOT7n4"
};
