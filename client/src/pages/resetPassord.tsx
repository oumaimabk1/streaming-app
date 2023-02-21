//https://api.themoviedb.org/3/movie/popular?api_key=6cc1df6659017d51dec12febc2690279&language=en-US&page=1

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
    useColorModeValue,
    FormControl,
    useToast} from "@chakra-ui/react";
    import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link as L ,useNavigate,useParams} from "react-router-dom";
import { updatePasswordEmail } from "../redux/actions/resetPasswordAction";


const CFaUserAlt = chakra(FaUserAlt);
const CFaBack = chakra(AiOutlineArrowLeft);

const ResetPassword = (props: any) => {
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const toast = useToast()
    const navigate = useNavigate();
    const { token } = useParams();
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        try {
            await dispatch(updatePasswordEmail(password, token));
            toast({
              title: 'Password updated.',
              description: "You can Loggin.",
              status: 'success',
              duration: 3000,
              isClosable: true,
              onCloseComplete: () => {
                navigate('/Login'); // Navigate to the login page after the toast is closed
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
            backgroundColor={useColorModeValue("gray.200", 'gray.800')}
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
               
            >
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
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
                                    <Input type="password" placeholder="new password" value={password}  onChange={(e) => setPassword(e.target.value)}
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="password" placeholder="confirm new password"
                                    />
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                onClick={handleSubmit}
                            >
                                Save password
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
            <Flex alignItems={'center'}>
                        <CFaBack color="teal.500" mr={2} />
                        <L to="/login">
                            Back to login
                        </L>
                    </Flex>
            </Box>
        </Flex>
    );
};


export default ResetPassword;
