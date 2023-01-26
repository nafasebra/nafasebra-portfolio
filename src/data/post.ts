export type PostType = {
  id: number;
  title: string;
  date: string;
  body: string;
};

export const Posts: PostType[] = [
  {
    id: 1,
    title: "اولین پست سایت...",
    date: "دوشنبه 11 مهر 1401",
    body: `
      <p>درود به همه</p>
      <p>توی این سایت بنده قصد دارم که یکسری مقاله و تجربیاتی کهه توی کار باهاشون درارتباط بودم رو بنویسم و توی سایتم منتشر کنم. چرا؟ چون حس خوبی به من میده.</p>
      <p>حالا این تجربیات دررابطه با چیه؟</p>
      <p>دررابطه با برنامه نویسی فرانت اند, چالش هایی که باهاش رودرو بودم اعم از چطور پیشرفت کنیم و به قول خارجی ها لول (level) خودمون رو ببریم بالا</p>
      <p>و اینکه چطور سبک زدنگی خوبی داشته&nbsp; باشیم</p>
      <p>ممکنه این مقاله یا مقاله های بعدی ممکنه اونی نباشن که لیاقتتون باشه ولی سعی من اینکه که بهتر بشن</p>
      `,
  },
  {
    id: 2,
    title: "فرق بین برنامه نویسی و کدنویسی",
    date: "دوشنبه 11 مهر 1401",
    body: `
            درود به همگی امیدوارم حالتون خوب باشه... <br /> 
            ممکنه براتون سوال باشه که برنامه نویسی چه فرقی با کدنویسی داره و متاسفانه <strong>خیلیا</strong> اشتباه بکنن و دوتارو باهم قاطی کنن
            <br />
            حالا بریم سر اصل مطلب...
            <br /> <br />
            <strong>برنامه نویس</strong> به کسی گفته میشه که یک مسئله ای رو قراره حل کنه و اون رو تبدیل کنه به یک برنامه کامپیوتری. این وسط باید اون مسئله رو تجزیه و تحلیل کنه و تبدیلش کنه به کد قابل فهم برای کامپیوتر
            <br />
            حالا <strong>کد نویس</strong> فرق داره. مسئله از قبل حل شده فقط میاد از یکسری کد آماده استفاده میکنه یا اینکه خودش تبدیل میکنه به کد.
            <br />
            حالا این وسط فرق این دوتا یک چیزه: اونم مهارت <strong>حل مسئله</strong>
            <br /><br /><br />
            درضمن این مهارت چیزی نیست که از اول باشه و فقط با تمرین و استمرار هست که این مهارت رو بشه تقویت کرد
            <br />
        `,
  },
  {
    id: 3,
    title: "4 فریمورک محبوب برای CSS",
    date: "چهارشنبه 13 مهر 1401",
    body: `
            <p dir="rtl">سلام به همگی</p>
            <p dir="rtl">امروز توی این پست قراره که یکسری<strong> فریمورک های CSS</strong> یی که طراحی وب رو براتون راحت میکنه لیستی از اونارو بیارم</p>
            <p dir="rtl"><strong><span style="font-size:20px">1 - TailwindCSS</span></strong></p>
            <p dir="rtl">بنظرم این فرمورک محبوب ترین فریموکی هست که یک طراح وب میتونه ازش بهره ببره.ویژگی مهمی که اون رو از بقیه فریمورک ها متمایز میکنه قابلیت سفارشی سازیش هست. یعنی اینکه هر تمی که برای سایتتون مدنظرتونه رو توی فایل کانفیگش اضافه کنید.</p>
            <p dir="rtl">و حتی breakpoint هاتون رو میتونید سفارشی سازیش کنید یعنی مثلا بگید سایز موبایل میخوام فلان قدر باشه یا هرسایزی</p>
            <p dir="rtl">البته یکسری مغایب هم داره مثلا برای یک تگ معمولی باید کلی استایل رو اختصاص بدی که فایل HTML ت رو شلوغ میکنه یا اینکه نمیشه به صورت داینامیک بهش کلاس بدی و باید کلاس رو به صورت مستقیم بدی</p>
            <p dir="rtl"><strong><span style="font-size:20px">2 - Bootstrap</span></strong></p>
            <p dir="rtl">نمی توان درباره فریمورک های CSS سخنی گفت که شامل Bootstrap نباشد. توییتر این فریمورک را در سال 2011 معرفی کرد تا طراحی وب پاسخگو را به راحتی در اختیار توسعه دهندگان قرار دهد.</p>
            <p dir="rtl">از آن زمان ، این پروژه برای پشتیبانی از CSS مدرن تکامل یافته و ویژگی های بی شماری را برای بهبود بهره وری پیش روی شما ارائه می دهد. همانطور که در مورد بسیاری از موارد محبوب وجود دارد ، Bootstrap انتقاداتی را نیز به همراه دارد.</p>
            <p dir="rtl"><strong><span style="font-size:20px">3 - Bulma</span></strong></p>
            <p dir="rtl">بولما Bulma یک گزینه عالی برای Bootstrap است ، زیرا دارای کد مدرن و زیبایی منحصر به فرد است. استفاده و وارد کردن به پروژه های شما آسان است و دارای اجزای مختلف از پیش ساخته شده است.</p>
            <p dir="rtl">به دلیل نحو ساده و طراحی مینیمالیستی اما زیبایی شناسانه بسیار ستوده شده است. این واقعاً فریمورکی است که می تواند یک صفحه وب کسل کننده را روشن و جذاب جلوه دهد.</p>
            <p dir="rtl">با بیش از 40،000 ستاره در GitHub ، این یک فریمورک خوب نیست ، بلکه یک نیرو است که باید حساب شود.</p>
            <p dir="rtl"><strong><span style="font-size:20px">3 - UIKit</span></strong></p>
            <p dir="rtl">یو آی کیت UIKit یک Framework ماژولار و سبک فرانت اند و css است. اگر شما هدفتان ساخت رابط&zwnj;های کاربری سریع و قدرتمند است، UIKit می&zwnj;تواند گزینه&zwnj; مناسبی برایتان باشد. این Framework مجموعه&zwnj;ای از کامپوننت&zwnj;های CSS, HTML, JS ای است. این امر باعث می&zwnj;شود که این Framework فرانت اند به سادگی سفارشی شود و به راحتی نیز قابل استفاده باشد.</p>
            <p dir="rtl">بیش از 16k ستاره در GitHub دارد و توسط توسعه دهندگان برای API آسان و طراحی برش خورده انتخاب شده است.علاوه بر این ، UIKit یک نسخه حرفه ای دارد که صفحات مضمونی را برای وردپرس و جوملا ارائه می دهد.</p>
            <p dir="rtl">یو آی کیت یکی از پر استفاده&zwnj;ترین ابزارها برای توسعه&zwnj;ی اپ&zwnj;های iOS است. این Framework کامپوننت&zwnj;های اصلی مانند دکمه&zwnj;، لیبل، جدول و ... را در خود جای داده است. می&zwnj;توان گفت که UIKit آینده&zwnj;ی توسعه&zwnj;ی اپ&zwnj; پلتفرم&zwnj;های اپل را در درست خواهد داشت.</p>
            <p>&nbsp;</p>
        `,
  },
  {
    id: 4,
    title: "3 فریمورک محبوب برای JavaScript",
    date: "چهارشنبه 13 مهر 1401",
    body: `
            <p dir="rtl">درود به همگی امیدوارم که حالتون خوب باشه...</p>
            <p dir="rtl">&nbsp;</p>
            <p dir="rtl">توی این پست قراره بپردازیم به فریمورک های محبوب javascript که این چند سال تحول بزرگی توی صنعت برنامه نویسی وبسایت ها به وجود اوردند</p>
            <p dir="rtl">بریم سراغ معرفی اونا:</p>
            <p dir="rtl">&nbsp;</p>
            <p dir="rtl">&nbsp;</p>
            <p dir="rtl"><strong><span style="font-size:20px">1 - ReactJS</span></strong></p>
            <p dir="rtl">چه چیزی باعث شده است که رابط کاربری فیسبوک و اینستاگرام تا این اندازه قدرتمند باشند؟ React.js به عنوان فریم ورک جاوا اسکریپت این امکان را برای فیسبوک و اینستاگرام فراهم آورده که رابط کاربری بسیار قدرتمندی داشته باشند. این موضوع به ما نشان می دهد که با استفاده از React.js می توانیم اپلیکیشن های بسیار قدرتمند در مقیاس های بسیار بزرگی را طراحی و راه اندازی کنیم.</p>
            <p dir="rtl">React.js اولین بار در سال 2013 تحت لیسانس BSD و بصورت منبع باز انتشار پیدا کرد. انجمن های بحث و گفتگو و پشتیبانی از این فریم ورک به سرعت رشد کرد به طوری که می توان گفت رشد استفاده از این فریم ورک سریعتر از تمام فریم ورک های دیگر از زمان پیدایش آنها بوده است. امروزه کاربران می توانند با صرف زمانی اندک از منابع و آموزش های پیرامون React و همچنین کتابخانه های آن بهره مند شوند و به سرعت از آنها استفاده نمایند.</p>
            <p dir="rtl">ReactJS در رندر کردن رابط های کاربری پیچیده با عملکرد بالا در مقایسه با دیگر فریم ورک ها بهترین عملکرد را دارا می باشد. چارچوب اصلی در پشت ساختار React از مفاهیم DOM مجازی استخراج شده است. ReactJS از یک DOM مجازی بهره گیری می نماید بطوری که می تواند هم در سمت سرور و هم در سمت کلاینت رندر شود و بین عقب و جلو ارتباط برقرار نماید.هنگامی که دستکاری داده ها دینامیک و پیچیده می شود، نحوه ی عملکرد در دستکاری های DOM سمت کلاینت فشرده می گردد.</p>
            <p dir="rtl">یکی دیگر از مزیت های بزرگ react این است که می توان از قطعات واکنشی (reactive components) مجددا استفاده نمود. کتابخانه های قطعات react در سراسر برنامه می توانند تولید شوند و مورد استفاده قرار گیرند و در دسترس عموم قرار داده شوند.</p>
            <p dir="rtl">&nbsp;</p>
            <p dir="rtl"><strong><span style="font-size:20px">2 - VueJS</span></strong></p>
            <p dir="rtl">Vue.Js در سال 2014 به عنوان یک فریم ورک منبع باز جاوا اسکریپت تحت لیسانس MIT منتشر شد. VueJs یک فریم ورک نسبتا جدید می باشد و جاذبه ی زیادی در میان انجمن های کدنویسی داشته است. VueJs با الگوی طراحی MVVM کار می کند و از یک API ساده برخوردار می باشد. VueJs در به حداقل رسانی کدها بصورت افراطی عمل کرده است که این موضوع به شما اجازه می دهد از ماژول های انتخابی خودتان بسته به نیاز پروژه بهره گیری نمایید.</p>
            <p dir="rtl">Vue با الهام از فریم ورک های AngularJS، ReactiveJs، knockoutJS و RivetsJS تولید شده و مدل و view را با اتصال داده ی دو طرفه به روز می نماید. اگر چه اکنون Vue قابلیت رقابت با فریم ورک هایی همچون Angular و Ember را ندارد اما از پتانسیل خوبی برای تبدیل شدن به یکی از قدرتمند ترین فریم ورک های جاوا اسکریپت برخوردار است و احتمالا در آینده جای خود را در این بازار باز خواهد کرد. این فریم ورک از زمانی که انتشار پیدا کرده است به طور مرتب توسط سازندگانش به روز می شود و از این لحاظ وضعیت بسیار مناسبی در مقایسه با دیگر فریم ورک ها دارد.</p>
            <p dir="rtl">&nbsp;</p>
            <p dir="rtl"><strong><span style="font-size:20px">3 - AngularJS</span></strong></p>
            <p dir="rtl">Angular.js یکی از محصولات گوگل است که به نوعی می توان آن را پدر فریم ورک های دیگر جاوا اسکریپت نامید. این فریم ورک اولین بار در سال 2009 منتشر شد و به عنوان یک فریم ورک منبع باز در تحت لیسانس MIT در اختیار عموم قرار گرفت. از آن تاریخ تا کنون رشد این فریم ورک فراتر از تصور بوده است. فریم ورک Angular.js در حال حاضر بزرگترین انجمن کدنویسان را دارا می باشد و توسعه دهندگان وب برای تولید اپلیکیشن های صفحات وب بیشتر از این فریم ورک بهره می گیرند.</p>
            <p dir="rtl">فریم ورک AngularJS با اضافه کردن ویژگی های مورد نیاز برای تولید نماهای (view) دینامیک قدرتی فوق العاده به HTML داده است. این فریم ورک با توجه به دستورات موجود درون آن ویژگی های HTML را گسترش داده است. گسترش ویژگی های HTML با استفاده از AngularJS بسیار ساده است. شما می توانید از دستورالعمل استاندارد AngularJS استفاده نمایید و یا بصورت سفارشی (custom) از آن بهره گیری کنید.</p>
            <p dir="rtl">هنگامی که کامپایلر Angular اقدام به کامپایل و رندر کردن HTML بر روی رابط کاربری می نماید، در DOM دستکاری هایی صورت می گیرد و تمامی ویژگی های دستوری مورد نظر به آن اضافه می شود. البته این مورد تنها یکی از جنبه هایی است که AngularJS بوسیله ی آن می تواند برنامه های وب را توانمند تر کند.</p>
            <p dir="rtl">هنگامی که کاربر با رابط کاربری تعامل می کند و یک ورودی فراهم می نماید، مدل و نمایش (view) آن با هم هماهنگ می شوند. همچنین منطق مدل به اجرا در می آید و DOM به روز می شود. حالت بر عکس این موضوع هم اتفاق می افتد به طوری که اگر مدل به روز شود، view نیز دوباره رندر می گردد. این موضوع می تواند توسعه دهندگان وب را از کدنویسی های سخت برای دستکاری DOM خلاص کند.</p>
            <p dir="rtl">اگرچه فریم ورکی با نام ReactJS که به تازگی منتشر شده است به نظر رقیبی برای AngularJs به حساب می آید اما AngularJs همچنان بازار را در اختیار دارد و همراه با افزایش تقاضاها در حال رشد می باشد. دلیل اصلی رشد پیاپی AngularJs بهبود های پی در پی و پیشرفت های آن در نسخه های جدید منتشر شده می باشد.</p>
            <p dir="rtl">&nbsp;</p>
            <p dir="rtl">منبع از&nbsp;<a href="https://virgool.io/JavaScript8/%D9%85%D8%B9%D8%B1%D9%81%DB%8C-8-%D9%85%D9%88%D8%B1%D8%AF-%D8%A7%D8%B2-%D8%A8%D8%B1%D8%AA%D8%B1%DB%8C%D9%86-%D9%81%D8%B1%DB%8C%D9%85-%D9%88%D8%B1%DA%A9-%D9%87%D8%A7%DB%8C-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-p1nvywoef6pa">ویرگول</a></p>
        `,
  },
];
