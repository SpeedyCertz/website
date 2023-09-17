import React from 'react'
import {Flex , Text, Box, Image, useColorModeValue } from '@chakra-ui/react';
import anime from 'animejs'
import { useEffect, useState } from 'react';
import Head from 'next/head'



function SplashScreen({finishedLoading, showWebsite}) {

    const [preloaderClose, setpreloaderClose] = useState(false)

  const animate = () =>{
    const loader = anime.timeline({
       loop: false,
       complete: () => handleClose() ,
    });
    loader.add({
        targets: '.logo',
        opacity: [0, 1],
        scale: [1.5, 1],
        rotate: [-20,0],
        duration: 1000,
        elasticity: 500,
    }).add({
      targets: '.logo',
      opacity: 0,
      easing: "easeOutExpo",
      duration: 250,
    })
  } 

  const handleClose = ()=>{
    setpreloaderClose(true)
    setTimeout(() => {
        showWebsite();
    }, 700);
    setTimeout(() => {
      finishedLoading()
    }, 1300);
  }

  useEffect(() => {
    animate();
  }, []);


  return (

    <>
    <Head>
      <title>Speedy Certz </title>
    </Head>

    <Flex position={'fixed'} top='0' left='0' right={'0'} bottom='0'  align={'center'} justify='center' zIndex={10000000} >
        

      <Box w='100%' h='50%' top='0%' left='0%' right='0%' position={'absolute'} zIndex={1} bgColor='#1D1A1A' 
        className={preloaderClose ? 'preloader-top-close' : ''} 
      >
        <Image src='/diploma.png' top='15%' zIndex={1} left='7%' position={'absolute'} textAlign='center'
          maxW={{base:"2vw", sm:"3vw", md:"3vw" }} minW={'40px'} opacity={'0.5'} className='logo'
        />
        <Image src='/diploma.png' top='15%' zIndex={1} left='50%' position={'absolute'} textAlign='center'
          maxW={{base:"2vw", sm:"3vw", md:"3vw" }} minW={'40px'} opacity={'0.5'} className='translateX logo'
        />
        <Image src='/diploma.png' top='15%' zIndex={1} right='7%' position={'absolute'} textAlign='center'
          maxW={{base:"2vw", sm:"3vw", md:"3vw" }} minW={'40px'} opacity={'0.5'} className='logo'
        />
      </Box>
      

      <Box w='100%' h='50%' bottom='0%' left='0%' right='0%' position={'absolute'} zIndex={1} bgColor='#1D1A1A' 
        className={preloaderClose ? 'preloader-bottom-close' : ''} >
        <Image src='/diploma.png' bottom='15%' zIndex={1} left='7%' position={'absolute'} textAlign='center'
          maxW={{base:"2vw", sm:"3vw", md:"3vw" }} minW={'40px'} opacity={'0.5'} className='logo'
        />
        <Image src='/diploma.png' bottom='15%' zIndex={1} left='50%' position={'absolute'} textAlign='center'
          maxW={{base:"2vw", sm:"3vw", md:"3vw" }} minW={'40px'} opacity={'0.5'} className='translateX logo'
        />
        <Image src='/diploma.png' bottom='15%' zIndex={1} right='7%' position={'absolute'} textAlign='center'
          maxW={{base:"2vw", sm:"3vw", md:"3vw" }} minW={'40px'} opacity={'0.5'} className='logo'
        />

      </Box>


      <Image src="/logo.webp" alt="speedy certz Logo" h={{base:"95px", sm:"110px", md:"140px", lg:'160px' }} className='logo' position={'relative'}  zIndex='3'
        borderRadius={'50%'} boxShadow='xl' 
      />



    </Flex>
    </>
  )
}

export default SplashScreen