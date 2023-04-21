import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import NavItem from './NavItems'

const MENU_LIST = [
  {
    text: 'Home',
    href: '/'
  },{
    text: 'Music',
    href: '/music'
  },{
    text: 'Store',
    href: '/store'
  },{
    text: 'Contact',
    href: '/contact'
  }
]

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div style={{backgroundColor: '#222222'}}>
      <Container>
        <nav className='nav'>
          <Link href={"/"} legacyBehavior>
            <a onClick={() => setActiveIdx(0)}> 
              <span className='logo'>Mediterranean Nights</span>
            </a>
          </Link>

          <div onClick={()=> setNavActive(!navActive)} className='nav__menu-bar'>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => {
              return (
                <div onClick={()=> {
                  setActiveIdx(idx);
                  setNavActive(false);
                }} 
                  key={menu.text}>
                  <NavItem actrive={activeIdx === idx} {...menu}/>
                </div>
              )
            })}
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar