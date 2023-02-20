import {
    Radio, RadioGroup,
    Heading,
    Card, Stack, CardBody, CardFooter
} from '@chakra-ui/react'
import React from 'react';

function FilterComponent() {
    const [value, setValue] = React.useState('1')
    return (
        <Card m={4} borderRadius='5px' height={'auto'}>
            <CardBody>
                <Heading>Choose Category</Heading>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack>
                        <Radio value='1'>First</Radio>
                        <Radio value='2'>Second</Radio>
                        <Radio value='3'>Third</Radio>
                    </Stack>
                </RadioGroup>
            </CardBody>
        </Card>


    );
}

export default FilterComponent;
