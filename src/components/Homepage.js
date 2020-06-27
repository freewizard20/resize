import React from 'react'
// import { func1, func2 } from '../utils/functions';
import './Homepage.css';

function Homepage() {
    return (
        <div>
            <header>
                {/* <a href="http://localhost:3000"><img id="logo" src="logo.png" /></a> */}
            </header>
            <section>
                <button id="favorite-button" className="normal-button favorites">즐겨찾기에 추가</button>
                <button id="home-button" className="normal-button favorites">홈 화면에 추가</button>
            </section>
        </div>
    )
}

export default Homepage;
