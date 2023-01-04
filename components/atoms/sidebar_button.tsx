import {ReactNode} from "react";
import Link from "next/link";

type props = {
  children: ReactNode,
  label: string,
  link?: string
}
export default function SidebarButton ({children, label, link}: props) {
  return (
    <Link href={link || ''} className={"flex items-center space-x-2 hover:bg-gray-600 rounded-md px-4 py-2 cursor-pointer text-gray-400 hover:text-gray-50 transform duration-100"}>
      <div className={"md:contents hidden"}>
        {children}
      </div>
      <span>{label}</span>
    </Link>
  )
}