interface props {
  svg: string,
  title: string,
  comment: string,
  count: number
}

export default function Card ({svg, title, comment, count}: props) {
  return (
    <div className="text-center cursor-pointer rounded-2xl hover:shadow-2xl duration-200 transition px-2 flex flex-col items-center">
      <div className="mt-4" dangerouslySetInnerHTML={{__html: svg}}></div>
      <span className="font-roboto-bold text-purple-800">{title}</span>
      <p className="mt-3">{comment}</p>
      <p className="font-roboto-bold text-gray-200 my-2">0{count}</p>
    </div>
  )
}