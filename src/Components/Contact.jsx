import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-5 text-center text-4xl">
        Let’s Build Something Amazing Together!
      </h1>
      <h4 className="text-xl text-center mb-4">
        Have a question, a project idea, or just want to connect? <br /> I’m
        always excited to collaborate, solve problems, and create innovative
        solutions. <br /> Drop me a message, and let’s start the conversation!
      </h4>

      <div className=" flex items-center justify-center">
        <form className="w-[60%] flex flex-col gap-4">
          <div className="flex justify-between items-center gap-4 flex-wrap lg:flex-nowrap  ">
            <div className=" flex flex-col gap-2 w-full">
              <p>First Name</p>
              <input
                type="text"
                placeholder="Enter First Name"
                className="rounded-lg py-1 px-2 outline-none bg-transparent border-2 border-solid border-purple-950 text-white hover:border-blue-500"
              />
            </div>
            <div className=" flex flex-col gap-2 w-full">
              <p>Last Name</p>
              <input
                placeholder="Enter Last Name"
                type="text"
                className="rounded-lg py-1 px-2 outline-none bg-transparent border-2 border-solid border-purple-950 text-white hover:border-blue-500"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <p>E-mail</p>
            <input
              placeholder="Enter your Email address"
              type="email"
              className="rounded-lg py-1 px-2 outline-none bg-transparent border-2 border-solid border-purple-950 text-white hover:border-blue-500"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <p>Your Message</p>
            <textarea
              placeholder="Write the message here"
              name=""
              id=""
              cols="30"
              rows="10"
              className="rounded-lg py-1 px-2 outline-none bg-transparent border-2 border-solid border-purple-950 text-white hover:border-blue-500 "
            ></textarea>
          </div>
          <div className="flex justify-center item-center">
            <button className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 py-2 px-6 rounded-full text-lg mt-2 ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
