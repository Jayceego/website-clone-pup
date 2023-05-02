
function News() {
    return (
        <div className="px-4 mb-7">  
            <div className="article-title pb-[6px] mb-6 border-b-[1px] font-bold border-solid border-primary-light_dark">
                <a href="#" className="pb-2 my-4 text-primary-red border-b-[1px] font-bold border-solid border-primary-red">Latest News from the University</a> 
                <div className="buttons">
                    
                </div>
            </div>

            <div className="news"> 
                <div className="phivolcs"></div>
                <div className="details">
                    <a href="#" className="text-primary-red ">
                        PHIVOLCS commits to training PUP on REDAS
                    </a>
                    <p className="text-sm text-primary-gray">
                        April 26, 2023
                    </p>
                </div>
            </div>
        </div>
    )
}

export default News