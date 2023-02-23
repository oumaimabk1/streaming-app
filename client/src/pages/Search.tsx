import { Flex } from "@chakra-ui/react";
import { HStack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

import Button from "../components/Button/Button"

export const Search = () => {

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            bg="WhiteAlpha 800"
            alignItems="center"
        >
            
            <HStack
                margin="4"
            >
                <Button isActive={true} btnText="Movies"  />
                <Button isActive={true} btnText="TV"  />
                <Button isActive={true} btnText="Actors"  />
                <Button isActive={true} btnText="Directors"  />
                <Button isActive={true} btnText="Genres"  />
            </HStack>

            <Input
              variant="outline"
              borderColor="gray.500"
              borderWidth="1.6px"
              placeholder="Search"
              width="85%"
            />



        </Flex>
    );
};
