import { Avatar, Box, CircularProgress, CircularProgressLabel, Flex, Heading, Stack ,Link} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useHistory } from 'react-router-dom';
import { setFormData, submitForm } from '../redux/actions/formActions';
import { Link as L } from "react-router-dom";
import { Step1 } from '../components/Step1';
import { Step2 } from '../components/Step2';
import { Step3 } from '../components/Step3';

const RegistrationForm = () => {
    const dispatch = useDispatch();
    //const history = useHistory();

    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const formData = useSelector((state: any) => state.registration.formData);
   
    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleNext = () => {
        console.log(formData)
        setStep((prevStep) => prevStep + 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updatedFormData: any = { ...formData, [name]: value };
        dispatch(setFormData(updatedFormData));
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        event.preventDefault();
        try {
            await dispatch(submitForm(formData));;
            console.log('Form submitted successfully!');
        } catch (error) {
            console.error(error);
        }

        setIsLoading(false);
        //history.push('/success');
    };

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
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Register</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
           
            {step === 1 && <Step1 formData={formData} handleNext={handleNext} handleChange={handleChange} />}
            {step === 2 && <Step2 formData={formData} handleBack={handleBack} handleNext={handleNext} handleChange={handleChange} />}
            {step === 3 && <Step3 formData={formData} handleBack={handleBack} handleSubmit={handleSubmit} />}
            {isLoading && (
                <Flex position="fixed" top={0} left={0} right={0} bottom={0} alignItems="center" justifyContent="center">
                    <CircularProgress isIndeterminate color="blue.500" size="48px">
                        <CircularProgressLabel>Submitting</CircularProgressLabel>
                    </CircularProgress>
                </Flex>
            )}
        
        </Box>
      </Stack>
      <Box>
        already signed up?{" "}
        <L to='/login' >
          <Link color="teal.500">
          Login
          </Link>
          
        </L>
      </Box>
    </Flex>
    );
};

export default  RegistrationForm;