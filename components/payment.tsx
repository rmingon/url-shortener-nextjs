export default function Payment () {
  return (
    <div className="shadow-lg rounded-lg bg-gray-200 px-6 py-3">
      <div className={"flex justify-between mb-6"}>
        <span className={"uppercase mr-24 text-xs"}>Make payment with</span>
        <p className="text-xs text-amber-600 hover:underline cursor-pointer">Other?</p>
      </div>
      <div className={"flex flex-col space-y-2"}>
        <div className={"space-x-3 flex items-center"}>
          <input type="radio" id={"cb"} name={"payment"} className={"text-amber-500 hover:bg-amber-300"} />
          <svg width="20" height="20" viewBox="0 0 24 24" className={"stroke-gray-200"}><path fill="currentColor" d="M9 22v2H7v-2h2m4 0v2h-2v-2h2m4 0v2h-2v-2h2m-5-7h-2v-2h2v2m6 0h-4v-2h4v2M8 11H6V9h2v2m10 0h-8V9h8v2m2 9H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 6v12h16V6H4Z"/></svg>
          <label htmlFor="cb">
            Credit / Debit card
          </label>
        </div>
      </div>
    </div>
  )
}