import React from 'react'
import {Flex ,Icon,Image,useToast, Text} from '@chakra-ui/react';
import Head from 'next/head'
import Fade from 'react-reveal/Fade';
import { useEffect } from 'react'; 
import {FcShipped} from 'react-icons/fc'
import emailjs from 'emailjs-com'
import { useRouter } from "next/router";

var jwt = require('jsonwebtoken');



const courses = [
  {title:'American Red Cross Adult and Pediatric First Aid, CPR, AED Blended Learning',price:'$70.00', image:'/c2.jpg', slug:'american-red-cross-adult-and-pediatric-first-aid-cpr-aed-blended-learning'},
  {title:'American Red Cross Adult and Pediatric First Aid, CPR, AED Challenge', price:'$70.00', image:'/c1.jpg', slug:'american-red-cross-adult-and-pediatric-first-aid-cpr-aed-challenge'},
  {title:'American Red Cross Adult and Pediatric Basic Life Support Blended Learning',price:'$70.00',  image:'/c4.jpg', slug:'american-red-cross-adult-and-pediatric-basic-life-support-blended-learning'},
  {title:'American Red Cross Adult and Pediatric Basic Life Support Challenge',price:'$70.00',  image:'/c3.jpg', slug:'american-red-cross-adult-and-pediatric-basic-life-support-challenge'},
  {title:'American Red Cross Adult and Pediatric FA, CPR, AED Instructor Blended Learning',price:'$300.00',  image:'/c5.jpg', slug:'american-red-cross-adult-and-pediatric-fa-cpr-aed-instructor-blended-learning'},

  {title:'American Red Cross Adult and Pediatric First Aid, CPR, AED',price:'$90.00', image:'/c10.jpg', slug:'american-red-cross-adult-and-pediatric-first-aid-cpr-aed'},
  {title:'American Red Cross Adult and Pediatric Basic Life Support',price:'$90.00', image:'/c11.jpg', slug:'american-red-cross-adult-and-pediatric-basic-life-support'},

  {title:'American Red Cross Adult and Pediatric First Aid, CPR, AED Skills Secession',price:'$65.00',  image:'c6.jpg', slug:'american-red-cross-adult-and-pediatric-first-aid-cpr-aed-skills-secession'},
  {title:'American Red Cross Adult CPR, AED Skills Secession',price:'$60.00',  image:'/c7.jpg', slug:'american-red-cross-adult-cpr-aed-skills-secession'},
  {title:'American Red Cross Adult First Aid, CPR, AED Skills Secession',price:'$60.00',  image:'/c8.jpg', slug:'american-red-cross-adult-first-aid-cpr-aed-skills-secession'},
  {title:'American Red Cross Adult CPR Skills Secession',price:'$60.00',  image:'/c9.jpg', slug:'american-red-cross-adult-cpr-skills-secession'},
]




function CheckoutSuccess({ClientData}) {


  const toast = useToast();
  const router = useRouter();

  const getClientTemplateID = async (courseTitle) => {
    let ID = '';

    if(courseTitle === courses[0].title){
      ID = process.env.NEXT_PUBLIC_emailjs_ap_bl_template;
    }
    else if(courseTitle === courses[1].title){
      ID = process.env.NEXT_PUBLIC_emailjs_ap_bl_template;
    }
    else if(courseTitle === courses[2].title){
      ID = process.env.NEXT_PUBLIC_emailjs_bls_bl_template;
    }
    else if(courseTitle === courses[3].title){
      ID = process.env.NEXT_PUBLIC_emailjs_bls_bl_template;
    }
    else if(courseTitle === courses[4].title){
      ID = process.env.NEXT_PUBLIC_emailjs_instructor_template;
    }
    else if(courseTitle === courses[5].title){
      ID = process.env.NEXT_PUBLIC_emailjs_skills_secession_template;
    }
    else if(courseTitle === courses[6].title){
      ID = process.env.NEXT_PUBLIC_emailjs_skills_secession_template;
    }
    else if(courseTitle === courses[7].title){
      ID = process.env.NEXT_PUBLIC_emailjs_skills_secession_template;
    }
    else if(courseTitle === courses[8].title){
      ID = process.env.NEXT_PUBLIC_emailjs_skills_secession_template;
    }
    return ID;
  }


    useEffect(() => {

      const sendEmail = async () => {
        const ClientTemplateID = await getClientTemplateID(ClientData.data.course);
    
        var templateParams = {
          firstName: ClientData.data.firstName,
          lastName: ClientData.data.lastName,
          phoneNumber: ClientData.data.phoneNumber,
          Email: ClientData.data.Email,
          price: ClientData.data.price,
          course: ClientData.data.course,
          DTL: ClientData.data.DTL,
        };
    
        try {
          const result1 = await emailjs.send(
            process.env.NEXT_PUBLIC_emailjs_service_id,
            process.env.NEXT_PUBLIC_emailjs_templateID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY
          );
    
          const result2 = await emailjs.send(
            process.env.NEXT_PUBLIC_emailjs_service_id,
            ClientTemplateID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY
          );
          // Do something with result1 and result2
        } catch (error) {
          toast({
            title: 'There was a tiny Error sending your email, Trying again now. (refresh to try again)',
            status: 'warning',
            isClosable: true,
            duration: null,
          });
          setTimeout(() => {
            router.reload();
          }, 3000);
        }
      };

      sendEmail();

    }, []);



    
    
  return (
 
    <>
      <Head>
        <title>Checkout Success </title>
      </Head>


      <Flex h='fit-content' pt='70px' pb='400px' w='100%' bgColor={'#121212'} justify={'center'} align={'center'} direction={'column'} gap='10px'>

        <Fade delay={0} > 
          <Image src='success.png' alt='success' w={{base:"80px", sm:"100px", md:"120px" }} mx='auto' />
        </Fade>

        <Fade delay={100} bottom> 
        <Text textAlign={'center'} fontSize={{base:"26px", sm:"32px", md:"40px" }} color='white' fontWeight={700} 
            w='100%' letterSpacing={'1px'} maxW={'700px'} mx='auto'
        >
          Thank You!
        </Text>
        </Fade>

        <Fade delay={200} bottom> 
        <Text textAlign={'center'} fontSize={{base:"16px", sm:"18px", md:"20px" }} color='white' fontWeight={700} 
            w='85%' letterSpacing={'1px'} maxW={'700px'} mx='auto'
        >
            <span style={{color:'#FFD700'}}>{ClientData.data.firstName} {ClientData.data.lastName}</span>, you have just purchased the course ❝
            <span style={{color:'#45ced6'}}>{ClientData.data.course}</span>❞ for <span style={{color:'#FFD700'}}>${ClientData.data.price}.00 </span> 
            <span style={{color:'#45ced6'}}>Successfully</span>.
        </Text>
        </Fade>

        <Fade delay={300} bottom> 
          <Flex w='85%' direction={'row'} bgColor={'rgba(49, 89, 89,0.2)'} p='10px' gap='5px' borderRadius={'15px'} justify={'center'} align={'center'} mx='auto' >
            <Icon as={FcShipped} fontSize={{base:"20px", sm:"22px", md:"24px" }} />
            <Text fontSize={{base:"12px", sm:"14px", md:"16px" }} color='#45ced6' fontWeight={600} letterSpacing={'0.5px'} textAlign={'center'}>
              A Confirmation Message of your purchase will be sent directly to your email address.
            </Text>
            <Icon as={FcShipped} fontSize={{base:"20px", sm:"22px", md:"24px" }} />
          </Flex> 
        </Fade>

      </Flex>


    </>
  )
}

export default CheckoutSuccess


export async function getServerSideProps(context) {
    //console.log(context.query.token)

    try {
        const decodedData = jwt.verify(context.query.token, process.env.NEXT_PUBLIC_TOKEN_SECRETKEY);
        return{
            props:{
                ClientData: decodedData
            }
        }
    } catch (error) {
        return{
            notFound: true
        }
    }
 
}
