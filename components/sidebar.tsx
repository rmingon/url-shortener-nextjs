import Link from "next/link";
import SidebarButton from "./atoms/sidebar_button";

export default function Sidebar () {
    return (
    <div className={"flex justify-between flex-col bg-gray-900 py-8 px-8 h-screen"}>
        <div className={"flex flex-col space-y-6 "}>
            <div className={"text-white mx-auto flex space-x-3 items-center"}>
                <div className={"h-16 w-16 bg-purple-400 rounded"}></div>
                <div className={"text-xl"}>RMingon</div>
            </div>
            <SidebarButton label={"Dashboard"}>
                <svg width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M24 21h2v5h-2zm-4-5h2v10h-2zm-9 10a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3v-2a5 5 0 0 1 0 10z"/><path fill="currentColor" d="M28 2H4a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2Zm0 9H14V4h14ZM12 4v7H4V4ZM4 28V13h24l.002 15Z"/></svg>
            </SidebarButton>
            <SidebarButton label={"Links"}>
                <svg width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M29.25 6.76a6 6 0 0 0-8.5 0l1.42 1.42a4 4 0 1 1 5.67 5.67l-8 8a4 4 0 1 1-5.67-5.66l1.41-1.42l-1.41-1.42l-1.42 1.42a6 6 0 0 0 0 8.5A6 6 0 0 0 17 25a6 6 0 0 0 4.27-1.76l8-8a6 6 0 0 0-.02-8.48Z"/><path fill="currentColor" d="M4.19 24.82a4 4 0 0 1 0-5.67l8-8a4 4 0 0 1 5.67 0A3.94 3.94 0 0 1 19 14a4 4 0 0 1-1.17 2.85L15.71 19l1.42 1.42l2.12-2.12a6 6 0 0 0-8.51-8.51l-8 8a6 6 0 0 0 0 8.51A6 6 0 0 0 7 28a6.07 6.07 0 0 0 4.28-1.76l-1.42-1.42a4 4 0 0 1-5.67 0Z"/></svg>
            </SidebarButton>
            <SidebarButton label={"Statistics"}>
                <svg width="24" height="24" viewBox="0 0 32 32"><path d="M29.414 24L15.999 10.566a2.047 2.047 0 0 0-2.828 0l-2.586 2.586a2.002 2.002 0 0 0 0 2.829l13.414 13.434a2.002 2.002 0 0 0 2.828 0l2.587-2.587a2 2 0 0 0 0-2.828zm-17.415-9.434l2.586-2.585l3.5 3.5l-2.587 2.587l-3.5-3.5zM25.413 28l-8.5-8.519l2.586-2.587L28 25.414z" fill="currentColor"/><path d="M7 20l2-2l2 2l-2 2z" fill="currentColor"/><path d="M18 9l2-2l2 2l-2 2z" fill="currentColor"/><path d="M7 9l2-2l2 2l-2 2z" fill="currentColor"/><path d="M11 2H2v9h2V4h7V2z" fill="currentColor"/></svg>
            </SidebarButton>
            <SidebarButton label={"Invoice"}>
                <svg width="24" height="24" viewBox="0 0 32 32"><circle cx="10" cy="28" r="2" fill="currentColor"/><circle cx="24" cy="28" r="2" fill="currentColor"/><path fill="currentColor" d="M28 7H5.82L5 2.8A1 1 0 0 0 4 2H0v2h3.18L7 23.2a1 1 0 0 0 1 .8h18v-2H8.82L8 18h18a1 1 0 0 0 1-.78l2-9A1 1 0 0 0 28 7Zm-2.8 9H7.62l-1.4-7h20.53Z"/></svg>
            </SidebarButton>
            <SidebarButton label={"Settings"}>
                <svg width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M25 16c0-1.5-1.2-2.8-2.7-3c-1.1-2.4-3.5-4-6.3-4c-.2 0-.5 0-.7.1C14.7 8.4 13.9 8 13 8c-1.7 0-3 1.3-3 3c0 .4.1.7.2 1.1C9.4 13.2 9 14.5 9 16s.4 2.8 1.2 3.9c-.1.4-.2.7-.2 1.1c0 1.7 1.3 3 3 3c.9 0 1.7-.4 2.3-1.1c.2 0 .5.1.7.1c2.8 0 5.2-1.7 6.3-4c1.5-.2 2.7-1.5 2.7-3zm-12-6c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1zm0 12c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1zm3-1c0-1.7-1.3-3-3-3c-.5 0-1 .1-1.4.4c-.4-.7-.6-1.5-.6-2.4s.2-1.7.6-2.4c.4.3.9.4 1.4.4c1.7 0 3-1.3 3-3c1.9 0 3.4 1 4.3 2.5c-.8.6-1.3 1.5-1.3 2.5s.5 1.9 1.3 2.5C19.4 20 17.9 21 16 21zm6-4c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1z"/><path fill="currentColor" d="M16 31c-.2 0-.3 0-.5-.1l-12-7c-.3-.2-.5-.5-.5-.9V9c0-.4.2-.7.5-.9l12-7c.3-.2.7-.2 1 0l12 7l-1 1.7L16 3.2L5 9.6v12.9l11 6.4l11-6.4V15h2v8c0 .4-.2.7-.5.9l-12 7c-.2.1-.3.1-.5.1z"/></svg>
            </SidebarButton>
        </div>
        <SidebarButton label={"Log Out"} link={'/'}>
            <svg width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M6 30h12a2.002 2.002 0 0 0 2-2v-3h-2v3H6V4h12v3h2V4a2.002 2.002 0 0 0-2-2H6a2.002 2.002 0 0 0-2 2v24a2.002 2.002 0 0 0 2 2Z"/><path fill="currentColor" d="M20.586 20.586L24.172 17H10v-2h14.172l-3.586-3.586L22 10l6 6l-6 6l-1.414-1.414z"/></svg>
        </SidebarButton>
    </div>)
}