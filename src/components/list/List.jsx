import ListItem from "../listitem/Listitem";
import {useRef, useState} from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import "./list.scss";

export default function List() {
    const [isMoved, setSlideMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)

    const listRef = useRef()

    const handleClick = (direction) =>{
        setSlideMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === "rigth" && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        console.log(distance)
    }
    return (
        <div className="list">
     <span className="listTitle">Continue to Watch</span>
     <div className="wrapper">
        <ArrowBackIosOutlined
        className="sliderArrow left" 
        onClick={()=>handleClick("left")}
        style={{display:!isMoved && "none"}}
        />
        <div className="container" ref={listRef}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
      
        </div>
        <ArrowForwardIosOutlined className="sliderArrow rigth" onClick={()=>handleClick("rigth")}/>
        </div>
        
    </div>
    )
}
