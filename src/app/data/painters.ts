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
  vermeer: {
    firstName: "Johannes",
    secondName: "Vermeer",
    displayNameFirst: "Ver",
    displayNameSecond: "Meer",
    born: "MDCVI",
    died: "MDCLXIX",
    displayPicture: "/vermeer/vermeer-display.jpg",
    displayPictureAlt:
      "Potrait of the girl with the pearl earring by Johannes Vermeer.",
    paintings: [
      {
        number: 1,
        name: "The Girl with the Pearl Earring",
        year: "MDCXLII",
        imageURI: "/vermeer/vermeer-girl-vermeer.jpg",
        alt: "Image of the painting The Girl with the Pearl Earring",
        link: "/vermeer/paintings/the-girl-with-pearl-earring",
        slug: "the-girl-with-pearl-earring",
      },
      {
        number: 2,
        name: "The Astronomer",
        year: "MDCLI",
        imageURI: "/vermeer/vermeer-astronomer.jpg",
        alt: "Image of the painting The Astronomer",
        link: "/vermeer/paintings/the-astronomer",
        slug: "the-astronomer",
      },
      {
        number: 3,
        name: "The Art of Painting",
        year: "MDCXXVIII",
        imageURI: "/vermeer/vermeer-art-of-painting.jpg",
        alt: "Image of the painting The Art of Painting by Johannes Vermeer",
        link: "/vermeer/paintings/the-art-of-painting",
        slug: "the-art-of-painting",
      },
      {
        number: 4,
        name: "The Milk Maid",
        year: "MDCLX",
        imageURI: "/vermeer/vermeer-milk-maid.jpg",
        alt: "Image of the painting The Milk Maid by Johannes Vermeer.",
        link: "/vermeer/paintings/the-milk-maid",
        slug: "the-milk-maid",
      },
    ],
  },
  vangogh: {
    firstName: "Vincent",
    secondName: "Van Gogh",
    displayNameFirst: "Vincent",
    displayNameSecond: "Van Gogh",
    born: "MDCVI",
    died: "MDCLXIX",
    displayPicture: "/vangogh/van-gogh-display.jpg",
    displayPictureAlt: "Self Potrait of Vincent Van Gogh.",
    paintings: [
      {
        number: 1,
        name: "The Starry Night",
        year: "MDCXLII",
        imageURI: "/vangogh/van-gogh-starry-night.jpg",
        alt: "Image of the painting The Starry Night",
        link: "/vangogh/paintings/the-starry-night",
        slug: "the-starry-night",
      },
      {
        number: 2,
        name: "Olive Trees",
        year: "MDCLI",
        imageURI: "/vangogh/van-gogh-olive-trees.jpg",
        alt: "Image of the painting Olive Trees",
        link: "/vangogh/paintings/olive-trees",
        slug: "olive-trees",
      },
      {
        number: 3,
        name: "The Wheat Field with Thunderclouds",
        year: "MDCXXVIII",
        imageURI: "/vangogh/van-gogh-wheat-field-thunderclouds.jpg",
        alt: "Image of the painting The Wheat field with Thunderclouds",
        link: "/vangogh/paintings/wheat-field-with-thunderclouds",
        slug: "wheat-field-with-thunderclouds",
      },
      {
        number: 4,
        name: "The Wheat Field",
        year: "MDCLX",
        imageURI: "/vangogh/van-gogh-wheat-field.jpg",
        alt: "Image of the painting The Wheat Field.",
        link: "/vangogh/paintings/wheat-field",
        slug: "wheat-field",
      },
    ],
  },
};
