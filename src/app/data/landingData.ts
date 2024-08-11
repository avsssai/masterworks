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
    name: "Vermeer",
    number: 3,
    imageURI: "/vermeer/vermeer-girl-vermeer.jpg",
    alt: "A photo of the painting The Girl with the Pearl Earring by Johannes Vermeer",
    link: "/painters/vermeer",
  },
  {
    name: "Vincent Van Gogh",
    number: 4,
    imageURI: "/vangogh/van-gogh-starry-night.jpg",
    alt: "A photo of the painting starry night by Van Gogh",
    link: "/painters/vangogh",
  },
];
