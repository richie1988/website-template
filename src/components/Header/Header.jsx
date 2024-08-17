import React, {useState} from 'react'
import './Header.css'
import { Link } from 'react-scroll';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

  return (
    <header>
        <nav className='navbar'>
            <Link href="#" className='navbar-brand'>AP.</Link>
            <ul className={`nav-menu ${showMenu ? 'active' : ''}`}>
                <li className='nav-item'>
                    <Link to='hero-container' smooth={true} offset={0} duration={500} className="nav-link" onClick={closeMenu}>Section-1</Link>
                    <hr/>
                </li>
                <li className='nav-item'>
                    <Link to='section-one' smooth={true} offset={0} duration={500} className="nav-link" onClick={closeMenu}>Section-2</Link>
                    <hr/>
                </li>
                <li className='nav-item'>
                    <Link to='sectiontwo-container' smooth={true} offset={0} duration={500} className="nav-link" onClick={closeMenu}>Section-3</Link>
                    <hr/>
                </li>
                <li className='nav-item'>
                    <Link to='container-three' smooth={true} offset={0} duration={500} className="nav-link" onClick={closeMenu}>Section-4</Link>
                    <hr/>
                </li>
                <li className='nav-item'>
                    <Link to='four-countainer' smooth={true} offset={0} duration={500} className="nav-link" onClick={closeMenu}>Section-5</Link>
                    <hr/>
                </li>
                <li className='nav-item'>
                    <Link to='footer' smooth={true} offset={0} duration={500} className="nav-link" onClick={closeMenu}>Section-6</Link>
                </li>
            </ul>
            <div className={`hamburger ${showMenu? 'active':''}`} onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </nav>
        
    </header>
  )
}

export default Header