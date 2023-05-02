
import Line from "@/components/line"

const articles = [
    {
      title: 'Administrative Applicants for Selection/Promotion: List of All Applicants (First and Second Level) April 2023',
      date: 'Posted: April 20, 2023',
    },
    {
      title: 'Advisory on the Submission of Online Application for Graduation and Other Scheduled Activities for Year-End Graduation (Second Semester) A.Y. 2022-2023',
      date: 'Posted: April 10, 2023',
    },
    {
      title: 'List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3',
      date: 'Posted: February 07, 2023',
    },
    {
    title: 'Advisory to All Graduates of the PUP Main Campus (Sta. Mesa, Manila)',
    date: 'Posted: September 16, 2022',
    },
    {
    title: 'Internal Guidelines for Opt-Out and Voluntary Contribution of Students under Republic Act 10931',
    date: 'Posted: April 04, 2022',
    }
  ];

function Announcement() {
  return (
    <div className="max-w-[20vw]">  
        <a href="#" className="pb-2 my-4 text-primary-red border-b-[1px] font-bold border-solid border-primary-red">Announcement and Advisories</a> 
        <ul className="pr-3 mt-5 scrollbar">
            {articles.map((article, index) => (
                <li key={index} className="max-w-[340px] grid gap-2">
                    <a href="#" className="text-primary-red hover:underline">{article.title}</a>
                    <p className="text-sm text-primary-gray">{article.date}</p>
                    <div className="hr">
                        <Line/>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Announcement