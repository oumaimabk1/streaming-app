import { Button as ChButton } from '@chakra-ui/react'

type ButtonProps = {
    btnText: string
    isActive?: boolean
 }
const Button = ({btnText, isActive }: ButtonProps ) => {

    return (
        <ChButton colorScheme='teal' variant={isActive ? "solid" : "outline"}>{btnText}</ChButton>
    );
};


export default Button;


// variant={isActive ? "solid" : "ghost"}