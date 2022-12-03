import Image from "next/image";
import Hero from "../components/hero";
import Card from "../components/card";
import Contact from "../components/contact";
import Footer from "../components/footer";

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
            svg={'<svg width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M7 15v2m3-6v6m3-4v4"/></g></svg>'}
            comment={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.ssimus quasi recusandae rem ullam voluptate!'}
            title={'Track Click'}
            count={2}
          ></Card>
          <Card
            svg={'<svg width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="14" cy="6" r="2"/><path d="M4 6h8m4 0h4"/><circle cx="8" cy="12" r="2"/><path d="M4 12h2m4 0h10"/><circle cx="17" cy="18" r="2"/><path d="M4 18h11m4 0h1"/></g></svg>'}
            comment={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.ssimus quasi recusandae rem ullam voluptate!'}
            title={'Statistics'}
            count={3}
          ></Card>
        </div>
      </section>
      <section className="mt-24">
        <div className="bg-violet-900 h-10 rotate-2 mt-12"></div>
        <div className="bg-violet-900 h-[112] -mt-6 px-24">
          <div className={'flex justify-around'}>
            <div className="z-10 pr-10 mt-4">
              <span className={'font-roboto-bold text-gray-200 text-4xl w-2/3 mt-12'}>
                Build custom audiance for <span className={'text-yellow-500'}>every customer</span>
              </span>
              <p className="mt-2 text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium adipisci amet dignissimos dolorem doloribus harum illum incidunt molestias obcaecati, officiis optio, pariatur possimus, praesentium quis. Adipisci aliquid natus numquam.
              </p>
            </div>
            <Image className={'z-10 -mt-10'}
              src={'/7922057.png'}
                   width={'400'}
                   height={'400'}
                   alt={''}>
            </Image>
          </div>
        </div>
      </section>
      <section className="bg-violet-900 -z-10">
        <div className="pt-12 -z-10">
          <div className='-z-10 font-microbe text-12xl text-purple-200 -z-10 top-20 left-1 text-center sm:text-9xl lg:text-12xl'>
            Statistics
          </div>
        </div>
        <div className="h-24 bg-gradient-to-b from-transparent to-violet-900 -mt-24 z-10">

        </div>
      </section>
      <section className="bg-violet-900">
        <div className="flex px-24 justify-between text-center text-gray-200">
            <span>Clicked links<br/>
              <p className="font-roboto-bold">
                1.152
              </p>
            </span>
          <span>Total users<br/>
              <p className="font-roboto-bold">
                1.152
              </p>
            </span>
          <span>Total links<br/>
              <p className="font-roboto-bold">
                1.123.152
              </p>
            </span>
        </div>
      </section>
      <section>
        <Contact></Contact>
      </section>
      <Footer></Footer>
    </div>
  )
}
