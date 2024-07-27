import style from "./Marquee.module.css"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { brown } from '@mui/material/colors';

const Marquee = () => {

    return (
        <div className={style.marquee}>
            <NotificationsNoneOutlinedIcon className={style.icon} sx={{ color: brown[900] }} />
            <div className={style.marqueeContent}>
                <p className={style.marqueeText}>Subcribe to BeaNews for the latest brewing news!</p>
            </div>
        </div>
    )
}

export default Marquee