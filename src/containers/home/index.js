import Navbar from "@/components/navbar"
import Image from "next/image"

const NavigationItems = [
  {
    title: "Home",
    url: "/#",
  },
  {
    title: "Good Governance",
    url: "/#",
  },
  {
    title: "Transparency",
    url: "/#",
  },
  {
    title: "International Affairs",
    url: "/#",
  },
  {
    title: "Bid Notices and Invitation",
    url: "/#",
  },
  {
    title: "Contact us",
    url: "/#",
  }
]

export default function Home() {
  return (
    <>
      <Navbar items={NavigationItems} />
    </>
  )
}
