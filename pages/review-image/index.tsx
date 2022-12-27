import React, { useEffect, useState } from 'react'
import cuid from 'cuid'
import * as filestack from 'filestack-js'
import Image from 'next/image'
import {
  Container,
  Button,
  Input,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap' // import components from reactstarp
import Layout from '../../components/Layouts/Layout'

const filestackClient = filestack.init(process.env.REACT_APP_FILESTACK_APIKEY)

const ReviewImage = () => {
  const [isOffcanvas, setIsOffcanvas] = useState<boolean>(true) // Check statu of offcanvas menu(Open or close)

  

  return (
    <Layout title={'review-image'}>
      <Container 
        className=''
      >
        <Offcanvas
          className=''
          direction="start"
          toggle={() => setIsOffcanvas(false)}
          isOpen={isOffcanvas}
        >
            <OffcanvasHeader toggle={() => setIsOffcanvas(false)}>
                Offcanvas
            </OffcanvasHeader>
            <OffcanvasBody>
                <strong>
                    This is the Offcanvas body.
                </strong>
            </OffcanvasBody>
        </Offcanvas>
      </Container>
    </Layout>
  )
}

export default ReviewImage