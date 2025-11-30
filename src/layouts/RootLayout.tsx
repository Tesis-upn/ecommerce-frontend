import { Outlet } from "react-router-dom"
import { Navbar } from "../components/shared/Navbar"

export const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col">
        <Navbar />
        <main></main>
        <Outlet />
        <div>Footer</div>
    </div>
  )
}
