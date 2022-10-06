import { FormEvent } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

type FormInputListType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Form = () => {
  const initalValueForm: FormInputListType = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const formik = useFormik({
    initialValues: initalValueForm,
    onSubmit: (values) => {
      console.log(values);
      // fetch("/api/contactus", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json, text/plain, */*",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // }).then((res) => {
      //   if (res.status === 200) console.log("response resived successfuly");
      // });
    },
    validationSchema: yup.object({
      name: yup.string().required("فیلد نام نباید خالی باشه!"),
      email: yup
        .string()
        .required("فیلد ایمیل نباید خالی باشه!")
        .email("فرمت ایمیل اشتباهه!!!"),
      subject: yup.string().required("فیلد موضوع پیامتون نباید خالی باشه!"),
      message: yup.string().required("فیلد پیام نباید خالی باشه!"),
    }),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      action="POST"
      className="w-full flex flex-col text-light"
    >
      <div className="mb-5">
        <label htmlFor="name" className="block w-full text-sm text-gray-400">
          نام شما
        </label>
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="name"
          id="name"
          className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100"
          placeholder="اسمتون رو اینجا تایپ کنید"
        />
        <p className="text-red-400 py-2 text-sm">{formik.errors.name}</p>
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block w-full text-sm text-gray-400">
          ایمیل
        </label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="email"
          id="email"
          required
          className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100"
          placeholder="مثلا example@gmail.com"
        />
        <p className="text-red-400 py-2 text-sm">{formik.errors.email}</p>
      </div>
      <div className="mb-5">
        <label htmlFor="subject" className="block w-full text-sm text-gray-400">
          موضوع پیام
        </label>
        <input
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          name="subject"
          id="subject"
          className="block w-full mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100"
          placeholder="مثلا موضوع کاری یا سوال یا..."
        />
        <p className="text-red-400 py-2 text-sm">{formik.errors.subject}</p>
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="block w-full text-sm text-gray-400">
          پیام شما
        </label>
        <textarea
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="message"
          id="message"
          className="block w-full h-[200px] mt-3 mb-5 py-4 px-6 text-lg text-gray-300 outline-none border-b-2 border-transparent focus:border-gray-400 bg-dark-100 resize-none"
          placeholder="پیام یا موردی که مدنظرتون هست رو بنویسید"
        ></textarea>
        <p className="text-red-400 py-2 text-sm">{formik.errors.message}</p>
      </div>
      <div className="block">
        <button
          type="submit"
          className="w-full text-center bg-orange text-light rounded-lg py-4 px-3 hover:opacity-50"
        >
          ارسال پیام
        </button>
      </div>
    </form>
  );
};

export default Form;
