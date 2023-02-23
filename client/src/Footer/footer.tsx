import { Box, Flex, Text,useColorModeValue } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface FooterProps {
companyName: string;
creators: string[];
}

const Footer = ({ companyName, creators }: FooterProps): ReactElement => (
<Box
    as="footer"
    py={4}
    bg="transparent"
    borderTopWidth={1}
    borderTopColor="#1B202B"
  >

<Flex align="center" justify="center" flexDirection="column">

<Text color={useColorModeValue('gray.800',"whiteAlpha.900")} fontSize="sm">
&copy; {new Date().getFullYear()} {companyName} - Made with love by {creators.join(', ')}
</Text>
</Flex>

</Box>
);

export default Footer;