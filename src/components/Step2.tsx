import { Button, chakra, Flex, FormControl, Input, InputGroup, InputLeftElement, Stack ,useColorModeValue} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);


export const Step2 = ({ formData, handleChange,handleBack, handleNext }: any) => {

  return (
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
            onClick={handleBack}
          >
            Back
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