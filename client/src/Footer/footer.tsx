import { Box, Flex, Text } from '@chakra-ui/react';
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
    borderTopColor="black"
  >

<Flex align="center" justify="center" flexDirection="column">

<Text color="white" fontSize="sm">
&copy; {new Date().getFullYear()} {companyName} - Made with love by {creators.join(', ')}
</Text>
</Flex>

</Box>
);

export default Footer;