import Navbar from "@/components/navbar";
import Header from "@/components/header";
import NavigationItems from "@/containers/helpers/navigationItem";
import ContactContainer from "@/containers/contact";
import Footer from "@/containers/footer";

export default function contactus() {
  return (
    <main>
      <div className="z-10 wrapper">
        <Navbar items={NavigationItems} />
        <Header />
      </div>
      <ContactContainer />
      <Footer />
    </main>
  );
}
