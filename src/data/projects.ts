export type ProjectType = {
  id: number;
  name: string;
  description?: string;
  skills: string[];
  imageUrl: string;
  target: string;
};

export const Projects: ProjectType[] = [
  {
    id: 145,
    name: "وبسایت شرکت اسرز",
    description: "این پروژه توسط شرکت اسرز به من محول شد و در این پروژه وظیفه بنده طراحی, پیاده سازی و توسعه قالب این سایت بود",
    skills: ['HTML', 'CSS', 'js'],
    imageUrl: "/assets/images/asrez-screenshot.png",
    target: "https://asrez.com",
  },
  {
    id: 354,
    name: "وبسایت شرکت استیل صنعت کاشان",
    description: "این پروژه توسط شرکت اسرز به من محول شد و در این پروژه وظیفه بنده طراحی, پیاده سازی و توسعه قالب این سایت بود",
    skills: ['HTML', 'CSS', 'js'],
    imageUrl: "/assets/images/steeco-screenshot.png",
    target: "https://steeco.ir",
  },
  {
    id: 111,
    name: "وبسایت فروشگاهی rodeoshop",
    description: "این پروژه توسط شرکت اسرز به من محول شد و در این پروژه وظیفه بنده پیاده سازی و توسعه قالب این سایت بود",
    skills: ['HTML', 'CSS', 'js'],
    imageUrl: "/assets/images/rodeo-screenshot.png",
    target: "https://rodeoonline.shop",
  },
  {
    id: 4567,
    name: "وبسایت گالری لوتوس",
    description: "این پروژه توسط شرکت شمیران وب به من محول شد و در این پروژه وظیفه پیاده سازی و توسعه قالب این سایت بود",
    skills: ['HTML', 'CSS', 'js', 'TailwindCSS', 'sass'],
    imageUrl: "/assets/images/lotus-gallery-screenshot.png",
    target: "https://lotusgallery.co/",
  },
];
