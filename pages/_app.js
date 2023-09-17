import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import 'animate.css';
import Router  from 'next/router'
import nProgress from 'nprogress';
import { Inter } from '@next/font/google'
import { store , persistor } from "../reduxStore/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'







// use sora google font globally
const InterCls = Inter({weight: '500', subsets: ['latin'] })



if (typeof window !== "undefined") {
  localStorage.setItem('chakra-ui-color-mode', 'dark')
}



nProgress.configure({ showSpinner: false });
  Router.events.on('routeChangeStart', () => {
    nProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    nProgress.done();
    nProgress.remove();
  });






function MyApp({ Component, pageProps }) {

  return (
    <main className={InterCls.className}> 
      <Provider store={store} >
        <PersistGate loading={null}  persistor={persistor} > 
          <ChakraProvider>
            <Layout>
              <Component {...pageProps}/>
            </Layout>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </main>
  )
}


export default MyApp
