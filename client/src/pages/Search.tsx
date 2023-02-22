import { Box, Center, Flex } from "@chakra-ui/react";
import { HStack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

import Button from "../components/Button/Button"

export const Search = () => {

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="#1B202B"
            alignItems="center"
        >
            
            <HStack
                margin="4"
            >
                <Button isActive={true} btnText="Movies"  />
                <Button isActive={false} btnText="TV"  />
                <Button isActive={false} btnText="People"  />
            </HStack>

            <Input
              variant="outline"
              borderColor="gray.100"
              borderWidth="1.6px"
              placeholder="Search"
              width="93%"
            />
            </Flex>
    );
};
