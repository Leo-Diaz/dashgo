import { Flex, Text, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router';


export default function Forms() {
  const router = useRouter()

  function returnToDashboard(){
    return(router.push('/dashboard'))
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDir="column"
    > 
      <Text
        fontSize="4xl"
        fontWeight="bold"
        letterSpacing="tight"
        color="gray.100"
        w="35"
      >
       🚧 This page is still under development... ok, maybe not 🚧 
      </Text>

      <Button 
          type="submit"
          mt="6"
          colorScheme="yellow"
          size="lg"
          onClick={returnToDashboard}
        >
          Return to dashboard
        </Button>
    </Flex>
  );
}