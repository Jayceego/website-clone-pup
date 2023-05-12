import Announcement from "@/components/announcement";
import News from "@/components/news";
import Blogs from "@/components/blogs";
import NewsItem from "../helpers/newsItems";


function Articles() {
  return (
    <div className="container block mx-auto articles ">
      <Announcement/>
      <News items={NewsItem} slidesnum={1} head={"Latest News from the University"} spaciong={0}/>
      <Blogs />
    </div>
  )
}

export default Articles