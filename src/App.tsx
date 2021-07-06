import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { Preview } from "./components/Preview";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl" width="100vw" height="100vh" flex={2} overflow="scroll">
      <Flex flexDirection="row" p={2}>
        <IconButton aria-label="add new screen" justifySelf="flex-start">
          <AddIcon w={6} h={6}></AddIcon>
        </IconButton>
        <ColorModeSwitcher justifySelf="flex-end"></ColorModeSwitcher>
      </Flex>
      <Box height='full' width='full'>
        <Preview default={{width: '1240', height: '700', x: 100, y: 100}}  url='https://dev-site1.indepreneur.io/' />
      </Box>
    </Box>
  </ChakraProvider>
);
