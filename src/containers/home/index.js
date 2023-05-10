import Navbar from "@/components/navbar"
import Header from "@/components/header"
import Slider from "@/components/slider"
import Categories from "@/components/categories"
import Articles from "../articles"
import Medias from "@/components/media"
import Footer from "../footer"
import Line from "@/components/line"
import Head from "next/head"
import Modal from "@/components/modal"

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
    <Modal/>
    <div className="z-10 wrapper">
      <Navbar items={NavigationItems} />
      <Header/>
    </div>
    <Slider/>
    <Categories/>
    <Line/>
    <Articles/>
    <Line/>
    <Medias/>
    <Footer/>
    </>
  )
}
