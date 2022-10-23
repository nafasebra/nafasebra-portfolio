import SteecoScreenshot from "../assets/images/steeco-screenshot.png";
import asrezScreenshot from "../assets/images/asrez-screenshot.png";
import rodeoScreenshot from "../assets/images/rodeo-screenshot.png";

export type ProjectType = {
  id: number;
  name: string;
  description?: string;
  imageUrl: string;
  target: string;
};

export const Projects: ProjectType[] = [
  {
    id: 145,
    name: "وبسایت شرکت اسرز",
    description: "",
    imageUrl: asrezScreenshot,
    target: "https://asrez.com",
  },
  {
    id: 354,
    name: "وبسایت شرکت استیل صنعت کاشان",
    description: "",
    imageUrl: SteecoScreenshot,
    target: "https://steeco.ir",
  },
  {
    id: 111,
    name: "وبسایت فروشگاهی rodeoshop",
    description: "",
    imageUrl: rodeoScreenshot,
    target: "https://rodeoonline.shop",
  },
];
