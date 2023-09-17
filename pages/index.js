import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Flex  } from '@chakra-ui/react';
import HomeSection1 from '../pagesSections/HomeSection1';
import HomeSection2 from '../pagesSections/HomeSection2';




export default function Home() {

  return (
    <>
      <Head>
        <title>Speedy Certz </title>
      </Head>


      <Flex h='fit-content' w='100%' bgColor='transparent' position={'relative'} direction={'column'}>
        <HomeSection1 />
        <HomeSection2 />
      </Flex>
      
    </>
  )
}



