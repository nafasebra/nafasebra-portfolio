import {useRef} from "react";

function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const SubjectRef = useRef<HTMLInputElement>(null);
  const MessageRef = useRef<HTMLTextAreaElement>(null);

  return (
    <form action="" className="w-full flex flex-col text-light">
      <div className="mb-5">
        <label htmlFor="" className="block w-full text-sm text-gray-400">نام شما</label>
        <input ref={nameRef} type="text" className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100" placeholder="اسمتون رو اینجا تایپ کنید" />
      </div>
      <div className="mb-5">
        <label htmlFor="" className="block w-full text-sm text-gray-400">ایمیل</label>
        <input ref={emailRef} type="email" className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100" placeholder="مثلا example@gmail.com" />
      </div>
      <div className="mb-5">
        <label htmlFor="" className="block w-full text-sm text-gray-400">موضوع پیام</label>
        <input ref={SubjectRef} type="text" className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100" placeholder="مثلا موضوع کاری یا سوال یا..." />
      </div>
      <div className="mb-5">
        <label htmlFor="" className="block w-full text-sm text-gray-400">پیام شما</label>
        <textarea ref={MessageRef} name="" id="" className="block w-full h-[200px] mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100 resize-none" placeholder="پیام یا موردی که مدنظرتون هست رو بنویسید"></textarea>
      </div>
      <div className="block">
        <button type="submit" className="w-full text-center bg-orange text-light rounded-lg py-4 px-3 hover:opacity-50">پیام رو ارسال کنید</button>
      </div>
    </form>
  );
}

export default Form;
