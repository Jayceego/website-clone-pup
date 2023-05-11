import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const socmedLinks = [
    {
        href: "https://www.facebook.com/ThePUPOfficial",
        icon: <FaFacebookF/>,
        className: "fb"
    },
    {
        href: "https://twitter.com/ThePUPOfficial",
        icon: <FaTwitter/>,
        className: "twitter"
    },
    {
        href: "https://www.youtube.com/user/pupcreatv",
        icon: <FaYoutube/>,
        className: "yt"
    },
    {
        href: "https://www.linkedin.com/school/polytechnic-university-of-the-philippines/",
        icon: <FaLinkedinIn/>,
        className: "linkedin"
    },
    {
        href: "https://www.pup.edu.ph/rss/",
        icon: <FaRss/>,
        className: "rss"
    },
    {
        href: "https://open.spotify.com/show/6x7hlv9qZX8VpwMIRAAiRb?si=h7yM8PeXR6qxSjQIs2GveA&dl_branch=1&nd=1",
        icon: <FaSpotify/>,
        className: "spotify"
    },
]

export default socmedLinks; 