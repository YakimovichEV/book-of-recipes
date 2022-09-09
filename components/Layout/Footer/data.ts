import {
    FaDiscord,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface Data {
    id: string | number;
    name?: string;
    href: string;
    Icon: IconType;
}

export const data: Data[] = [
    {
        id: 0,
        name: "Facebook",
        href: "https://www.facebook.com/",
        Icon: FaFacebook,
    },
    {
        id: 1,
        name: "Instagram",
        href: "https://www.instagram.com/",
        Icon: FaInstagram,
    },
    {
        id: 2,
        name: "https://twitter.com/",
        href: "",
        Icon: FaTwitter,
    },
    {
        id: 3,
        name: "https://github.com/",
        href: "",
        Icon: FaGithub,
    },
    {
        id: 4,
        name: "Discord",
        href: "https://discord.com/",
        Icon: FaDiscord,
    },
];
