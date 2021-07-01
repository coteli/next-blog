import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();
  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
      }
    } catch (err) {}
  }

  return (
    <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
      <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-6"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              {...register("name", { required: true, maxLength: 30 })}
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="İsim Soyisim"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="text"
              {...register("email", {
                required: true,
              })}
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              phone
            </label>
            <input
              type="text"
              {...register("phone")}
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Telefon"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              message
            </label>
            <textarea
              name="message"
              rows="4"
              {...register("message", { required: true, maxLength: 1000 })}
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Mesaj"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
