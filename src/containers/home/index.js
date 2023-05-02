import Navbar from "@/components/navbar"
import Header from "@/components/header"
import Slider from "@/components/slider"
import Categories from "@/components/categories"
import Line from "@/components/line"
import Head from "next/head"

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

    <div className="wrapper">
      <Navbar items={NavigationItems} />
      <Header/>
    </div>
    <Slider/>
    <Categories/>
    <Line/>
    <Categories/>
    </>
  )
}
