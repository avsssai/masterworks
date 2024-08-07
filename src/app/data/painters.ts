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
  paintings: any;
}

export const paintersData: IProps = {
  rembrandt: {
    firstName: "Rembrandt",
    secondName: "Van Rijn",
    displayNameFirst: "Rem",
    displayNameSecond: "Brandt",
    born: "MDCVI",
    died: "MDCLXIX",
    displayPicture: "",
    paintings: [],
  },
};
