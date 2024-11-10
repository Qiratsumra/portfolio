import Image from "next/image"
import image from "../../../public/hijab-girl.jpeg"

export default function About(){
    return(
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image src={image} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded slide-in-fwd-center shadow" ></Image>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">About Me</h1>
        <div className="flex mb-4">
        </div>
        <p className="leading-relaxed">Hello! I’m Qirat Saeed, a web developer at the beginning of an exciting journey in creating user-friendly, visually appealing web applications. With skills in TypeScript, JavaScript, HTML, CSS, TailwindCSS, Bootstrap, Next.js, and Figma, I’m passionate about bringing ideas to life through code and design. I’m always eager to learn and grow, taking on projects that challenge me to become a better developer.
<br />
<br />
I focus on building clean, responsive designs that make a positive impact on users. My approach to web development is grounded in problem-solving and creativity, and I’m constantly exploring new techniques and tools to improve my skills.
<br />
<br />
In my free time, I enjoy [mention hobbies or interests, e.g., experimenting with design projects, exploring coding tutorials, or following the latest trends in web development]. I’d love to connect and discuss how we can bring your project to life!</p>
        
      </div>
    </div>
  </div>
</section>
    )
}