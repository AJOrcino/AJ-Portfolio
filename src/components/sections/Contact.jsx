import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useForm } from "react-hook-form";


export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-900 overflow-hidden"
    >
      <RevealOnScroll>
        <div className="px-4 mx-auto overflow-x-visible">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                type="text"
                className="w-96 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-blue-400 transition-all focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                {...register("fullName", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.fullName && (
                <span className="text-red-500 text-sm block mt-1">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            <div>
              <input
                type="email"
                className="w-96 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-blue-400 transition-all focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm block mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <input
                type="number"
                className="w-96 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-blue-400 transition-all focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="+63 (9XXXXXXXXX)"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'textfield',
                }}
                {...register("contact", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^\+639\d{9}$/,
                    message: "Invalid Philippine contact number. Use format +639XXXXXXXXX",
                  },
                  minLength: {
                    value: 13,
                    message: "Contact number must be 13 digits including +63",
                  },
                  maxLength: {
                    value: 13,
                    message: "Contact number must be 13 digits including +63",
                  },
                })}
              />
              {errors.contact && (
                <span className="text-red-500 text-sm block mt-1">
                  {errors.contact.message}
                </span>
              )}
            </div>

            <div>
              <textarea
                rows={5}
                className="w-96 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-blue-400 transition-all focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm block mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded py-3 px-6 font-medium transition overflow-hidden mt-3 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};