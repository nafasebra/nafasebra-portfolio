import { useRef, FormEvent, useState } from "react";
import { isEmptyStringArray } from "../../helper";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Field,
  FieldProps,
} from "formik";

type FormInputListType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const SubjectRef = useRef<HTMLInputElement>(null);
  const MessageRef = useRef<HTMLTextAreaElement>(null);

  const initalValueForm: FormInputListType = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // if (nameRef.current?.value === "")
    //   setErrors({ ...errors, name: "فیلد اسم نباید خالی باشه" });
    // else if (SubjectRef.current?.value === "")
    //   setErrors({ ...errors, subject: "فیلد موضوع پیام نباید خالی باشه" });
    // else if (MessageRef.current?.value === "")
    //   setErrors({ ...errors, message: "فیلد پیام نباید خالی باشه" });
    // else {
    //   setErrors({
    //     name: "",
    //     subject: "",
    //     message: "",
    //   });
    // }

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      subject: SubjectRef.current?.value,
      message: MessageRef.current?.value,
    };
    fetch("/api/contactus", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("response resived successfuly");
    });
  };

  return (
    <Formik
      initialValues={initalValueForm}
      validate={(values) => {
        const errors: FormInputListType = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
        if(values.name === '') {
          errors.name = "فیلد اسم نباید خالی باشه"
        }
        if(values.email === '') {
          errors.email = "فیلد ایمیل نباید خالی باشه"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'آدرس ایمیل اشتباهه';
        }
        if(values.subject === '') {
          errors.subject = "فیلد موضوع پیام نباید خالی باشه"
        }
        if(values.message === '') {
          errors.message = "فیلد پیام نباید خالی باشه"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 4));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
        onSubmit={handleSubmit}
        action="POST"
        className="w-full flex flex-col text-light"
      >
        <div className="mb-5">
          <label htmlFor="name" className="block w-full text-sm text-gray-400">
            نام شما
          </label>
          <input
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100"
            placeholder="اسمتون رو اینجا تایپ کنید"
          />
          <p className="text-red-400 py-2 text-sm">{errors.name}</p>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block w-full text-sm text-gray-400">
            ایمیل
          </label>
          <input
            ref={emailRef}
            type="text"
            name="email"
            id="email"
            required
            className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100"
            placeholder="مثلا example@gmail.com"
          />
          <p className="text-red-400 py-2 text-sm">{errors.email}</p>
        </div>
        <div className="mb-5">
          <label htmlFor="subject" className="block w-full text-sm text-gray-400">
            موضوع پیام
          </label>
          <input
            ref={SubjectRef}
            type="text"
            name="subject"
            id="subject"
            className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100"
            placeholder="مثلا موضوع کاری یا سوال یا..."
          />
          <p className="text-red-400 py-2 text-sm">{errors.subject}</p>
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block w-full text-sm text-gray-400">
            پیام شما
          </label>
          <textarea
            ref={MessageRef}
            name="message"
            id="message"
            className="block w-full h-[200px] mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100 resize-none"
            placeholder="پیام یا موردی که مدنظرتون هست رو بنویسید"
          ></textarea>
          <p className="text-red-400 py-2 text-sm">{errors.message}</p>
        </div>
        <div className="block">
          <button
            type="submit"
            className="w-full text-center bg-orange text-light rounded-lg py-4 px-3 hover:opacity-50"
          >
            پیام رو ارسال کنید
          </button>
        </div>
      </form>
      )}
    </Formik>
  );
};

export default Form;
