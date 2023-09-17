import React from 'react'
import {Flex , Button , Image ,Box, Icon, useDisclosure, Text} from '@chakra-ui/react';
import Link from 'next/link'
import { useState ,useEffect, useRef } from 'react'; 
import { useRouter } from 'next/router';
import NavbarDrawer from '../pagesSections/NavbarDrawer';
import { Fade as Hamburger } from 'hamburger-react'






function Navbar() {
  

  const navLinks = [
    {text: "Home" , href: "/", delay: 200}, {text: "Courses Explanation" ,href: "/#", delay: 300},{text: "About Me" , href: "/aboutme", delay: 400}
  ];

 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const DrawerBtnRef = useRef();
  const { pathname } = useRouter();


  const [FixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {
    if(typeof window !== "undefined"){
      window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 60){
          setFixedNavbar(true)
        }
        else{
          setFixedNavbar(false)
        }
      });
    }
  }, []);





  return (
    <>
    <Flex
      align="center"
      justify="space-between"
      w="100%"
      h={{base:"90px", sm:"100px", md:"120px" }} 
      flexDirection="row"
      px={{base:'15px', sm:'20px' ,md:'30px',lg:"35px", xl: "70px"}}  
      background={FixedNavbar ? '#121212' : "#121212"} 
      //backdropFilter={FixedNavbar ? 'blur(12px)' : "none"} 
      //position={FixedNavbar ? 'fixed' : "none"} 
      boxShadow={FixedNavbar ? '0 4px 6px -1px rgba(196, 196, 196, .5),0 2px 4px -1px rgba(196, 196, 196, .5)' : ""} 
      transition={'all 0.25s linear'}
      zIndex={500}
      top={0}
    >
      

      
      <Flex direction={'row'} align="center" justify={'center'} gap={{base:'0px', sm:'5px', md:'10px' }} >

        <Link href="/" >
          <Flex 
            width="fit-content" align="center" justify={'center'} direction='row' bgColor="transparent" 
            className="animate__animated animate__fadeInDown" transitionDuration='0.15s' 
            style={{animationDelay: '0ms' }}  
          >
            <Flex bgColor="transparent" align="center" justify={'center'} flexDirection='row' h='fit-content' >
              <Image src="/logo.webp" alt="Logo" h={{base:"55px", sm:"65px", md:"85px" }} />
            </Flex>
          </Flex>
        </Link>
        
        <Flex ref={DrawerBtnRef} onClick={isOpen ? onClose : onOpen} cursor='pointer' 
          className="animate__animated animate__fadeInDown" style={{animationDelay: '100ms' }}
          display={{base:"flex", sm:"flex", md:"flex", lg:"none", xl: "none"}}  
        >
          <Hamburger color='white' size={26} rounded distance='sm' toggled={isOpen} />
        </Flex>

      </Flex>





      <Flex gap={{base:'auto', sm:'auto' ,md:'auto',lg:'40px', xl:'60px'}} display={{base:"none", sm:"none", md:"none", lg:"flex", xl: "flex"}} > 

        {navLinks.map((navItem , index) => (
          <Link href={navItem.href} key={index}> 
            <Flex align={'center'} justify='center' color={pathname == navItem.href ? '#45ced6' : "white"}  
              fontSize={'18px'} fontWeight={600} transition={'all 0.2s linear'}
              _hover={{color: "#45ced6"}} className="animate__animated animate__fadeInDown"
              style={{animationDelay: navItem.delay+'ms' }} 
            >
              <Text >{navItem.text}</Text>
            </Flex>
          </Link>
        ))}
          
      </Flex>





      <Flex direction={'row'} align="center" justify={'center'} h='100%'>  
      
        <Link href="/" _hover={{textDecoration: 'none'}} >
          <Button h={{base:"38px", sm:"42px", md:"48px" }} p='12px 28px' fontSize={{base:"13px", sm:"14px", md:"16px" }} 
            bg={'#38aeb5'} 
            color={'black'} borderRadius='25px'
            className="animate__animated animate__fadeInDown"
            style={{animationDelay: '600ms' }} 
            fontWeight={600}
            border='2px solid'
            borderColor={'#38aeb5'}
            transition={'all 0.2s linear'}
            _active={{bgColor:'rgba(196, 140, 68, 0.3)'}} _hover={{bgColor:'rgba(0, 0, 0,0.02)', color:'white', borderColor:'white'}}
          > 
            Join Now
          </Button> 
        </Link>
         
      </Flex>
    



    </Flex>

    <NavbarDrawer isOpen={isOpen} onClose={onClose} DrawerBtnRef={DrawerBtnRef} />

  </>

  )
}

export default Navbar