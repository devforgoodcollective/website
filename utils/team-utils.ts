import { TFunction } from "i18next";
import alexandre from "@/public/alexandre.jpeg";
import bernardo from "@/public/bernardo_compressed.jpeg";
import stefano from "@/public/stefano.png";
import daan from "@/public/daan_color.jpeg";
import { StaticImageData } from "next/image";

interface TeamProps {
  imageUrl: string | StaticImageData;
  imageLinkUrl: string;
  firstName: string;
  lastName: string;
  position: string;
  yearsOfExperience: number;
  nationality: string;
  languages: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}

export const getTeam = (t: TFunction): TeamProps[] => {
  return [
    {
      imageUrl: alexandre,
      imageLinkUrl: "https://www.linkedin.com/in/alexandrephiev/",
      firstName: "Alexandre",
      lastName: "Phiev",
      position: "Senior Full Stack Web Developer",
      yearsOfExperience: 8,
      nationality: "fr",
      languages: ["fr", "en", "es"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/alexandrephiev/",
        },
        {
          name: "Github",
          url: "https://github.com/alexphiev",
        },
      ],
    },
    {
      imageUrl: stefano,
      imageLinkUrl: "https://www.linkedin.com/in/stefano-ventrudo-64742783/",
      firstName: "Stefano",
      lastName: "Ventrudo",
      position: "Senior Mobile & Full Stack Web Developer",
      yearsOfExperience: 10,
      nationality: "it",
      languages: ["it", "en", "es"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/stefano-ventrudo-64742783/",
        },
        {
          name: "Github",
          url: "https://github.com/stefanovnt",
        },
      ],
    },
    {
      imageUrl: daan,
      imageLinkUrl: "https://www.linkedin.com/in/daan-knoors/",
      firstName: "Daan",
      lastName: "Knoors",
      position: "Senior Data Scientist & Privacy Engineer",
      yearsOfExperience: 8,
      nationality: "nl",
      languages: ["nl", "en", "es", "de"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/daan-knoors/",
        },
        {
          name: "Github",
          url: "https://github.com/daanknoors",
        },
      ],
    },
    {
      imageUrl: bernardo,
      imageLinkUrl: "https://www.linkedin.com/in/b-caetano/",
      firstName: "Bernardo",
      lastName: "Caetano",
      position: "Senior Backend Developer · AWS Specialist",
      yearsOfExperience: 7,
      nationality: "pt",
      languages: ["pt", "en"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/b-caetano/",
        },
        {
          name: "Github",
          url: "https://github.com/alexphiev",
        },
      ],
    },
  ];
};
