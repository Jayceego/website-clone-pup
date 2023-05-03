import Announcement from "@/components/announcement";
import News from "@/components/news";
import Blogs from "@/components/blogs";

function Articles() {
  return (
    <div className="container block w-8/12 mx-auto articles ">
      <Announcement/>
      <News/>
      <Blogs />
    </div>
  )
}

export default Articles