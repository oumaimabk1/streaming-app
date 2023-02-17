import { Center, Flex } from "@chakra-ui/react";
import { HStack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

import Button from "../components/Button/Button"

export const Search = () => {

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            alignItems="center"
        >
            {/* Search */}
            
            <HStack
                margin="4"
            >
                <Button btnText="Movies"  />
                <Button btnText="TV"  />
                <Button btnText="People"  />
            </HStack>

            <Input
                alignItems="Center"
                variant="outline"
                placeholder="Search"
            />
            
        </Flex>
    );
};
