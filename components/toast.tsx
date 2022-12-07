import {render, createPortal,unmountComponentAtNode} from "react-dom";
import {createRoot} from "react-dom/client";

interface ToastOptions {
  duration: number;
  type?: "info" | "success" | "error" | "warning"
}

interface ToastType {
  timeout: any;
  notify: (message: string, object: ToastOptions) => void;
}

interface ToastProps {
  message: string;
  type?: string;
}

interface Type {
  [key: string]: string
}

const TYPE_TO_COLOR: Type = {
  "info": "bg-sky-300",
  "success": "bg-green-300",
  "error": "bg-red-300",
  "warning": "bg-orange-300",
  "default": "bg-gray-300"
}

const TYPE_TO_BORDER_COLOR: Type = {
  "info": "border-l-sky-500",
  "success": "border-l-green-500",
  "error": "border-l-red-500",
  "warning": "border-l-orange-500",
  "default": "border-l-gray-500"
}

const TYPE_TO_TEXT: Type = {
  "info": "Information",
  "success": "Success",
  "error": "Error",
  "warning": "Warning",
  "default": "Information"
}


const Toast = ( { message, type }: ToastProps ) => {
  return (
    <div className={"w-1/6 ml-3 magicTime border-l-4 slideLeftReturn rounded py-3 px-2 "+ TYPE_TO_COLOR[type || "default"]+" "+ TYPE_TO_BORDER_COLOR[type || "default"]}>
      <div className="flex flex-col ">
        <div className="font-roboto-medium mb-1">
          { TYPE_TO_TEXT[type || 'default'] }
        </div>
        <div className="text-xs font-roboto-regular">
          { message }
        </div>
      </div>
    </div>
  )
}

export const toast : ToastType = {
  timeout: null,
  notify: ( message, {duration, type}) => {
    const root = createRoot(document.getElementById("toast-container") as HTMLElement);
    root.render(<Toast message={message} type={type}/>);
    toast.timeout = setTimeout(() => {
      root.unmount()
      clearTimeout(toast.timeout)
      toast.timeout = null
    }, duration*1000)
  }
}