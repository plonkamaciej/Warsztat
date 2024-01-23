import React from "react";

export default function ContactForm() {
  return (
   <form action="" method="post" className="shadow-xl bg-slate-100 text-stone-900 w-1/3 m-auto rounded-xl p-4">
    <h1 className=" text-4xl text-center m-4 font-extrabold">CONTACT US!</h1>
    <div className="flex flex-col justify-center content-center gap-5 m-auto">
    <input type="text" placeholder="Name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    " />
    <input type="text" placeholder="Phone Number"className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
    <textarea placeholder="Opisz problem" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "/>
    <button type="button" className="btn bg-black hover:bg-slate-800  text-white rounded-lg w-1/3 h-12 text-lg">SEND</button>
    </div>
   </form>
  );
}