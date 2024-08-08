interface IProps {
  [key: string]: Painter;
}

interface Painter {
  firstName: string;
  secondName: string;
  displayNameFirst: string;
  displayNameSecond: string;
  born: string;
  died: string;
  displayPicture: string;
  displayPictureAlt: string;
  paintings: Painting[];
}

interface Painting {
  number: number;
  name: string;
  year: string;
  imageURI: string;
  alt: string;
  link: string;
  slug: string;
}

export const paintersData: IProps = {
  rembrandt: {
    firstName: "Rembrandt",
    secondName: "Van Rijn",
    displayNameFirst: "Rem",
    displayNameSecond: "Brandt",
    born: "MDCVI",
    died: "MDCLXIX",
    displayPicture: "/rembrandt/rembrandt-self.jpg",
    displayPictureAlt: "Self potrait of the painter Rembrandt.",
    paintings: [
      {
        number: 1,
        name: "The Night Watch",
        year: "MDCXLII",
        imageURI: "/rembrandt/rembrandt-nightwatch.jpg",
        alt: "Image of the painting The Night Watch",
        link: "/rembrandt/paintings/the-night-watch",
        slug: "the-night-watch",
      },
      {
        number: 2,
        name: "The Kitchen Maid",
        year: "MDCLI",
        imageURI: "/rembrandt/rembrandt-kitchenmaid.jpg",
        alt: "Image of the painting The Kitchen Maid",
        link: "/rembrandt/paintings/the-kitchen-maid",
        slug: "the-kitchen-maid",
      },
      {
        number: 3,
        name: "The Artist In Studio",
        year: "MDCXXVIII",
        imageURI: "/rembrandt/rembrandt-artist.jpg",
        alt: "Image of the painting The Artist in Studio",
        link: "/rembrandt/paintings/the-artist-in-studio",
        slug: "the-artist-in-studio",
      },
      {
        number: 4,
        name: "Titus As A Monk",
        year: "MDCLX",
        imageURI: "/rembrandt/rembrandt-titus.jpeg",
        alt: "Image of the painting Titus as A Monk",
        link: "/rembrandt/paintings/titus-as-a-monk",
        slug: "titus-as-a-monk",
      },
    ],
  },
  "leonardo-da-vinci": {
    firstName: "Leonardo",
    secondName: "Da Vinci",
    displayNameFirst: "Leo",
    displayNameSecond: "Nardo",
    born: "MDCVI",
    died: "MDCLXIX",
    displayPicture: "/leonardo/leonardo-display.png",
    displayPictureAlt: "Self potrait of the painter Leonardo Da Vinci.",
    paintings: [
      {
        number: 1,
        name: "The Mona Lisa",
        year: "MDCXLII",
        imageURI: "/leonardo/Leonardo-Mona-Lisa.jpg",
        alt: "Image of the painting The Mona Lisa",
        link: "/leonardo-da-vinci/paintings/the-mona-lisa",
        slug: "the-mona-lisa",
      },
      {
        number: 2,
        name: "The Last Supper",
        year: "MDCLI",
        imageURI: "/leonardo/leonardo-last-supper.jpg",
        alt: "Image of the painting The Last Supper",
        link: "/leonardo-da-vinci/paintings/the-last-supper",
        slug: "the-last-supper",
      },
      {
        number: 3,
        name: "The Lady And The Ermine",
        year: "MDCXXVIII",
        imageURI: "/leonardo/leonardo-lady-ermine.jpg",
        alt: "Image of the painting The Lady and the Ermine by Leonardo Da Vinci",
        link: "/leonardo-da-vinci/paintings/the-lady-and-the-ermine",
        slug: "the-lady-and-the-ermine",
      },
      {
        number: 4,
        name: "The Virgin Of The Rocks",
        year: "MDCLX",
        imageURI: "/leonardo/leonardo-virgin-rocks.jpg",
        alt: "Image of the painting The Virgin of the Rocks by Leonardo Da Vinci.",
        link: "/leonardo-da-vinci/paintings/the-virgin-of-the-rocks",
        slug: "the-virgin-of-the-rocks",
      },
    ],
  },
};
