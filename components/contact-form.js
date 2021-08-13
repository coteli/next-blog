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
    <div className="mx-auto w-full max-w-4xl border border-gray-300 rounded-md p-8 shadow-small">
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="grid grid-cols-1 gap-y-6"
      >
        <div>
          <label htmlFor="coname" className="sr-only">
            Company name
          </label>
          <input
            type="text"
            {...register("coname")}
            className="block w-full py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Firma Unvanı (Kurumsal başvurularda)"
          />
        </div>
        <div>
          <label htmlFor="name" className="sr-only">
            Full name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="block w-full py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none"
            placeholder="İsim Soyisim"
          />
          {errors.name?.type === "required" && " İsim Soyisim girilmelidir!"}
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
            className="block w-full py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Email"
          />
          {errors.email && " Email adresi girilmelidir!"}
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">
            phone
          </label>
          <input
            type="text"
            {...register("phone")}
            className="block w-full py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none"
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
            className="block w-full py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Mesaj"
          />
          {errors.email && " Mesaj girilmelidir!"}
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
}
