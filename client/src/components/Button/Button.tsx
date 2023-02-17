import { Button as ChButton } from '@chakra-ui/react'

type ButtonProps = {
    btnText: string
 }
const Button = ({btnText}: ButtonProps ) => {

    return (
        <ChButton colorScheme='teal'>{btnText}</ChButton>
    );
};


export default Button;
