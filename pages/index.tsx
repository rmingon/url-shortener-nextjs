import Image from "next/image";
import Hero from "../components/hero";
import Card from "../components/card";

export default function Home() {
  return (
    <div className={'font-roboto-thin'}>
      <header className='flex space-x-3 items-center mt-5 justify-between'>
        <Image src={'/vercel.svg'} width={'100'} height={'100'} alt={''} className={'mr-10'} />
        <ul className="flex space-x-3">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Developers</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">About</li>
        </ul>
        <ul className="flex space-x-3 mr-2 items-center ">
          <li className="px-2 py-1 bg-gray-100">Sign in</li>
          <li>Sign up</li>
        </ul>
      </header>
      <div className='absolute font-microbe rotate-6 text-12xl text-purple-100 -z-10 top-20 left-1 text-center sm:text-9xl lg:text-12xl'>
        BEST URL SHORTENER
      </div>
      <div className='absolute bg-violet-900 w-1 h-1 -z-10 top-36 left-2 shadow-2xl'>
        <svg className={'stroke-purple-400'} width="32" height="32" viewBox="0 0 21 21"><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="m9.5 7.5l1-1a2.828 2.828 0 1 1 4 4l-1 1m-3 3l-1 1a2.828 2.828 0 1 1-4-4l1-1m1 3l5-5"/></svg>
      </div>
      <Hero/>
      <section>
        <div className={'text-center flex flex-col w-full items-center mt-24'}>
          <span className='flex font-roboto-bold text-3xl text-purple-800'>A short link multiple possibilities!</span>
          <p className='flex font-roboto-thin'>Custom and track your links with this simple tool</p>
        </div>
        <div className="flex flex-row px-12 justify-around space-x-12 mt-8">
          <Card
            svg={'<svg width="42" height="42" viewBox="0 0 16 16"><g fill="#888888"><path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199a2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></g></svg>'}
            comment={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.ssimus quasi recusandae rem ullam voluptate!'}
            title={'Custom Domains'}
            count={1}
          ></Card>
          <Card
            svg={'<svg width="42" height="42" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="14" x="3" y="5" rx="2"/><path d="M6 8h.01M9 8h.01"/></g></svg>'}
            comment={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.ssimus quasi recusandae rem ullam voluptate!'}
            title={'Track Click'}
            count={2}
          ></Card>
          <Card
            svg={'<svg width="42" height="42" viewBox="0 0 24 24"><path fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h4l3 8l4-16l3 8h4"/></svg>'}
            comment={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.ssimus quasi recusandae rem ullam voluptate!'}
            title={'Statistics'}
            count={3}
          ></Card>
        </div>
      </section>
      <section>
        <div className="bg-violet-900 h-10 rotate-2 mt-12">

        </div>
        <div className="bg-violet-900 h-10 -mt-5">

        </div>
      </section>
    </div>
  )
}
