import { Box, Button, chakra, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

type Step2Props = {
  formData: {
    address: string
    city: string
    state: string
    zip: string
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
};

export const Step2 = ({ formData, handleChange, handleNext, handleBack }: any) => {

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
            <Input type="text" name="adress" placeholder='adress' value={formData.address} onChange={handleChange} />

          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<CFaUserAlt color="gray.300" />}
            />
            <Input type="text" name="city" placeholder="city" value={formData.city} onChange={handleChange} />

          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<CFaUserAlt color="gray.300" />}
            />
            <Input type="text" name="state" placeholder="state" value={formData.state} onChange={handleChange} />

          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<CFaUserAlt color="gray.300" />}
            />
            <Input type="text" name="zip" placeholder="zip" value={formData.zip} onChange={handleChange} />

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
            onClick={handleNext}
          >
            Next
          </Button>
          <Button
            borderRadius={3}
            variant="solid"
            colorScheme="teal"
            m={4}
            onClick={handleNext}
            width='full'
          >
            Next
          </Button>
        </Flex>
      </Stack>
    </form>

  );
};