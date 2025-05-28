import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Contactimg from "../assets/images/contact image.svg";

function Contact() {
  const [state, handleSubmit] = useForm("mgvkajzy");

  return (
    <>
      <h2 className="text-4xl font-bold text-white text-center tracking-tight pt-16 mt-15">
        Let's Connect
      </h2>


      <section className="bg-gradient-to-br text-white flex flex-col md:flex-row items-center justify-center px-4 py-10 gap-10">

        <img
          src={Contactimg}
          className="w-full max-w-md h-auto object-contain"
          alt="Contact"
        />


        <div className="w-full max-w-3xl p-6 sm:p-10 md:p-14">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 disabled:opacity-50"
            >
              Send Message
            </button>

            {state.succeeded && (
              <div className="text-center text-green-400 text-sm font-medium pt-4">
             
              </div>
            )}
          </form>

          <div className="text-center mt-10 text-gray-400 text-sm">
            Prefer email? Reach me at{" "}
            <a
              href="mailto:imranshaik1145@gmail.com"
              className="text-blue-400 underline"
            >
              imranshaik1145@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
