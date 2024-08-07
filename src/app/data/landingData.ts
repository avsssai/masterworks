interface CardData {
  imageURI: string;
  name: string;
  alt: string;
  number: number;
  link: string;
}

export const landingPageData: CardData[] = [
  {
    name: "Rembrandt",
    number: 1,
    imageURI: "/rembrandt/rembrandt-athena.jpg",
    alt: "Painting of Athena the goddess of war by Rembrandt.",
    link: "/painters/rembrandt",
  },
  {
    name: "Leonardo Da Vinci",
    number: 2,
    alt: "Painting of Mona List by Leonardo Da Vinci.",
    imageURI: "/leonardo/Leonardo-Mona-Lisa.jpg",
    link: "/painters/leonardo-da-vinci",
  },
  {
    name: "Michelangelo",
    number: 3,
    imageURI: "/michelangelo/michelangelo-david.jpg",
    alt: "A photo of the statue David by Michelangelo",
    link: "/painters/michelangelo",
  },
  {
    name: "Vincent Van Gogh",
    number: 4,
    imageURI: "/vangogh/van-gogh-starry-night.jpg",
    alt: "A photo of the painting starry night by Van Gogh",
    link: "/painters/vincent-van-gogh",
  },
];
