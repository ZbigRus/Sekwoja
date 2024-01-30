import BathroomIcon from "@/assets/icons/furniture/bathroom";
import BedIcon from "@/assets/icons/furniture/bed";
import BedroomIcon from "@/assets/icons/furniture/bedroom";
import KitchenIcon from "@/assets/icons/furniture/kitchen";
import LivingRoomIcon from "@/assets/icons/furniture/living-room";
import OfficeIcon from "@/assets/icons/furniture/office";
import ShopIcon from "@/assets/icons/furniture/shop";
import WardrobeIcon from "@/assets/icons/furniture/wardrobe";
import { bathroom, kitchen, wardrobe } from "@/assets/images/[type]";
import Content from "@/components/furniture/content";

export const CATEGORIES: Category[] = [
  {
    title: "Szafy",
    link: "/szafy",
    icon: <WardrobeIcon />,
    hero: {
      title: "Przeglądasz kolekcję szaf",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [wardrobe.src],
    },
    desc: {
      title: "Kolekcja szaf",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
  },
  {
    title: "Sypialnie",
    link: "/sypialnie",
    icon: <BedroomIcon />,
    hero: {
      title: "Przeglądasz kolekcję mebli sypialnianych",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
    desc: {
      title: "Meble sypialniane",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
  },
  {
    title: "Łóżka tapicerowane",
    link: "/lozka-tapicerowane",
    icon: <BedIcon />,
    hero: {
      title: "Przeglądasz kolekcję łóżek tapicerowanych",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
    desc: {
      title: "Łóżka tapicerowane",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
  },
  {
    title: "Biurowe",
    link: "/biurowe",
    icon: <OfficeIcon />,
    hero: {
      title: "Przeglądasz kolekcję mebli biurowych",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
    desc: {
      title: "Meble biurowe",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
  },
  {
    title: "Kuchenne",
    link: "/kuchenne",
    icon: <KitchenIcon />,
    hero: {
      title: "Przeglądasz kolekcję mebli kuchennych",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [kitchen.src],
    },
    desc: {
      title: "Meble kuchenne",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
  },
  {
    title: "Łazienkowe",
    link: "/lazienkowe",
    icon: <BathroomIcon />,
    hero: {
      title: "Przeglądasz kolekcję mebli łazienkowych",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [bathroom.src],
    },
    desc: {
      title: "Meble łazienkowe",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
  },
  {
    title: "Pokojowe",
    link: "/pokojowe",
    icon: <LivingRoomIcon />,
    hero: {
      title: "Przeglądasz kolekcję mebli pokojowych",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
    desc: {
      title: "Meble pokojowe",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
  },
  {
    title: "Sklepowe",
    link: "/sklepowe",
    icon: <ShopIcon />,
    hero: {
      title: "Przeglądasz kolekcję mebli sklepowych",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
    desc: {
      title: "Meble sklepowe",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [],
    },
  },
];
