import Navbar from "@/components/navbar";
import Header from "@/components/header";
import NavigationItems from "@/containers/helpers/navigationItem";

export default function contactus() {
  return (
    <main>
      <div className="z-10 wrapper">
        <Navbar items={NavigationItems} />
        <Header />
      </div>
    </main>
  );
}
