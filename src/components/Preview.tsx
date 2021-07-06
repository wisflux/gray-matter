import React from "react";
import { Rnd } from "react-rnd";
import { Box, Input, InputGroup } from "@chakra-ui/react";
import { SmallCloseIcon } from '@chakra-ui/icons'

interface Preview {
  default: {
    height: number | string;
    width: number | string;
    x: number;
    y: number;
  };

  url: string;
  key?: any;
  handleLoad?: (e: any) => any;
}

export const Preview: React.FC<Preview> = ({
  url,
  default: { height, width, x, y },
  handleLoad,
  key,
}) => {
  return (
    <Rnd
      key={key}
      default={{
        height,
        width,
        x,
        y,
      }}
      style={{ backgroundColor: "white" }}
    >
      <Box w="full" h="full" position="relative">
        <Box
          position="absolute"
          top="-3rem"
          w="full"
          height="3rem"
          display='flex'
          backgroundColor="gray.100"
          borderTopRightRadius="1rem"
          borderTopLeftRadius="1rem"
          p={3}
        >
          <InputGroup display='grid' gridTemplateColumns='repeat(3, minmax(0, 1fr))' justifySelf='flex-end' gridGap='' w='8%'>
            <Input backgroundColor='white' height='full' borderRadius='0.1rem' />
            <SmallCloseIcon color='black' height='full' justifySelf='center' borderRadius='0.1rem' />
            <Input backgroundColor='white' height='full' borderRadius='0.1rem' />
          </InputGroup>
        </Box>
        <iframe
          width="100%"
          height="100%"
          src={url}
          title={`preview-${width}x${height}`}
          onLoad={handleLoad}
        ></iframe>
      </Box>
    </Rnd>
  );
};
