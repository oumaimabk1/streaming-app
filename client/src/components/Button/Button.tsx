import { Button as ChButton } from '@chakra-ui/react'

type ButtonProps = {
    btnText: string
    isActive?: boolean
 }
const Button = ({btnText, isActive }: ButtonProps ) => {

    return (
<<<<<<< Updated upstream
        <ChButton colorScheme='teal' variant={isActive ? "solid" : "ghost"}>{btnText}</ChButton>
=======
        <ChButton borderRadius="none" height="8" width="80%" margin="4" bgColor="teal" size="lg" colorScheme='black' variant={isActive ? "solid" : "ghost"}>{btnText}</ChButton>
>>>>>>> Stashed changes
    );
};


export default Button;


// variant={isActive ? "solid" : "ghost"}