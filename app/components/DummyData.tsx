import CakeImg from "@/public/MenuItems/cake.png";
import SomsaImg from "@/public/MenuItems/somsa.png";
import SaladImg from "@/public/MenuItems/salad.png";
import DoughImg from "@/public/MenuItems/dough.png";
import CoffeImg from "@/public/MenuItems/coffee.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import SomsaSectionImg from "@/public/Sections/SomsaSectionImg.png";
import CakeSectionImg from "@/public/Sections/CakeSectionImg.png";
import SaladsSectionImg from "@/public/Sections/SaladsSectionImg.png";
import YarimTayyorSection from "@/public/Sections/YarimTayyorSection.png";
import CoffeeSectionImg from "@/public/Sections/coffee.png";

const description: string =
  "Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed.";

type sectionItem = {
  id: string;
  name: string;
  imageName: StaticImport;
};

export interface menuItem {
  id: string;
  name: string;
  price: number;
  ImageName: StaticImport;
  description: string;
}

export interface menuSection {
  section: sectionItem;
  sectionItems: menuItem[];
}

const menu: menuSection[] = [
  {
    section: {
      id: "1",
      name: "Somsa",
      imageName: SomsaSectionImg,
    },
    sectionItems: [
      {
        id: "1",
        name: "Tomchi",
        price: 5000,
        ImageName: SomsaImg,
        description,
      },
      {
        id: "2",
        name: "Konus",
        price: 5000,
        ImageName: SomsaImg,
        description,
      },
      {
        id: "3",
        name: "Uchburchak",
        price: 5000,
        ImageName: SomsaImg,
        description,
      },
      {
        id: "4",
        name: "Drakon",
        price: 5000,
        ImageName: SomsaImg,
        description,
      },
    ],
  },
  {
    section: {
      id: "2",
      name: "Cakes",
      imageName: CakeSectionImg,
    },
    sectionItems: [
      {
        id: "5",
        name: "Apple Cake",
        price: 15000,
        ImageName: CakeImg,
        description,
      },
      {
        id: "6",
        name: "Peanut Butter Cake",
        price: 15000,
        ImageName: CakeImg,
        description,
      },
      {
        id: "7",
        name: "Pumpkin Bread",
        price: 15000,
        ImageName: CakeImg,
        description,
      },
      {
        id: "8",
        name: "Cherry Cake",
        price: 15000,
        ImageName: CakeImg,
        description,
      },
    ],
  },
  {
    section: {
      id: "3",
      name: "Salads",
      imageName: SaladsSectionImg,
    },
    sectionItems: [
      {
        id: "9",
        name: "Ceasar Salad",
        price: 10000,
        ImageName: SaladImg,
        description,
      },
      {
        id: "10",
        name: "Fruit Salad",
        price: 10000,
        ImageName: SaladImg,
        description,
      },
      {
        id: "11",
        name: "Meat Salad",
        price: 10000,
        ImageName: SaladImg,
        description,
      },
      {
        id: "12",
        name: "Aisha Salad",
        price: 10000,
        ImageName: SaladImg,
        description,
      },
    ],
  },
  {
    section: {
      id: "4",
      name: "Yarim-tayyor",
      imageName: YarimTayyorSection,
    },
    sectionItems: [
      {
        id: "13",
        name: "Somsa",
        price: 3000,
        ImageName: DoughImg,
        description,
      },
      {
        id: "14",
        name: "Chuchvara",
        price: 3000,
        ImageName: DoughImg,
        description,
      },
      {
        id: "15",
        name: "Bilishi",
        price: 3000,
        ImageName: DoughImg,
        description,
      },
      {
        id: "16",
        name: "Qatlama",
        price: 3000,
        ImageName: DoughImg,
        description,
      },
      {
        id: "17",
        name: "Kotlet",
        price: 3000,
        ImageName: DoughImg,
        description,
      },
      {
        id: "18",
        name: "Galupsi",
        price: 3000,
        ImageName: DoughImg,
        description,
      },
      {
        id: "19",
        name: "Do'lma",
        price: 3000,
        ImageName: DoughImg,
        description,
      },
      {
        id: "20",
        name: "Cheburek",
        price: 3000,
        ImageName: DoughImg,
        description,
      },
      {
        id: "21",
        name: "Manti",
        description,
        price: 3000,
        ImageName: DoughImg,
      },
    ],
  },
  {
    section: {
      id: "5",
      name: "Ichimliklar",
      imageName: CoffeeSectionImg,
    },
    sectionItems: [
      {
        id: "22",
        name: "Amerikano",
        price: 8000,
        ImageName: CoffeImg,
        description,
      },
      {
        id: "23",
        name: "Latte",
        price: 8000,
        ImageName: CoffeImg,
        description,
      },
      {
        id: "24",
        name: "Cappucino",
        price: 8000,
        ImageName: CoffeImg,
        description,
      },
      {
        id: "25",
        name: "Moxito",
        description,
        price: 8000,
        ImageName: CoffeImg,
      },
      {
        id: "26",
        name: "Choy",
        price: 8000,
        ImageName: CoffeImg,
        description,
      },
      {
        id: "27",
        name: "Limon Choy",
        price: 8000,
        ImageName: CoffeImg,
        description,
      },
    ],
  },
];

export default menu;
