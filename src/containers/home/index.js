import Navbar from "@/components/navbar"
import Header from "@/components/header"
import Slider from "@/components/slider"
import Categories from "@/components/categories"
import Image from "next/image"
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
    <Head>
      <title>Polytechnic University of the Philippines</title>
    </Head>

    <div className="wrapper">
      <Navbar items={NavigationItems} />
      <Header/>
    </div>
    <Slider/>
    <Categories/>
    </>
  )
}
