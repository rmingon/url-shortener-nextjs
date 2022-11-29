export default function Hero() {
  return (
    <div className="container h-screen flex justify-center items-center ">
      <div className="relative">
        <div className="absolute top-4 left-3">
          <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
        </div>
        <input type="text" className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
               placeholder="Search anything..."/>
        <div className="absolute top-2 right-2">
          <button className="h-10 w-20 text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 transition duration-200">Shorten</button>
        </div>
      </div>
    </div>
  )
}