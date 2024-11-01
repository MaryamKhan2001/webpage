import Link from "next/link"
export default function Home(){
  return(
    <header>
      <nav className="flex bg-purple-300">
    <img className="ml-5" height={100} width={100} src="https://i.pinimg.com/736x/d5/54/32/d55432bd32b712a524632e688f7b44fb.jpg" alt="logo" />
    <h1 className="flex items-center ml-40 font-serif">START YOUR MENTAL HEALTH JOURNEY HERE</h1>
    <ul className="flex items-center gap-4 ml-48 font-bold text-black">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/appointment">Appointment</Link></li>
    </ul>
    </nav>
    <nav className="flex ml-10 mt-12  gap-6">
      <div className="flex bg-green-200 h-48 w-96"></div>
      <div className="flex bg-blue-200 h-48 w-96"></div>
      <div className="flex bg-pink-200 h-48 w-96"></div>
    </nav>
    <nav className="flex ml-60 mt-16 gap-10">
    <div className="flex bg-orange-200 h-48 w-96"></div>
    <div className="flex bg-yellow-200 h-48 w-96"></div>
    </nav>
   </header>
  )

}