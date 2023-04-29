import { Inter } from 'next/font/google'
import Navbar from "@/containers/navbar"
import NavigationItems from "@/components/nav-item"


export default function Home() {
  return (
    <main
      className={`min-h-screen grid place-items-center p-24`}
    >
      <Navbar items={NavigationItems} />
      <h1>Welcome to my website!</h1>
      <p>This is the homepage.</p>
    </main>
  )
}
