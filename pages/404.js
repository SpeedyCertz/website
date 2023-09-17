
import { Box ,Flex, Image} from "@chakra-ui/react"
import Head from 'next/head'

export default function Custom404() {

    return(
      <> 
      <Head>
        <title>Page not found</title>
      </Head>
      <Flex h={"100vh"} w="100%" bgColor={'gray.50'}
         align='center' justify={'center'}  pb='100px'
      >
        <Box>
          <Image alt="empty" src="/404.png" width={{base:"70%", sm:"350px", md:"450px"}} mx={"auto"}  />
        </Box>
      </Flex>
      </>
    ) 
}