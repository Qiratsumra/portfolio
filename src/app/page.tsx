"use client"
import Image from "next/image";
import image from "../../public/hijab-girl.jpeg"

import { useRouter } from "next/navigation";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  const routerButton = useRouter();
  const navigation =(name:string)=>{
    routerButton.push(name)
  }
  return (
    <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded w-80 ml-32 slide-in-fwd-center shadow" alt="hero" src={image}></Image>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Qirat Saeed
        <br className="hidden lg:inline-block"/>Student of GIAIC
      </h1>
      <p className="mb-8 leading-relaxed">I am a positive, enthusiastic and competent Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role.
      </p>
      <div className="flex justify-center">
        <button onClick={()=>navigation("https://github.com/Qiratsumra")} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg">GitHub</button>
        <button onClick={()=>navigation("https://www.linkedin.com/in/qirat-saeed-8048662b7/")} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">Linkedin</button>
      </div>
    </div>
  </div>
  <Contact/>
  <About/>
</section>
  );
}

 