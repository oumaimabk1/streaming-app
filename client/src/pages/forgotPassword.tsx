import { useEffect, useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Text,
    FormControl,
    FormHelperText,
    Link,
    InputRightElement,
    CircularProgress
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link as L } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaBack = chakra(AiOutlineArrowLeft);

const ForgotPassword = (props: any) => {

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >

                <Heading color="black.400">FORGOT PASSWORD ?</Heading>
                <Text fontSize='xl'>No worries, we'll send you reset instructions </Text>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="email address"
                                    />
                                </InputGroup>
                            </FormControl>

                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Reset password
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                <Link color="teal.500">
                    <L to="/login">
                    <CFaBack  color='gray.300'/>
                        Back to login
                    </L>
                </Link>
            </Box>
        </Flex>
    );
};


export default ForgotPassword;
