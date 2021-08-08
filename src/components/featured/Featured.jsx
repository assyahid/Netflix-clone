import {  InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
            {type &&(
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="gendre" id="gendre">
                       <option>Gendre</option>
                       <option value="adventure">Adventure</option>
                       <option value="comedy">Comedy</option>
                       <option value="crime">Crime</option>
                       <option value="fantasy">Fantasy</option>
                       <option value="historical">Historycal</option>
                       <option value="horror">Horror</option>
                       <option value="romace">Romance</option>
                       <option value="sci-fi">Sci-fi</option>
                       <option value="drama">Drama</option>
                       <option value="animation">Animation</option>
                    </select>
                </div>
            )}
            <img src="https://wallpaperaccess.com/full/13189.jpg" alt="" />
       
        <div className="info">
        <img src="https://wallpaperaccess.com/full/13189.jpg" alt="" />
        <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus 
            ut ea eligendi, consequuntur eveniet soluta rerum officia, earum
            saepe fuga ipsum sint ad tenetur odio voluptatum. Corrupti, neque soluta?
        </span>
        <div className="buttons">
            <button className="play">
            <PlayArrow/>
            <span>Play</span>
            </button>
            <button className="more">
            <InfoOutlined/>
            <span>Info</span>
            </button>
        </div>
        </div>
        </div>
    )
}
