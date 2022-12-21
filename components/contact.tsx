export default function Contact() {
  return (
    <div className="bg-violet-900 pb-4">
      <div className="text-center pt-12">
        <span className="font-roboto-bold text-xl text-gray-200">
          Subscribe to our newsletter
        </span>
        <p className="font-roboto-thin text-gray-200 pt-2">
          Subscribe to our newsletter for follow us with news features and more...
        </p>
      </div>
      <div className="flex w-full items-center justify-center mt-6">
        <div className="relative w-full px-32">
          <input type="text" className="bg-gray-100 h-12 w-full pl-3 pr-24 rounded-lg z-0 text-xl"
                 placeholder="Email..."/>
          <div className="absolute top-1 right-1 px-32">
            <button className="shadow-2xl h-10 w-24 text-gray-200 rounded-lg bg-amber-500 hover:bg-amber-600 transition duration-200 hover:shadow-xl active:shadow-inner">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-gray-200 text-center px-32 mt-6 text-xs font-roboto-thin">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam assumenda blanditiis dolorum ea eius fugiat harum impedit inventore ipsum
      </div>
    </div>
  )
}