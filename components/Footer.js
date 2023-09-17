import React from 'react'
import {Flex , Text, Image, Divider, Icon} from '@chakra-ui/react';
import Link from 'next/link'
import {FaPhoneAlt} from 'react-icons/fa'
import {IoMail} from 'react-icons/io5'
import {FaUser} from 'react-icons/fa'  




function Footer() {

  const links = [
    {text: "Home" , href: "/"}, {text: "Courses Explanation" ,href: "/coursesexplanation"},
    {text: "About Me" ,href: "/aboutme"}, 
  ];
  

  return (

    <Flex bgColor={'#121212'} bottom={0} h='fit-content' direction={'column'} pt='50px' pb='60px'
      wrap='wrap' zIndex='100' position={"relative"} align="center" justify={'center'} w={'100%'}
      borderTop='2px solid #1D1A1A'
    >



      <Flex width="fit-content" align="center" justify={'center'} direction='column' bgColor="transparent" 
      >
        
        <Flex bgColor="transparent" align="center" justify={'center'} flexDirection='row' h='fit-content' >
          <Image src="/logo.webp" alt="Logo" h={{base:"80px", sm:"100px", md:"120px" }} />
        </Flex>

      </Flex>


      <Divider w='10%' mx='auto' borderColor={'#3b3535'} my='30px'/>



      <Flex w='65%' mx='auto' wrap={'wrap'} 
        align='start' justify={'center'} gap={{base:"25px", sm:"50px", md:"100px" }}
      >
        
        <Flex  direction='column' align={{base:"center", sm:"center", md:"center" }} gap='10px' letterSpacing={'1px'}>
          <Text fontSize={{base:"16px", sm:"18px", md:"20px" }}  w='fit-content' mb={2} fontWeight={600} color='#45ced6' >Quick Links</Text>
          {links.map((link , i) => (
          <Link href={link.href} key={i} >
            <Text fontSize={{base:"13px", sm:"14px", md:"16px" }} _hover={{textDecoration:'underline'}} color='#EBF0F3'>{link.text}</Text>
          </Link>  
        ))}
        </Flex>


        <Flex direction='column' align={{base:"center", sm:"center", md:"center" }} gap='10px' letterSpacing={'1px'}>

          <Text fontSize={{base:"16px", sm:"18px", md:"20px" }} w='fit-content' mb={2} fontWeight={700} color='#45ced6'>Contact Information</Text>

          <Flex align={'center'} gap='6px' >
            <Icon as={FaUser} fontSize={{base:"16px", sm:"18px", md:"20px" }} color='#EBF0F3'/>
            <Text fontSize={{base:"13px", sm:"14px", md:"16px" }} color='#EBF0F3'>
              Christina Tyler
            </Text>
          </Flex>

          <Flex align={'center'} gap='6px' >
            <Icon as={IoMail} fontSize={{base:"16px", sm:"18px", md:"20px" }} color='#EBF0F3'/>
            <Text fontSize={{base:"13px", sm:"14px", md:"16px" }} color='#EBF0F3'>SpeedyCertz@gmail.com</Text>
          </Flex>

          <Flex align={'center'} gap='6px' >
            <Icon as={FaPhoneAlt} fontSize={{base:"16px", sm:"18px", md:"20px" }} color='#EBF0F3'/>
            <Text fontSize={{base:"13px", sm:"14px", md:"16px" }} color='#EBF0F3'>(623)330-9456</Text>
          </Flex>

        </Flex>

      </Flex>



    </Flex>
  )
}

export default Footer