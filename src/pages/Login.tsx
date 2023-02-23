import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    Avatar,
    FormControl,
    FormHelperText,
    Link,
    InputRightElement,
    CircularProgress,
    useColorModeValue,
    useToast
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link as L } from "react-router-dom";
import { login } from "../redux/actions/loginActions";
import { useNavigate } from 'react-router-dom';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const loading: any = useSelector((state: any): Boolean => state.login.loading);
    const error = useSelector((state: any) => state.login.error);
    const toast = useToast()
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        try {
            await dispatch(login(email, password));
            toast({
              title: 'You are logged in.',
              description: "Welcome.",
              status: 'success',
              duration: 3000,
              isClosable: true,
              onCloseComplete: () => {
                navigate('/Home'); // Navigate to the login page after the toast is closed
              },
            })
        } catch (error) {
            console.error(error);
            toast({
              title: 'Something went wrong please retry.',
              status: 'error',
              duration: 5000,
              isClosable: true,
            })
        }
    };

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            bg={useColorModeValue('white', 'gray.800')}
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form >
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor={useColorModeValue("whiteAlpha.900", 'gray.800')}
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email"
                                        id="email"
                                        value={email}
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)} />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>

                                <FormHelperText textAlign="right">
                                    <Link color="gray.500">
                                        <L to='/forgotPassword'>forgot password?</L>
                                    </Link>
                                </FormHelperText>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                disabled={loading}
                                onClick={handleSubmit}
                            >
                                Login
                                {loading && (<CircularProgress size={30} color='secondary' />)}

                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                New to us?{" "}

                <Link color="teal.500">
                    <L to="/">
                        Sign Up
                    </L>
                </Link>


            </Box>
        </Flex>
    );
};

export default Login;

