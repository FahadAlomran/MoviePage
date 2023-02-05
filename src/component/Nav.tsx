import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

//

function Nav() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Box as="section">
        <Box as="nav" h={20} bg="red.700" boxShadow="md">
          {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? 'Dark' : 'Light'}
             </Button> */}

          <ButtonGroup pl={5} spacing="2">
          <Link to="/">
          <Button variant="ghost" fontSize={20}>
            Home
            </Button>
            </Link>

            <Link to="/Movie">
              {" "}
              <Button variant="ghost" fontSize={20}>
                {" "}
                Movie
              </Button>
            </Link>
            <Link to="/TvShow">       
            <Button variant="ghost" fontSize={20}>
            Tv-Show
            </Button>
            </Link>
          </ButtonGroup>
        </Box>
      </Box>
    </div>
  );
}

export default Nav;
