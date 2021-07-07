import { AddIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export interface Toolbar {
    onAdd: () => any;
}

export const Toolbar: React.FC<Toolbar> = (props) => {
    return <Flex flexDirection="row" p={2} zIndex='sticky' overflow='none'>
    <IconButton aria-label="add new screen" justifySelf="flex-start">
      <AddIcon w={6} h={6} onClick={() => props.onAdd()}></AddIcon>
    </IconButton>
    <ColorModeSwitcher justifySelf="flex-end"></ColorModeSwitcher>
  </Flex>
}