import { v4 as uuidv4 } from "uuid"

export type SkillType = {
   id: string;
   icon: string;
   title: string;
};
 
export const SkillData: SkillType[] = [
   {
      id: uuidv4(),
      icon: "/assets/icons/html.svg",
      title: "HTML",
   },
   {
      id: uuidv4(),
      icon: "/assets/icons/css.svg",
      title: "CSS",
   },
   {
      id: uuidv4(),
      icon: "/assets/icons/css.svg",
      title: "TailwindCSS",
   },
   {
      id: uuidv4(),
      icon: "/assets/icons/css.svg",
      title: "Bootstrap",
   },
   {
      id: uuidv4(),
      icon: "/assets/icons/sass.svg",
      title: "SASS",
   },
   {
      id: uuidv4(),
      icon: "/assets/icons/react.svg",
      title: "ReactJS",
   },
   {
      id: uuidv4(),
      icon: "/assets/icons/ts.svg",
      title: "TypeScript",
   },
   {
      id: uuidv4(),
      icon: "/assets/icons/npm.svg",
      title: "NPM/Yarn",
   },
   {
      id: uuidv4(),
      icon: "/assets/icons/git.svg",
      title: "Git version control",
   },
   {
      id: uuidv4(),
      icon: "/assets/icons/react.svg",
      title: "NextJS",
   },
   {
      id: uuidv4(),
      icon: "/assets/icons/figma.svg",
      title: "Figma/AdobeXD",
   },
];
 