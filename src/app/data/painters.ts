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
  description: string;
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
        description: `One of Rembrandt's most famous works, "The Night Watch" depicts a city militia group led by Captain Frans Banning Cocq. The painting is renowned for its dramatic use of light and shadow (chiaroscuro) and the dynamic, almost theatrical, arrangement of the figures, which gives a sense of movement and action.`,
      },
      {
        number: 2,
        name: "The Kitchen Maid",
        year: "MDCLI",
        imageURI: "/rembrandt/rembrandt-kitchenmaid.jpg",
        alt: "Image of the painting The Kitchen Maid",
        link: "/rembrandt/paintings/the-kitchen-maid",
        slug: "the-kitchen-maid",
        description: `The Cook in a Dutch Kitchen" (1651) by Rembrandt is a captivating scene that portrays a domestic worker, likely a cook, in a typical Dutch kitchen. The painting showcases Rembrandt's skill in rendering light and shadow, creating a warm and intimate atmosphere. The subject is depicted in the midst of her daily tasks, emphasizing the dignity and importance of everyday labor. The use of chiaroscuro—a technique Rembrandt mastered—adds depth and realism to the figure, highlighting her presence against the darkened background.`,
      },
      {
        number: 3,
        name: "The Artist In Studio",
        year: "MDCXXVIII",
        imageURI: "/rembrandt/rembrandt-artist.jpg",
        alt: "Image of the painting The Artist in Studio",
        link: "/rembrandt/paintings/the-artist-in-studio",
        slug: "the-artist-in-studio",
        description: `This work captures a young Rembrandt standing in his studio, contemplating a large canvas. The painting is notable for its intimate portrayal of the artist at work, as well as the symbolic exploration of the creative process. The dimly lit space, filled with shadows, adds to the introspective and contemplative mood of the piece.`,
      },
      {
        number: 4,
        name: "Titus As A Monk",
        year: "MDCLX",
        imageURI: "/rembrandt/rembrandt-titus.jpeg",
        alt: "Image of the painting Titus as A Monk",
        link: "/rembrandt/paintings/titus-as-a-monk",
        slug: "titus-as-a-monk",
        description: `This portrait shows Rembrandt’s son, Titus, dressed as a monk. The painting is distinguished by its emotional depth and the tender, almost melancholic expression on Titus's face. The somber, muted tones and the simplicity of the composition highlight the introspective nature of the subject.`,
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
        description: `The Mona Lisa is one of the most iconic paintings in art history, renowned for its mysterious expression and intricate detail. Leonardo da Vinci's masterful use of sfumato, a technique that allows tones and colors to gradually blend, creates a soft transition between light and shadow on the subject's face. The subject, believed to be Lisa Gherardini, exudes an enigmatic smile that has intrigued viewers for centuries. The painting's serene background and the subtle, lifelike depiction of the sitter make it a masterpiece of the Italian Renaissance.`,
      },
      {
        number: 2,
        name: "The Last Supper",
        year: "MDCLI",
        imageURI: "/leonardo/leonardo-last-supper.jpg",
        alt: "Image of the painting The Last Supper",
        link: "/leonardo-da-vinci/paintings/the-last-supper",
        slug: "the-last-supper",
        description: `The Last Supper is a monumental fresco that captures the moment Jesus announces that one of his disciples will betray him. Leonardo masterfully arranges the twelve apostles in dynamic poses, each reacting to the shocking news with different expressions and gestures. The composition draws the viewer's eye toward the central figure of Christ, who is depicted in calm contrast to the surrounding turmoil. The painting's use of perspective and the realistic portrayal of human emotion make it a pivotal work in Western art.`,
      },
      {
        number: 3,
        name: "The Lady And The Ermine",
        year: "MDCXXVIII",
        imageURI: "/leonardo/leonardo-lady-ermine.jpg",
        alt: "Image of the painting The Lady and the Ermine by Leonardo Da Vinci",
        link: "/leonardo-da-vinci/paintings/the-lady-and-the-ermine",
        slug: "the-lady-and-the-ermine",
        description: `Lady with an Ermine portrays Cecilia Gallerani, a young woman from the Milanese court, holding a small ermine. The painting is celebrated for its graceful composition and the way it conveys the sitter's intelligence and poise. Leonardo's attention to detail is evident in the rendering of Cecilia's features and the delicate fur of the ermine. The interaction between the lady and the animal adds a layer of symbolism, possibly representing purity or loyalty, which were virtues associated with the ermine in Renaissance symbolism.`,
      },
      {
        number: 4,
        name: "The Virgin Of The Rocks",
        year: "MDCLX",
        imageURI: "/leonardo/leonardo-virgin-rocks.jpg",
        alt: "Image of the painting The Virgin of the Rocks by Leonardo Da Vinci.",
        link: "/leonardo-da-vinci/paintings/the-virgin-of-the-rocks",
        slug: "the-virgin-of-the-rocks",
        description: `The Virgin of the Rocks is a complex, layered painting that depicts the Virgin Mary with the infant Jesus, John the Baptist, and an angel in a mysterious, rocky landscape. Leonardo's use of chiaroscuro creates a dramatic contrast between light and dark, emphasizing the figures' ethereal presence. The painting is known for its naturalistic details and the serene, otherworldly atmosphere it evokes. The intricate interplay of gestures and gazes among the figures adds to the painting's enigmatic and contemplative mood.`,
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
        description: `The Girl with a Pearl Earring is one of the most famous paintings by Dutch artist Johannes Vermeer, often referred to as the "Mona Lisa of the North." The painting features a young girl with an exotic turban and a large pearl earring, turning her head over her shoulder as she gazes at the viewer. Vermeer’s use of light is masterful, particularly in the way it illuminates the girl’s face and earring, creating a soft glow. The painting is celebrated for its simplicity, intimacy, and the sense of mystery surrounding the identity and emotion of the subject.`,
      },
      {
        number: 2,
        name: "The Astronomer",
        year: "MDCLI",
        imageURI: "/vermeer/vermeer-astronomer.jpg",
        alt: "Image of the painting The Astronomer",
        link: "/vermeer/paintings/the-astronomer",
        slug: "the-astronomer",
        description: `The Astronomer is another masterpiece by Vermeer that reflects the artist’s fascination with science and knowledge. The painting depicts a learned man, deeply engrossed in his studies, surrounded by instruments of astronomy. The light entering through the window bathes the scene in a gentle glow, emphasizing the scholar’s focus and the calm, contemplative atmosphere. Vermeer’s attention to detail in the textures of the fabrics, the delicate rendering of the globe, and the thoughtful composition contribute to the painting's timeless appeal.`,
      },
      {
        number: 3,
        name: "The Art of Painting",
        year: "MDCXXVIII",
        imageURI: "/vermeer/vermeer-art-of-painting.jpg",
        alt: "Image of the painting The Art of Painting by Johannes Vermeer",
        link: "/vermeer/paintings/the-art-of-painting",
        slug: "the-art-of-painting",
        description: `The Art of Painting is a grand and intricate work by Vermeer that showcases both the artist's technical skill and his deep appreciation for the craft of painting. The scene depicts an artist, believed to be a self-portrait of Vermeer, painting a model dressed as Clio, the muse of history. The room is meticulously detailed, from the ornate chandelier to the rich drapery and the map on the wall. The composition cleverly highlights the act of painting as a revered and intellectual pursuit, blending reality with artistic representation in a manner that is both sophisticated and intimate.`,
      },
      {
        number: 4,
        name: "The Milk Maid",
        year: "MDCLX",
        imageURI: "/vermeer/vermeer-milk-maid.jpg",
        alt: "Image of the painting The Milk Maid by Johannes Vermeer.",
        link: "/vermeer/paintings/the-milk-maid",
        slug: "the-milk-maid",
        description: `The Milkmaid is one of Vermeer’s most beloved works, depicting a simple domestic scene with remarkable detail and depth. The painting shows a maidservant carefully pouring milk into a bowl, with various kitchen items arranged around her on a table. Despite the simplicity of the subject, Vermeer infuses the scene with a sense of dignity and quiet beauty. The play of light and shadow, the rich color palette, and the meticulous attention to textures, such as the maid’s clothing and the bread, elevate the everyday moment to something timeless and profound.`,
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
        description: `The Starry Night is one of Vincent van Gogh’s most iconic works, painted during his stay at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence. The painting depicts a swirling night sky filled with vibrant stars over a quiet village, with a towering cypress tree in the foreground. Van Gogh’s bold use of color, dynamic brushstrokes, and imaginative interpretation of the sky create a sense of emotional intensity and movement. The painting is often interpreted as a reflection of van Gogh’s inner turmoil and his fascination with the mysteries of the night.`,
      },
      {
        number: 2,
        name: "Olive Trees",
        year: "MDCLI",
        imageURI: "/vangogh/van-gogh-olive-trees.jpg",
        alt: "Image of the painting Olive Trees",
        link: "/vangogh/paintings/olive-trees",
        slug: "olive-trees",
        description: `Olive Trees is part of a series of paintings that Vincent van Gogh created while living in the south of France. In this work, van Gogh captures the undulating forms of olive trees under a bright, sunlit sky. The painting is characterized by its expressive brushwork and vibrant colors, which convey the energy and life of the natural landscape. Van Gogh’s use of swirling lines and intense hues reflects his emotional connection to the landscape and his desire to capture the essence of the Mediterranean environment.`,
      },
      {
        number: 3,
        name: "The Wheat Field with Thunderclouds",
        year: "MDCXXVIII",
        imageURI: "/vangogh/van-gogh-wheat-field-thunderclouds.jpg",
        alt: "Image of the painting The Wheat field with Thunderclouds",
        link: "/vangogh/paintings/wheat-field-with-thunderclouds",
        slug: "wheat-field-with-thunderclouds",
        description: `Wheat Field with Thunderclouds is one of the last paintings van Gogh created before his death. The painting shows a vast field of golden wheat beneath a dramatic sky filled with dark, threatening clouds. The contrast between the bright yellow wheat and the ominous sky creates a powerful sense of tension and foreboding. Van Gogh’s thick, impasto brushstrokes give the painting a tactile quality, emphasizing the raw energy and emotion he felt during this period of his life.`,
      },
      {
        number: 4,
        name: "The Wheat Field",
        year: "MDCLX",
        imageURI: "/vangogh/van-gogh-wheat-field.jpg",
        alt: "Image of the painting The Wheat Field.",
        link: "/vangogh/paintings/wheat-field",
        slug: "wheat-field",
        description: `Wheat Field is one of the many paintings van Gogh created that celebrate the rural landscape and the life of the farmer. This painting, like many others in van Gogh’s series on wheat fields, captures the simple beauty of a field of wheat ripening under the sun. The vibrant yellows and blues, combined with van Gogh’s energetic brushwork, convey a sense of vitality and abundance. The painting reflects van Gogh’s admiration for the cycles of nature and his deep connection to the land.`,
      },
    ],
  },
};
