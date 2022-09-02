import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean; 
}

export function Profile ({ showProfileData = true } : ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Subject One</Text>
          <Text color="gray.300" fontSize="small">
            subject1@yahoo.com.br
          </Text>
        </Box>
      )}
      
      <Avatar size="md" name="Subject One" />
    </Flex>
  );
}