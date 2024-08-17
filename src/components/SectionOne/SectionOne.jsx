import React from 'react'
import './SectionOne.css'


const SectionOne =()=> {
    return (
        <div className='section-one'>
            <div className='sectionOne'>
                <div className='img-placeholder'>image here</div>
                <div className='section-one-text'>
                <ul>
                <li><h2>Heading</h2></li>
                <li><h1>Development</h1></li>
                <li><p>Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.</p></li>
                <button className='link-btn'>LINK</button>
                </ul>
                </div>
            </div>
            <div className='sectionOne'>
                <div className='section-one-text'>
                <ul>
                <li><h2>Heading</h2></li>
                <li><h1>Development</h1></li>
                <li><p>Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.</p></li>
                <button className='link-btn'>LINK</button>
                </ul>
                </div>
                <div className='img-placeholder'>image here</div>
            </div>

        </div>
    )
}

export default SectionOne