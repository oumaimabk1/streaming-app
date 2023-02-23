import { useState } from 'react';
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
    Text,
    FormControl,
    useColorModeValue,
    useToast,
    Link
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link as L, useNavigate } from "react-router-dom";
import { sendResetPasswordEmail } from '../redux/actions/resetPasswordAction';

const CFaUserAlt = chakra(FaUserAlt);
const CFaBack = chakra(AiOutlineArrowLeft);

const ForgotPassword = (props: any) => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const toast = useToast()
    const navigate = useNavigate();
    const { loading, success, error }: any = useSelector((state: any) => state.passwordReducer);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await dispatch(sendResetPasswordEmail(email));
            toast({
                title: 'Email sent Successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
                onCloseComplete: () => {
                    navigate('/login'); // Navigate to the login page after the toast is closed
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

                <Heading color="black.400">FORGOT PASSWORD ?</Heading>
                <Text fontSize='xl'>No worries, we'll send you reset instructions </Text>
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
                                    <Input type="email" placeholder="email address" onChange={(e) => setEmail(e.target.value)}
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
                                Reset password
                            </Button>
                        </Stack>
                    </form>
                    {loading && <p>Sending reset password email...</p>}
                    {success && <p>Reset password email sent!</p>}
                    {error && <p>Error sending reset password email: {error.message}</p>}
                </Box>
            </Stack>
            <Box>
                <Link color="teal.500">
                    <Flex alignItems={'center'}>
                        <CFaBack color="teal.500" mr={2} />
                        <L to="/login">
                            Back to login
                        </L>
                    </Flex>
                </Link>
            </Box>
        </Flex>
    );
};


export default ForgotPassword;

