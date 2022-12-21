import Image from "next/image";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Cards from "../components/cards";
import TopBar from "../components/topbar";

export default function Home() {
  return (
    <div className='font-roboto-thin'>
      <TopBar></TopBar>
      <div className='absolute font-microbe rotate-6 text-12xl text-purple-100 -z-10 top-20 left-1 text-center sm:text-9xl lg:text-12xl'>
        BEST URL SHORTENER
      </div>
      <Hero/>
      <section>
        <div className={'text-center flex flex-col w-full items-center mt-24'}>
          <span className='flex font-roboto-bold text-3xl text-purple-800'>A short link multiple possibilities!</span>
          <p className='flex font-roboto-thin'>Custom and track your links with this simple tool</p>
        </div>
        <Cards/>
      </section>
      <section className="mt-24">
        <div className="bg-violet-900 h-10 rotate-2 mt-12"></div>
        <div className="bg-violet-900 h-[112] -mt-6 px-24">
          <div className={'flex justify-around'}>
            <div className="z-10 pr-10 mt-4">
              <span className={'font-roboto-medium text-gray-200 text-4xl w-2/3 mt-12'}>
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
        <div className="h-24 bg-gradient-to-b from-transparent to-violet-900 -mt-24 z-10"></div>
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
