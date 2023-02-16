import {v4 as uuidv4} from 'uuid'

export type ExperienceType = {
   id: string;
   title: string;
   link: string;
   dateFrom: string;
   dateTo?: string;
   description: string[];
};

export const Experiences: ExperienceType[] = [
   {
      id: uuidv4(),
      title: 'شرکت Asrez',
      link: 'https://asrez.com',
      dateFrom: '10 دی 1399',
      dateTo: '4 دی 1401',
      description: ['پیاده سازی قالب های سایت با HTML, CSS و Vanilla JS', 'پیاده سازی پروژه با ReactJS و NextJS', 'تجربه طراحی UI قالب سایت های شرکت استیل صنعت کاشان, اسرز و میرسه'],
   }, 
   {
      id: uuidv4(),
      title: 'شرکت شمیران وب',
      link: 'https://shemiranweb.com',
      dateFrom: '15 آبان 1401',
      description: ['پیاده سازی قالب های سایت با HTML, CSS, SASS, TilwindCSS و Vanilla JS', 'تجربه کار با Laravelmix و Webpack'],
   }, 
]
