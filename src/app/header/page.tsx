import Link from "next/link";

export default function NavBar(){
    return(
        
            <header className="text-gray-400 body-font bg-gray-700">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 font-serif font-bold text-3xl text-red-50">Portfolio</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-white">Home</Link>
      <Link href={"/contact"} className="mr-5 hover:text-white">Contact</Link>
      <Link href={"/about"} className="mr-5 hover:text-white">About Us</Link>
    </nav>
  </div>
</header>
    )
}