import { Button as ChButton } from '@chakra-ui/react'

type ButtonProps = {
    btnText: string
    isActive?: boolean
 }
const Buttons = ({btnText, isActive }: ButtonProps ) => {

    return (
        <ChButton borderRadius="none" height="8" width="80%" margin="4" bgColor="teal" size="lg" colorScheme='black' variant={isActive ? "solid" : "outline"}>{btnText}</ChButton>
    );
};


export default Buttons;


// variant={isActive ? "solid" : "ghost"}