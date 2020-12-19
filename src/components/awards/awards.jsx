import './../main/Profile.css';
import cs50 from "./cs50.jpg"
import magister from "./magister.jpg"
import Image0014 from "./Image0014.jpg"
import Image0015 from "./Image0015.jpg"
import cs50sm from "./cs50-sm.jpg"
import magistersm from "./magister-sm.jpg"
import Image0014sm from "./Image0014-sm.jpg"
import Image0015sm from "./Image0015-sm.jpg"

function Awards() {
    return (
        <div className="main">
            <div className='main__title'>
                <h2>Достижения</h2>
            </div>
            <div className="main__profile main__profile--nopadding flex">
                <a href={cs50} target="_blank" rel="noreferrer" className="awards__award">
                    <img src={cs50sm} alt="avatar" className="awards__img" />
                </a>
                <a href={magister} target="_blank" rel="noreferrer" className="awards__award">
                    <img src={magistersm} alt="avatar" className="awards__img" />
                </a>
                <a href={Image0014} target="_blank" rel="noreferrer" className="awards__award">
                    <img src={Image0014sm} alt="avatar" className="awards__img" />
                </a>
                <a href={Image0015} target="_blank" rel="noreferrer" className="awards__award">
                    <img src={Image0015sm} alt="avatar" className="awards__img" />
                </a>
            </div>
        </div>
    )
}

export default Awards;