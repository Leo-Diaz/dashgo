import { Flex, Button, Stack, Text } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input'
import { useRouter } from 'next/router';


type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Field "E-mail" is required').email('E-mail must be a valid email address'),
  password: yup.string().required('Field "Password" is required'),
})

export default function SignIn() {
  const router = useRouter()
  
  const { register, handleSubmit, formState } = useForm({
    resolver : yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn : SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    router.push('/dashboard')
  }

  return(
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      flexDir="column"
    > 
      <Text
        fontSize="5xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="35"
      >
        dashgo
        <Text as="span" color="pink.500">.</Text>
      </Text>

      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        mt="4"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="E-mail" 
            error={errors.email} 
            {...register('email')} 
          />

          <Input 
            name="password" 
            type="password" 
            label="Password" 
            error={errors.password} 
            {...register('password')} 
          />
        </Stack>

        <Button 
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
          onSubmit={handleSubmit(handleSignIn)}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
