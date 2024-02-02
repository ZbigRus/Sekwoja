import BathroomIcon from "@/assets/icons/furniture/bathroom";
import BedIcon from "@/assets/icons/furniture/bed";
import BedroomIcon from "@/assets/icons/furniture/bedroom";
import KitchenIcon from "@/assets/icons/furniture/kitchen";
import LivingRoomIcon from "@/assets/icons/furniture/living-room";
import OfficeIcon from "@/assets/icons/furniture/office";
import ShopIcon from "@/assets/icons/furniture/shop";
import WardrobeIcon from "@/assets/icons/furniture/wardrobe";
import { skeleton } from "@/assets/images";
import {
  bathroom,
  bedroom,
  kitchen,
  room,
  shop,
  upholstered,
  wardrobe,
} from "@/assets/images/[type]";
import Content from "@/components/furniture/content";

export const CATEGORIES: Category[] = [
  {
    title: "Szafy",
    link: "/meble/szafy",
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
    },
  },
  {
    title: "Sypialnie",
    link: "/meble/sypialnie",
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
      media: [bedroom.src],
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
    },
  },
  {
    title: "Łóżka tapicerowane",
    link: "/meble/lozka-tapicerowane",
    icon: <BedIcon />,
    hero: {
      title: "Przeglądasz kolekcję mebli tapicerowanych",
      content: (
        <Content
          paragraphs={[
            "Lorem ipsum dolor sit amet consectetur. Elit at tincidunt at velit egestas nibh diam. Velit condimentum nunc neque tristique tempus. Quis bibendum magna commodo a bibendum ligula viverra. Nisi vel nec malesuada ultrices.",
            "Sed sed tellus vitae non lectus at sed diam etiam. Faucibus malesuada a justo velit. Etiam augue lectus ultrices lobortis augue lorem ac eleifend ac. Blandit amet massa dictumst praesent maecenas.",
          ]}
        />
      ),
      media: [upholstered.src],
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
    },
  },
  {
    title: "Biurowe",
    link: "/meble/biurowe",
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
      media: [skeleton.src],
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
    },
  },
  {
    title: "Kuchenne",
    link: "/meble/kuchenne",
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
    },
  },
  {
    title: "Łazienkowe",
    link: "/meble/lazienkowe",
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
    },
  },
  {
    title: "Pokojowe",
    link: "/meble/pokojowe",
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
      media: [room.src],
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
    },
  },
  {
    title: "Sklepowe",
    link: "/meble/sklepowe",
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
      media: [shop.src],
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
    },
  },
];
