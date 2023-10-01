import React from 'react'
import {Flex , Box ,Icon, Button,Image, Text} from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import {FcOnlineSupport} from 'react-icons/fc'
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {TbDiscount2} from 'react-icons/tb'
import Plx from "react-plx";
 



function HomeSection1() {
    const contact = [
        {title:'PHONE', value:'(623)330-9456', icon: FaPhoneAlt},
        {title:'EMAIL', value:'SpeedyCertz@gmail.com', icon: FaEnvelope},
        {title:'OWNER', value:'Christina Tyler', icon: FaUser}
    ];
    const parallaxData = [
        {
            start: 0,
            end: '100vh',
            properties: [
              {
                startValue: 0,
                endValue: 200,
                property: 'translateY',
                unit: '%'
              },
              {
                startValue: 0,
                endValue: 100,
                property: 'rotate',
              },
            ],
          },
    ];

    const parallaxData2 = [
        {
          start: 0,
          end: '100vh',
          properties: [
            {
              startValue: 0,
              endValue: 100,
              property: 'translateX',
              unit: '%'
            }
          ],
        },
    ];

    const parallaxData3 = [
        {
          start: 0,
          end: '100vh',
          properties: [
            {
              startValue: 0,
              endValue: -200,
              property: 'translateY',
              unit: '%'
            },
            {
              startValue: 0,
              endValue: 100,
              property: 'rotate',
            },
          ],
        },
    ];



  return (


    <Flex h='fit-content' w='100%' bgColor={'#121212'} align={'center'} justify={'center'} direction={'column'} position={'relative'} pt='50px'>



      <Flex h='fit-content' align={'center'} justify={'center'} overflow={'hidden'} gap={{base:"15px", sm:"20px", md:"25px" }} 
        px={{base:"5%", sm:"6%", md:"7%", lg:'7%', xl:'3%'}} w='95%' direction={'column'} 
        zIndex={100} position={'relative'} 
      >



        {/*<Flex direction={{base:"column", sm:"column", md:"row" }} w={{base:"100%", sm:"100%", md:"fit-content" }}
          align={'start'} gap={{base:"10px", sm:"15px", md:"25px" }} justify={'start'} wrap={'wrap'}
        >
          <Fade bottom delay={500} >
          {contact.map((v,i)=>(

            <Flex gap={{base:"5px", sm:"7px", md:"10px" }} justify={'center'} align={'center'} pb='10px' key={i}>

              <Button _hover={{bg:'rgba(125, 212, 180, 0.3)'}} _focus={{bg:'rgba(125, 212, 180, 0.5)'}} 
                transition='0.2s ease' bgColor={'rgba(125, 212, 180, 0.2)'}  boxShadow={'md'}
                h={{base:"40px", sm:"45px", md:"50px" }} w={{base:"35px", sm:"45px", md:"50px" }}
                p={0} borderRadius={'50%'} border='1px solid' borderColor={'gray.600'}
              >
                <Icon as={v.icon} fontSize={{base:"18px", sm:"20px", md:"22px" }}  cursor='pointer' color='#45ced6' />
              </Button> 

              <Flex direction={'column'} align={'start'} >
                <Text textAlign={'left'} fontSize={{base:"14px", sm:"16px", md:"18px" }} color='white' cursor={'default'} fontWeight={500} >
                  {v.title}
                </Text>
                <Text textAlign={'left'} fontSize={{base:"14px", sm:"16px", md:"18px" }} cursor={'default'}
                  fontWeight={700} color='white' 
                >
                  {v.value}
                </Text>
              </Flex>

            </Flex>

          ))}
          </Fade>
          
          </Flex>*/}
        <Image src='license.png' alt='license' maxW={'500px'} w='100%' />

      </Flex>



        <Box w='fit-content' top='10%' zIndex={1} right='10%' position={'absolute'} textAlign='center' >
          <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
            <Image src='https://assets.website-files.com/649189cd213c45a9d650f194/64929042c63f0d96605e8505_shape3.png' 
              maxW={{base:"4vw", sm:"5vw", md:"6vw" }} minW={'80px'} opacity={'0.2'}
            />
          </Plx>
        </Box>
        <Box w='fit-content' bottom='10%' zIndex={1} left='10%' position={'absolute'} textAlign='center' >
          <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
            <Image src='https://assets.website-files.com/649189cd213c45a9d650f194/64929042c63f0d96605e8505_shape3.png' 
              maxW={{base:"4vw", sm:"5vw", md:"6vw" }} minW={'80px'} opacity={'0.2'}
            />
          </Plx>
        </Box>
 

    </Flex>
  )
}

export default HomeSection1