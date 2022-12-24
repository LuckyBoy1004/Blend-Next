import React, { useState } from 'react';
import { useRouter } from 'next/router'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Button,
} from 'reactstrap' // import components from reactstarp
import { useTranslation } from 'next-i18next' // import translation module

import { I18next } from '../I18next' // import switch translation component

// import images
import Wtsap from '/assets/images/wtsap.svg'

// const NAV_CLASS_NAME = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'

const Header = () => {
  const router = useRouter()
  const { t } = useTranslation('header') // use translation
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [isOffcanvas, setIsOffcanvas] = useState<boolean>(false) // 


  const toggleNavbar = () => {
    setCollapsed(!collapsed)
    setIsOffcanvas(true)
  }

  return (
    <header>
      <Navbar className='Header' color='faded' light>
        <NavbarBrand href='/' className='me-1 Header_whats-app'>
          <img src={Wtsap} alt='WhatsApp Icon' />
        </NavbarBrand>
        <NavbarBrand href='/' className='me-1'>
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={() => {setIsOffcanvas(true)}} className='me-2' />
        <Offcanvas toggle={() => setIsOffcanvas(false)} isOpen={isOffcanvas} direction='end'>
          <OffcanvasHeader toggle={() => setIsOffcanvas(false)}>
            Offcanvas
          </OffcanvasHeader>
          <OffcanvasBody>
            <strong>
              This is the Offcanvas body.
            </strong>
          </OffcanvasBody>
        </Offcanvas>
      </Navbar>
      
      {/* <Nav className={router.pathname === '/' ? NAV_CLASS_NAME : NAV_CLASS_NAME + 'navbar-shrink'}>
        <I18next />
        <NavItem>
          <Link href='/'>
            <a className='navbar-brand'>{t('home')}</a>
          </Link>
        </NavItem>
        <NavItem className='ml-auto'>
          <Link href='/auth/signin'>
            <a className='nav-link'>{t('signin')}</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/counter'>
            <a className='nav-link'>{t('counter')}</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/blog'>
            <a className='nav-link'>{t('test')}</a>
          </Link>
        </NavItem>
      </Nav> */}
    </header>
  )
}

export default Header
