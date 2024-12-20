const description: string =
  "Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do eiusmod tempor incididunt ut labore et.";

type sectionItem = {
  id: string;
  name: string;
};

type menuItem = {
  id: string;
  name: string;
  description: string;
};

type menuSection = {
  section: sectionItem;
  sectionItems: menuItem[];
};

const sections: sectionItem[] = [
  {
    id: "1",
    name: "Somsa",
  },
  {
    id: "2",
    name: "Cake",
  },
  {
    id: "3",
    name: "Salad",
  },
  {
    id: "1",
    name: "Yarim-tayyor",
  },
];

const menu: menuSection[] = [
  {
    section: {
      id: "1",
      name: "Somsa",
    },
    sectionItems: [
      {
        id: "1",
        name: "Tomchi",
        description,
      },
      {
        id: "2",
        name: "Konus",
        description,
      },
      {
        id: "3",
        name: "Uchburchak",
        description,
      },
      {
        id: "4",
        name: "Drakon",
        description,
      },
    ],
  },
  {
    section: {
      id: "2",
      name: "Cakes",
    },
    sectionItems: [
      {
        id: "5",
        name: "Apple Cake",
        description,
      },
      {
        id: "6",
        name: "Peanut Butter Cake",
        description,
      },
      {
        id: "7",
        name: "Pumpkin Bread",
        description,
      },
      {
        id: "8",
        name: "Cherry Cake",
        description,
      },
    ],
  },
  {
    section: {
      id: "3",
      name: "Salads",
    },
    sectionItems: [
      {
        id: "9",
        name: "Ceasar Salad",
        description,
      },
      {
        id: "10",
        name: "Fruit Salad",
        description,
      },
      {
        id: "11",
        name: "Meat Salad",
        description,
      },
      {
        id: "12",
        name: "Aisha Salad",
        description,
      },
    ],
  },
  {
    section: {
      id: "4",
      name: "Yarim-tayyor",
    },
    sectionItems: [
      {
        id: "13",
        name: "Somsa",
        description,
      },
      {
        id: "14",
        name: "Chuchvara",
        description,
      },
      {
        id: "15",
        name: "Bilishi",
        description,
      },
      {
        id: "16",
        name: "Qatlama",
        description,
      },
      {
        id: "17",
        name: "Kotlet",
        description,
      },
      {
        id: "18",
        name: "Galupsi",
        description,
      },
      {
        id: "19",
        name: "Do'lma",
        description,
      },
      {
        id: "20",
        name: "Cheburek",
        description,
      },
      {
        id: "21",
        name: "Manti",
        description,
      },
    ],
  },
  {
    section: {
      id: "5",
      name: "Ichimliklar",
    },
    sectionItems: [
      {
        id: "22",
        name: "Amerikano",
        description,
      },
      {
        id: "23",
        name: "Latte",
        description,
      },
      {
        id: "24",
        name: "Cappucino",
        description,
      },
      {
        id: "25",
        name: "Moxito",
        description,
      },
      {
        id: "26",
        name: "Choy",
        description,
      },
      {
        id: "27",
        name: "Limon Choy",
        description,
      },
    ],
  },
];

export { sections };
export default menu;
