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
  id: number;
  name: string;
  year: string;
  paintingURI: string;
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
        id: 1,
        name: "The Night Watch",
        year: "MDCXLII",
        paintingURI: "",
      },
      {
        id: 2,
        name: "The Kitchen Maid",
        year: "MDCLI",
        paintingURI: "",
      },
      {
        id: 3,
        name: "The Artist In Studio",
        year: "MDCXXVIII",
        paintingURI: "",
      },
      {
        id: 4,
        name: "Titus As A Monk",
        year: "MDCLX",
        paintingURI: "",
      },
    ],
  },
};
