import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Resume from '../../resources/TutsOfficialResume.pdf';
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
              <i className="fas fa-times"></i>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <UnorderedList listStyleType="none">
                <RouterLink to="/" style={{ textDecoration: 'none' }}>
                  <ListItem mb="1.5rem" cursor="pointer" onClick={onClose}>
                    <Link color="rgb(93, 231, 180)" textDecoration="none">
                      01.
                    </Link>
                    <Link
                      href="#nav"
                      fontWeight="600"
                      ml=".3rem"
                      color="rgb(205, 213, 234)"
                      textDecoration="none"
                    >
                      Home
                    </Link>
                  </ListItem>
                </RouterLink>
                <RouterLink to="projects" style={{ textDecoration: 'none' }}>
                  <ListItem mb="1.5rem" cursor="pointer" onClick={onClose}>
                    <Link
                      href="#projects"
                      color="rgb(93, 231, 180)"
                      textDecoration="none"
                    >
                      02.
                    </Link>
                    <Link
                      href="#projects"
                      fontWeight="600"
                      ml=".3rem"
                      color="rgb(205, 213, 234)"
                      cursor="pointer"
                      textDecoration="none"
                    >
                      Projects
                    </Link>
                  </ListItem>
                </RouterLink>
                <RouterLink to="contact" style={{ textDecoration: 'none' }}>
                  <ListItem mb="1.5rem" cursor="pointer" onClick={onClose}>
                    <Link
                      href="#contact"
                      color="rgb(93, 231, 180)"
                      textDecoration="none"
                    >
                      03.
                    </Link>
                    <Link
                      href="#contact"
                      fontWeight="600"
                      ml=".3rem"
                      color="rgb(205, 213, 234)"
                      textDecoration="none"
                    >
                      Contact
                    </Link>
                  </ListItem>
                </RouterLink>
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
                  <Link
                    color="rgb(93, 231, 180)"
                    textDecoration="none"
                    target="_blank"
                    href={Resume}
                  >
                    Resume
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Hamburger;
