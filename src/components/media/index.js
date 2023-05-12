import { TwitterTimelineEmbed } from "react-twitter-embed";
import { useState } from "react";   

function Medias() {
  return (
    <div className="container">
      <div className="justify-center pb-3 mx-auto lg:pb-0 medias lg:flex">
        <div className="relative flex justify-center mb-5 ">
          <TwitterTimelineEmbed
            className="twitter"
            sourceType="profile"
            screenName="ThePUPOfficial"
            options={{
              width: 300,
              height: 826,
              theme: "dark",
            }}
          />
        </div>

        <div className="ml-0 lg:ml-5 ">
          <iframe
            className=" snap-center mb-5 rounded-xl w-11/12 mx-auto h-[570px] yt"
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/EVp6JBwTudk?start=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-11/12 mx-auto spotify"
            src="https://open.spotify.com/embed/show/6x7hlv9qZX8VpwMIRAAiRb?utm_source=generator&t=0"
            width="100%"
            height="232"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Medias;
