import Navbar from "@/components/navbar"

const NavigationItems = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "About",
    url: "/about"
  },
  {
    title: "Contact",
    url: "/contact"
  }
]

export default function Home() {
  return (
    <main className="flex items-center justify-between min-h-screen p-24">
      <Navbar items={NavigationItems} />
      <h1 className="welcome">Welcome to my website!</h1>
      <p>This is the homepage.</p>
    </main>
  )
}
