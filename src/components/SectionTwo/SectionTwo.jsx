import React from 'react'
import './SectionTwo.css'
import Dropdown from './Dropdown'

const SectionTwo =()=> {
    return(
        <div className="sectiontwo-container">
            <div className="sectionTwo-box">
                <div className='box-section'>
                    <div className='card cardOne'>
                    <ul>
                        <li><h2>Title</h2></li>
                        <li><p>Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications.</p></li>
                    </ul>
                    </div>
                    <div className='card cardTwo'>
                    <ul>
                        <li><h2>Title</h2></li>
                        <li><p>Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications.</p></li>
                    </ul>
                    </div>
                </div>
                <div className="dropdown-section">
                <div className='select-container'>
                    <Dropdown/>
                </div>
                <div className='card cardThree'>
                    <ul>
                        <li><h2>Title</h2></li>
                        <li><p>Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications.</p></li>
                    </ul>
                    </div>
                </div>
                <div className='box-section'>
                    <div className='card cardFour'>
                    <ul>
                        <li><h2>Title</h2></li>
                        <li><p>Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications.</p></li>
                    </ul>
                    </div>
                    <div className='card cardFive'>
                    <ul>
                        <li><h2>Title</h2></li>
                        <li><p>Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications.</p></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo