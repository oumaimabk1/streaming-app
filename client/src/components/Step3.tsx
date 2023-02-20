import { Button, chakra, Flex, FormControl, Input, InputGroup, InputLeftElement, Stack ,useColorModeValue} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);


export const Step3 = ({ formData, handleChange, handleSubmit, handleBack }: any) => {

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

