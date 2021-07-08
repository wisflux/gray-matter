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
  const defaultPreviewState = { width: 1240, height: 700, x: 100, y: 100 };
  const url = "https://dev-site1.indepreneur.io/";
  const [previews, setPreviews] = React.useState([
    <Preview
      onClose={() => handleClose(0)}
      default={defaultPreviewState}
      url={url}
    />,
  ]);

  const handleClose = (index: number) => {
    const previewCopy = [...previews];
    previewCopy.splice(index, 1);
    setPreviews(previewCopy);
  };

  const handleAdd = () =>
    setPreviews(
      previews.concat(
        <Preview
          onClose={() => handleClose(previews.length)}
          default={defaultPreviewState}
          url={url}
        />
      )
    );

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" width="100vw" height="" flex={2}>
        <Toolbar onAdd={handleAdd} />
        <Box height="full" width="full">
          {previews}
        </Box>
      </Box>
    </ChakraProvider>
  );
};
