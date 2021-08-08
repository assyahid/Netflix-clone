import "./listitem.scss"
import {PlayArrow, Add, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@material-ui/icons";
import {useState} from "react";
export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
    return (
        <div className="listItem"
        style={{left: isHovered && index * 225 -50 + index * 2.5}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <img src="https://wallpapercave.com/wp/wp2951821.jpg" alt="" />
            {isHovered && (
                <>
                <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
            <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
                <span>1 Hour 14 menit</span>
                <span className="limit">+16</span>
                <span>1999</span>
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur sequi qui aliquid minus reprehenderit modi 
                repellendus at, sint cum rerum placeat aliquam sit
            </div>
            <div className="gendre">Action</div>
        </div>
        </>
        )}
        </div> 
    );
}
