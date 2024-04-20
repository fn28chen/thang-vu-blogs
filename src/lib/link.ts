import { SiDiscord, SiFacebook, SiInstagram, SiLinkedin, SiSpotify, SiYoutube } from "react-icons/si";
import { IconType } from "react-icons";

export type Link = {
  name: string;
  url: string;
  value: string;
  icon: IconType;
};

export type Links = Link[];

export const links: Links = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100035288013297",
    value: "Vu Nguyen Duc Thang",
    icon: SiFacebook,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UC74KzZEDspHTNvKIjwl1Kmw",
    value: "Sunsett_radio",
    icon: SiYoutube,
  },
  {
    name: "LinedIn",
    url: "https://www.linkedin.com/in/vu-thang-282b76205/",
    value: "Vu Thang",
    icon: SiLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_vndt_2112",
    value: "@_vndt_2112",
    icon: SiInstagram,
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/4gNDdUh9g9ylzs00ODQd0Z",
    value: "Sunsett_radio",
    icon: SiSpotify,
  },
];
