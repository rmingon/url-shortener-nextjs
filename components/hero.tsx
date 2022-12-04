import {useState} from "react";

export default function Hero() {

  const [optionsOpen, setOptionsOpen] = useState(false)

  return (
    <div className={'px-24 lg:px-52 w-full flex flex-col'}>
      <div className={'text-center flex flex-col w-full items-center mt-10'}>
        <span className='flex font-roboto-bold text-5xl text-purple-800 mt-4'>Create short links!</span>
        <p className='flex font-roboto-thin mt-2'>Custom and track your links with this simple tool</p>
      </div>
      <div className="h-44 mt-24 flex w-full bg-gray-100/[.60] shadow-2xl rounded-2xl flex-col ">
        <div className="flex w-full items-center justify-center mt-6">
            <div className="relative w-11/12 px-6">
              <div className="absolute top-7 left-8">
                <svg className={'stroke-slate-300'} width="26" height="26" viewBox="0 0 21 21"><path fill="none" stroke-linecap="round" stroke-linejoin="round" d="m9.5 7.328l1-1a2.828 2.828 0 0 1 4 4l-1 1M10.328 14.5l-1 1a2.828 2.828 0 1 1-4-4l1-1m1.172-5v-3m-5 5h3m8 11v-3m2-2h3"/></svg>
              </div>
              <input type="text" className="bg-gray-200/[.60] h-20 w-full pl-12 pr-24 rounded-lg z-0 text-xl"
                     placeholder="Url to shorten..."/>
              <div className="absolute top-4 right-10">
                <button className="shadow-2xl h-12 w-24 text-gray-200 rounded-lg from-purple-600 bg-gradient-to-r to-purple-900 hover:bg-violet-900 transition duration-200 hover:shadow-xl active:shadow-inner ring-2 ring-offset-2 ring-purple-500/50">Shorten</button>
              </div>
            </div>
        </div>
        <div className={'mt-8 flex flex-col justify-center items-center space-x-1 cursor-pointer'}>
          <div className={"flex items-center"} onClick={(e) => setOptionsOpen(!optionsOpen)}>
            <p className={'text-center text-xs'}>
              More options
            </p>
            <span>
              <svg className={optionsOpen ? 'rotate-180' : ''} width="22" height="22" viewBox="0 0 21 21"><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" d="m14.5 8.5l-4 4l-4-4"/></svg>
            </span>
          </div>
          { optionsOpen ? (
            <div className="magicTime perspectiveDownReturn px-6 h-10">
              OPTIONS
            </div>
          ) : null }
        </div>
      </div>
      <span className="text-center mt-4 text-gray-400 text-xs">
        Free to use, simple, what else ?
      </span>
    </div>
  )
}