import React, { useState } from 'react';
import Image from 'next/image';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from 'reactstrap' // import components from reactstarp

const Header = () => {
  const [isOffcanvas, setIsOffcanvas] = useState<boolean>(false) // Check statu of offcanvas menu(Open or close)

  return (
    <Navbar className='Header' color='faded' light>

      {/* Display WhatsApp icon on the left of header bar */}
      <NavbarBrand href='/' className='me-1 Header_whats-app'>
        <Image src='/assets/images/wtsap.svg' alt='WhatsApp Icon' width={25} height={25} />
      </NavbarBrand>

      {/* Display logo icon on the center of header bar */}
      <NavbarBrand href='/' className='me-1'>
        <Image src='/stk_logo.svg' alt='logo' width={75} height={35} />
      </NavbarBrand>

      {/* Display menu icon on the right of header bar */}
      <NavbarToggler 
        className='me-2'
        onClick={() => setIsOffcanvas(true)}
      />

      {/* offcanvas menu */}
      <Offcanvas 
        toggle={() => setIsOffcanvas(false)}
        isOpen={isOffcanvas}
        direction='end'
      >

        {/* offcanvas menu hader */}
        <OffcanvasHeader
          className='Header_offcanvas-header'
          toggle={() => setIsOffcanvas(false)}
        >
          {/* Display stk logo the center of offcanvas header */}
          <Image 
            src='/stk_logo.svg' 
            alt='logo' 
            width={75} 
            height={35} 
          />
        </OffcanvasHeader>

        {/* offcanvas menu body */}
        <OffcanvasBody
          className='_offcanvas-body'
        >
          {/* Display menu item list */}
          <Nav className='text-end mt-3' vertical>
            <NavItem>
              <NavLink className='Header_offcanvas-body_navLink-start-order fw-bold text-black' href="#">
                התחלת הזמנה
                <Image src='/assets/images/arr.svg' alt='start-order icon' width={55} height={8} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='Header_offcanvas-body_navLink-text text-dark' href="#">
                דברו איתנו במסנג’ר
                <Image 
                  className='mt-2'
                  src='/assets/images/mcon1.svg' 
                  alt='mcon1' 
                  width={55} 
                  height={31} 
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='Header_offcanvas-body_navLink-text text-dark' href="#">
                דברו איתנו בוואצאפ
                <Image
                  className='mt-2' 
                  src='/assets/images/mcon2.svg' 
                  alt='mcon2' 
                  width={55} 
                  height={31} 
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='Header_offcanvas-body_navLink-text text-dark pe-5 pt-3' href="#">
                שאלות נפוצות
              </NavLink>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </Navbar>
  )
}

export default Header
