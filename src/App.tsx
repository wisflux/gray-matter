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
import { Toolbar } from "./components/Toolbar";

export const App = () => {
  const defaultPreviewState = {width:1240, height: 700, x: 100, y: 100};
  const url = 'https://dev-site1.indepreneur.io/';
  const [previews, setPreviews] = React.useState([<Preview default={defaultPreviewState} url={url} />]);

  const handleAdd = () => setPreviews([...previews, <Preview default={defaultPreviewState} url={url} />])

  console.log(previews)

  return <ChakraProvider theme={theme}>
    <Box fontSize="xl" width="100vw" height="" flex={2}>
      <Toolbar onAdd={handleAdd} />
      <Box height='full' width='full'>
        {
          previews
        }
      </Box>
    </Box>
  </ChakraProvider>
}
