import Image from "next/image";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className={'font-roboto-thin'}>
      <header className={'flex space-x-3 items-center mt-5 '}>
        <Image src={'/vercel.svg'} width={'100'} height={'100'} alt={''} className={'mr-10'} />
        <ul className="flex space-x-3">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Developers</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">About</li>
        </ul>
      </header>
      <div className={'absolute font-microbe rotate-6 text-9xl text-cyan-600 -z-10 top-36 text-center sm:text-7xl lg:text-9xl'}>
        BEST URL SHORTENER
      </div>
      <Hero/>
    </div>
  )
}
