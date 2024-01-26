import BathroomIcon from "@/assets/icons/furniture/bathroom";
import BedIcon from "@/assets/icons/furniture/bed";
import BedroomIcon from "@/assets/icons/furniture/bedroom";
import KitchenIcon from "@/assets/icons/furniture/kitchen";
import LivingRoomIcon from "@/assets/icons/furniture/living-room";
import OfficeIcon from "@/assets/icons/furniture/office";
import ShopIcon from "@/assets/icons/furniture/shop";
import WardrobeIcon from "@/assets/icons/furniture/wardrobe";

export const CATEGORIES: Category[] = [
  {
    title: "Szafy",
    link: "/szafy",
    icon: <WardrobeIcon />,
  },
  {
    title: "Sypialnie",
    link: "/sypialnie",
    icon: <BedroomIcon />,
  },
  {
    title: "Łóżka tapicerowane",
    link: "/lozka-tapicerowane",
    icon: <BedIcon />,
  },
  {
    title: "Biurowe",
    link: "/biurowe",
    icon: <OfficeIcon />,
  },
  {
    title: "Kuchenne",
    link: "/kuchenne",
    icon: <KitchenIcon />,
  },
  {
    title: "Łazienkowe",
    link: "/lazienkowe",
    icon: <BathroomIcon />,
  },
  {
    title: "Pokojowe",
    link: "/pokojowe",
    icon: <LivingRoomIcon />,
  },
  {
    title: "Sklepowe",
    link: "/sklepowe",
    icon: <ShopIcon />,
  },
];
