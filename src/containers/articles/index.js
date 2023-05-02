import Announcement from "@/components/announcement";
import News from "@/components/news";

function Articles() {
  return (
    <div className="container block mx-auto articles ">
        <div className="">
            <Announcement/>
        </div>
        <div className="flex-grow">
            <News/>
        </div>
        <div className="">
            <Announcement/>
        </div>
    </div>
  )
}

export default Articles