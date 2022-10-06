import {useRef, FormEvent, useState} from "react";
import { isEmptyStringArray } from "../../helper";


type ErrorListInputsType = {
  name: string;
  subject: string;
  message: string;
}

function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const SubjectRef = useRef<HTMLInputElement>(null);
  const MessageRef = useRef<HTMLTextAreaElement>(null);

  const [errors, setErrors] = useState<ErrorListInputsType>({
    name: '',
    subject: '',
    message: ''
  })

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if(nameRef.current?.value === '') 
      setErrors({...errors, name: 'فیلد اسم نباید خالی باشه'})
    else if(SubjectRef.current?.value === '') 
      setErrors({...errors, subject: 'فیلد موضوع پیام نباید خالی باشه'})
    else if(MessageRef.current?.value === '') 
      setErrors({...errors, message: 'فیلد پیام نباید خالی باشه'})
    else {
      setErrors({
        name: '',
        subject: '',
        message: '',
      })
    }

    if(isEmptyStringArray(Object.values(errors))) {
      // console.log('message was sended successfuly');
      let data = {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        subject: SubjectRef.current?.value,
        message: MessageRef.current?.value 
      }
      fetch('/api/contactus', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        if(res.status === 200) console.log('response resived successfuly')
      })
    }
  }


  return (
    <form onSubmit={HandleSubmit} action="" className="w-full flex flex-col text-light">
      <div className="mb-5">
        <label htmlFor="" className="block w-full text-sm text-gray-400">نام شما</label>
        <input ref={nameRef} type="text" className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100" placeholder="اسمتون رو اینجا تایپ کنید" />
        <p className="text-red-400 py-2 text-sm">
          {errors.name}
        </p>
      </div>
      <div className="mb-5">
        <label htmlFor="" className="block w-full text-sm text-gray-400">ایمیل</label>
        <input ref={emailRef} type="email" required className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100" placeholder="مثلا example@gmail.com" />
      </div>
      <div className="mb-5">
        <label htmlFor="" className="block w-full text-sm text-gray-400">موضوع پیام</label>
        <input ref={SubjectRef} type="text" className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100" placeholder="مثلا موضوع کاری یا سوال یا..." />
        <p className="text-red-400 py-2 text-sm">
          {errors.subject}
        </p>
      </div>
      <div className="mb-5">
        <label htmlFor="" className="block w-full text-sm text-gray-400">پیام شما</label>
        <textarea ref={MessageRef} name="" id="" className="block w-full h-[200px] mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100 resize-none" placeholder="پیام یا موردی که مدنظرتون هست رو بنویسید"></textarea>
        <p className="text-red-400 py-2 text-sm">
          {errors.message}
        </p>
      </div>
      <div className="block">
        <button type="submit" className="w-full text-center bg-orange text-light rounded-lg py-4 px-3 hover:opacity-50">پیام رو ارسال کنید</button>
      </div>
    </form>
  );
}

export default Form;
