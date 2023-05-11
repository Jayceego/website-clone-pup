import Navbar from "@/components/navbar"
import Header from "@/components/header"
import Slider from "@/components/slider"
import Categories from "@/components/categories"
import Articles from "../containers/articles"
import Medias from "@/components/media"
import Footer from "../containers/footer"
import Line from "@/components/line"
import Head from "next/head"
import Modal from "@/components/modal"
import Floaters from "@/components/messenger"
import ScrollUp from "@/components/scroll-up"
import NavigationItems from "../containers/helpers/navigationItem"


export default function Home() {
  return (
    <>
    <Floaters/>
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
    <ScrollUp/>
    </>
  )
}
