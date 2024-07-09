import {v4 as uuidv4} from 'uuid'

export type ExperienceType = {
   id: string;
   title: string;
   link: string;
   dateFrom: string;
   dateTo?: string | null;
   description: string[];
};

export const Experiences: ExperienceType[] = [
   {
      id: uuidv4(),
      title: 'Digimenue',
      link: 'https://digimenue.de',
      dateFrom: 'بهمن 1402',
      dateTo: null,
      description: ["digimenue یک استارت آپ آلمانیه که کارش سفارش غذا به صورت مستقیم از رستوران هاست. نقشی که به عنوان برنامه نویس فرانت دارم توسعه اپلیکیشن که تکنولوژیش NextJS هست هستش"],
   }, 
   {
      id: uuidv4(),
      title: 'شرکت شمیران وب',
      link: 'https://shemiranweb.com',
      dateFrom: '15 آبان 1401',
      dateTo: null,
      description: ['پیاده سازی قالب های سایت با HTML, CSS, SASS, TilwindCSS و Vanilla JS', 'تجربه کار با Laravelmix و Webpack'],
   }, 
   {
      id: uuidv4(),
      title: 'شرکت Asrez',
      link: 'https://asrez.com',
      dateFrom: 'دی 1399',
      dateTo: 'تیر 1402',
      description: ['پیاده سازی قالب های سایت با HTML, CSS و Vanilla JS', 'پیاده سازی پروژه با ReactJS و NextJS', 'تجربه طراحی UI قالب سایت های شرکت استیل صنعت کاشان, اسرز و میرسه'],
   }, 
]
