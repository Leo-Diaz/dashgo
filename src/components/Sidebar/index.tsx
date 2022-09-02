import { Box, Drawer, DrawerOverlay, useBreakpointValue, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext';

import { SideBarNav } from './SideBarNav';

export function Sidebar() {
  const {isOpen, onClose} = useSideBarDrawer()


  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if(isDrawerSidebar) {
    return(
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader> Navigation </DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return(
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}