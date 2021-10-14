import React from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  ListItem,
  Link,
  UnorderedList,
} from '@chakra-ui/react';

const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        bg="transparent"
        border="none"
        cursor="pointer"
        onClick={onOpen}
      >
        <i className="fas fa-bars"></i>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="rgba(255, 255, 255, 0.3)" onClick={onClose} />
        <DrawerContent>
          <DrawerHeader bg="rgb(29, 39, 66)">
            <Box
              position="absolute"
              top="30"
              right="37"
              cursor="pointer"
              onClick={onClose}
            >
              <i className="fas fa-times">{/* <DrawerCloseButton /> */}</i>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <UnorderedList listStyleType="none">
                <ListItem mb="1.5rem">
                  <Link color="rgb(93, 231, 180)">01.</Link>
                  <Link fontWeight="600" ml=".3rem" color="rgb(205, 213, 234)">
                    About
                  </Link>
                </ListItem>
                <ListItem mb="1.5rem">
                  <Link color="rgb(93, 231, 180)">02.</Link>
                  <Link fontWeight="600" ml=".3rem" color="rgb(205, 213, 234)">
                    Experience
                  </Link>
                </ListItem>
                <ListItem mb="1.5rem">
                  <Link color="rgb(93, 231, 180)">03.</Link>
                  <Link fontWeight="600" ml=".3rem" color="rgb(205, 213, 234)">
                    Contact
                  </Link>
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  padding=".7rem"
                  bg="rgb(29, 39, 66)"
                  border="1px solid rgb(93, 231, 180)"
                  borderRadius="2px"
                  cursor="pointer"
                  transition="all .3s"
                  _hover={{ filter: 'brightness(200%)' }}
                >
                  <Link color="rgb(93, 231, 180)">Resume</Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </DrawerHeader>

          {/* <DrawerBody bg="white">
            <Input placeholder="Type here..." />
          </DrawerBody> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Hamburger;
