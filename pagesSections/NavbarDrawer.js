import {Box, Flex, Text, Stack, Icon, Drawer, DrawerContent, DrawerOverlay, DrawerCloseButton} from '@chakra-ui/react';
import {AiFillHome} from 'react-icons/ai'
import { FaGraduationCap, FaInfoCircle} from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router';


function NavbarDrawer({isOpen, onClose, DrawerBtnRef}) {

  const { pathname } = useRouter();

  const drawer_links = [
    {text: "Home" , icon: AiFillHome , href: "/"},
    {text: "Courses Explanation" , icon: FaGraduationCap , href: "/#"}, 
    {text: "About Me" , icon: FaInfoCircle , href: "/aboutme"},
  ]


  return (
    <Drawer isOpen={isOpen}  placement='left' display={{base:"block", sm:"block",md:"block",lg:"none", xl: "none"}} 
        onClose={onClose} finalFocusRef={DrawerBtnRef} position='absolute' 
      >
        <DrawerOverlay display={{base:"block", sm:"block",md:"block",lg:"none", xl: "none"}}   />

        <DrawerContent display={{base:"block", sm:"block",md:"block",lg:"none", xl: "none"}} bgColor={'#151515'} >

          <DrawerCloseButton position={"absolute"} userSelect='none' border={'none'} outline='none' color='#EBF0F3' top="15px" right="15px" />
          
          <Stack py="20px" spacing='15px' mt={50} flexDirection='column' align={'center'} justify={'center'} >

            {drawer_links.map((navItem , index) => (
            <Box 
              key={index} bgColor={pathname == navItem.href ? 'rgba(252, 245, 220,0.1)' : 'transparent' } 
              borderRadius='50px' 
              w='90%'
              _hover={{bgColor:'rgba(252, 245, 220,0.1)', color:'#45ced6'}} 
              color={pathname == navItem.href ? '#45ced6' : '#EBF0F3' } 
              className="animate__animated animate__fadeInUp" 
              style={{animationDelay: index * 150+'ms' }}

            >
              <Link href={navItem.href} onClick={() => onClose()} > 
                <Flex 
                  align={'center'} py={1} px={3} justify='left' transitionDuration='0.3s' 
                  fontWeight={500} borderRadius='50px' 
                >
                  <Icon as={navItem.icon} fontSize={{base:"16px", sm:"18px", md:"20px" }} />
                  <Text pl='8px' fontSize={{base:"14px", sm:"15px", md:"16px" }} >{navItem.text}</Text>
                </Flex>
              </Link>
            </Box>      
            ))}
          
          </Stack>
          
        </DrawerContent>

    </Drawer>
  )
}

export default NavbarDrawer