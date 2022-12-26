import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { wrapper } from '../core/redux/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss'


const ServiceStaterApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(appWithTranslation(ServiceStaterApp))
