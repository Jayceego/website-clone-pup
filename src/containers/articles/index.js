import Announcement from "@/components/announcement";

function Articles() {
  return (
    <div className="container flex mx-auto justify-evenly">
        <div className="">
            <Announcement/>
        </div>
        <div className="">
            <Announcement/>
        </div>
        <div className="">
            <Announcement/>
        </div>
    </div>
  )
}

export default Articles