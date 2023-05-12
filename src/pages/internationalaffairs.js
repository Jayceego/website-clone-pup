import Navbar from "@/components/navbar";
import Header from "@/components/header";
import NavigationItems from "@/containers/helpers/navigationItem";
import InternationalContainer from "@/containers/international";
import Footer from "@/containers/footer";
import Messenger from "@/components/messenger";
import ScrollUp from "@/components/scroll-up";
import Modal from "@/components/modal";

export default function international() {
  return (
    <main>
      <Modal />
      <Messenger />
      <div className="z-10 wrapper">
        <Navbar items={NavigationItems} />
        <Header />
      </div>
      <InternationalContainer />
      <Footer />
      <ScrollUp />
    </main>
  );
}
