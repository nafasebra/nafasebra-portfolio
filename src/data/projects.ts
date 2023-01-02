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
    description: "این وبسایت به کمک تیم اسرز توسعه داده شده",
    imageUrl: "/assets/images/asrez-screenshot.png",
    target: "https://asrez.com",
  },
  {
    id: 354,
    name: "وبسایت شرکت استیل صنعت کاشان",
    description: "این وبسایت به کمک تیم اسرز توسعه داده شده",
    imageUrl: "/assets/images/steeco-screenshot.png",
    target: "https://steeco.ir",
  },
  {
    id: 111,
    name: "وبسایت فروشگاهی rodeoshop",
    description: "این وبسایت به کمک تیم اسرز توسعه داده شده",
    imageUrl: "/assets/images/rodeo-screenshot.png",
    target: "https://rodeoonline.shop",
  },
];
