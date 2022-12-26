import React, { useEffect, useState } from 'react'
import cuid from 'cuid'
import Image from 'next/image';
import {
  Container,
  Button,
  Input,
  Offcanvas,
  OffcanvasBody,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap' // import components from reactstarp
import Layout from '../../components/Layouts/Layout'

const Counter = () => {
  const [isOffcanvas, setIsOffcanvas] = useState<boolean>(false) // Check statu of offcanvas menu(Open or close)

  const UploadImages = (e: any) => {
    setIsOffcanvas(true)
    return
  }
  console.log(process.env.REACT_APP_BASE_URL)

  return (
    <Layout title={'upload-image'}>
      <Container 
        className='text-center mt-5 position-absolute top-50 start-50 translate-middle'
      >
        <Offcanvas
          className='UploadImage_offcanvas-upload-image-option top-50 start-50 translate-middle'
          direction="bottom"
          toggle={() => setIsOffcanvas(false)}
          isOpen={isOffcanvas}
        >
          <OffcanvasBody>
          <Nav className='text-end mt-1' vertical>
            <NavItem>
              <NavLink className='UploadImage_offcanvas-upload-image-option_item text-dark pe-0'>
                העלאת תמונות 
                <Image 
                  className='mt-1'
                  src='/assets/images/upload-file.svg'
                  alt='start-order icon'
                  width={65}
                  height={23}
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='UploadImage_offcanvas-upload-image-option_item text-dark pe-0 mt-2'>
                ייבוא מהפייסבוק 
                <Image 
                  className='mt-2'
                  src='/assets/images/upload-fb.svg'
                  alt='mcon1' 
                  width={65} 
                  height={29} 
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='UploadImage_offcanvas-upload-image-option_item text-dark pe-0 mt-2'>
                ייבוא מהאינסטגרם
                <Image
                  className='mt-2' 
                  src='/assets/images/upload-inst.svg'
                  alt='mcon2' 
                  width={65} 
                  height={31} 
                />
              </NavLink>
            </NavItem>
          </Nav>
          </OffcanvasBody>
        </Offcanvas>

        <Input
          type='file'
          accept='image/*'
          className='text-center position-absolute top-50 start-50 translate-middle h-100 opacity-0'
          style={{width: 290, zIndex: 10}}
          onChange={(e:any) => UploadImages(e)}
          onClick={(e:any) => { 
            UploadImages(e) 
            e.preventDefault()
          }}
          multiple
          name='file'
        />
        <img 
          src='/assets/images/plus.svg' 
          className='UploadImage_add-image-icon'
          alt='plus' 
          width={200} 
          height={200} 
        />
        <p className='m-0 p-0 fw-bold text-dark' style={{lineHeight: '17px'}}>גררו את התמונות לכאן</p>
        <p className='m-0 p-0 text-dark' style={{lineHeight: '17px'}}>הזמנה ממוצעת מכילה כ8 תמונות</p>
      </Container>
    </Layout>
  )
}

export default Counter
