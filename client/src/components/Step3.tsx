import { Box, Button, chakra, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

type Step2Props = {
  formData: {
    Cardname: string
    number: string
    date: string
    CVV: string
    
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
};

export const Step3 = ({ formData, handleChange, handleSubmit, handleBack }: any) => {

  return (
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
            <Input type="text" name="Cardname" placeholder='Name' value={formData.Cardname} onChange={handleChange} />

          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<CFaUserAlt color="gray.300" />}
            />
            <Input type="text" name="number" placeholder="number of card" value={formData.number} onChange={handleChange} />

          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<CFaUserAlt color="gray.300" />}
            />
            <Input type="text" name="date" placeholder="Expiration date" value={formData.date} onChange={handleChange} />

          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<CFaUserAlt color="gray.300" />}
            />
            <Input type="text" name="CVV" placeholder="CVV" value={formData.CVV} onChange={handleChange} />

          </InputGroup>
        </FormControl>
        
        <Flex>
          <Button
            borderRadius={3}
            type="submit"
            variant="solid"
            colorScheme="gray"
            width='full'
            m={4}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            borderRadius={3}
            variant="solid"
            colorScheme="teal"
            m={4}
            onClick={handleSubmit}
            width='full'
          >
            Submit
          </Button>
        </Flex>
      </Stack>
    </form>

  );
};

