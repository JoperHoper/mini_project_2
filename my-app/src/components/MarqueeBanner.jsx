import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { brown } from '@mui/material/colors';
import Marquee from "react-fast-marquee";
import "@/components/Marquee.css"

const MarqueeBanner = () => {

    return (
        <div className="marquee">
            <NotificationsNoneOutlinedIcon className="icon" sx={{ color: brown[900] }} />
            <div className="marqueeContent">
                <Marquee>
                    <p className="marqueeText">Are you an avid fan of coffee? Subcribe to BeaNews for the latest brewing news!</p>
                </Marquee>
            </div>
        </div>
    )
}

export default MarqueeBanner;