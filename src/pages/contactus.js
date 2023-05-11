import Navbar from "@/components/navbar";
import Header from "@/components/header";
import NavigationItems from "@/containers/helpers/navigationItem";
import ContactContainer from "@/containers/contact";
import Footer from "@/containers/footer";
import Messenger from "@/components/messenger";
import ScrollUp from "@/components/scroll-up";
import Modal from "@/components/modal";

export default function contactus() {
  return (
    <main>
      <Modal />
      <Messenger /> 
      <div className="z-10 wrapper">
        <Navbar items={NavigationItems} />
        <Header />
      </div>
      <ContactContainer />
      <Footer />
      <ScrollUp />
    </main>
  );
}
