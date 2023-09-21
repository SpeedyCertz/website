import React from 'react'
import {Flex ,Image, Text} from '@chakra-ui/react';



function AboutMe() {
  return (
    <Flex minH={'90vh'} h='fit-content' pt='30px' pb='100px' w='100%' bgColor={'#121212'} justify={'start'} align={'center'} direction={'column'} gap='25px'>

        <Image src='/about.png' alt='about' width={{base:"70%", sm:"350px", md:"400px"}} mx={"auto"} className="animate__animated animate__fadeIn" style={{animationDelay: '0ms' }}/>

        <Text fontWeight={700} fontSize={{base:"30px", sm:"34px", md:"40px" }} className="animate__animated animate__fadeIn" style={{animationDelay: '250ms'}} color='#45ced6'>About Me</Text>

        <Text textAlign={'center'} fontSize={{base:"13px", sm:"16px", md:"18px" }} color='white' fontWeight={600} w='85%' style={{animationDelay: '500ms' }}
            maxW={'900px'} lineHeight={{base:"22px", sm:"28px", md:"32px" }} className="animate__animated animate__fadeIn"
          />
          My name is Christina Tyler and I had started Speedy Certz so that way people would have a quicker and more efficient way to get certified so you’re not having to waste any time. I’m constantly having things improved based on the feedback from the students. I started my business after going through negative experiences of people not knowing what to do in emergency situations and having to get my food handlers certification and getting annoyed that every certification that i needed required a different website. I wanted to offer classes that is one place to get every certification that a person would need that allows businesses to be able to use for free. My goal by creating this platform was to create a new pathway out of poverty by providing certifications that you can obtain quickly and efficiently. As someone who has several disabilities and is a disability advocate, I wanted to help change the statistics and be a part of the solution to fixing unemployment.
    </Flex>
  )
}

export default AboutMe