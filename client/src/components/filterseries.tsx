import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genre, genreseries } from '../redux/actions/searchActions';
import { clearMovieData, fetchMOVIEData } from '../redux/actions/moviesActions';

function FollowButton(props: any) {
    const { children, ...rest } = props;
    const isButtonSelected = rest.variant === "solid";
    const colorScheme = isButtonSelected ? "teal" : "gray";
    const color = isButtonSelected ? "white" : "black";
    return (
        <Button
            size="sm"
            colorScheme={colorScheme}
            color={color}
            {...rest}
            _active={{ transform: "teal" }}
            _focus={{ boxShadow: "none" }}
        >
            {children}
        </Button>
    );
}

function SearchBar(props: any) {
    const { onSearch, ...rest } = props;
    const colorScheme = useColorModeValue('teal', 'white');
    return (
        <InputGroup {...rest}>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input type="text" placeholder="Search" />

        </InputGroup>
    );
}
interface ChildComponentProps {
    onClick(): (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
function FilterSerieComponent(props:any) {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(genreseries());
    }, []);
    const genreData = useSelector((state: any) => state.genresseries.categories) as any[];

    const handleGenreSelection = (id: string) => {
        if (selectedGenres.includes(id)) {
            setSelectedGenres(selectedGenres.filter((genreId) => genreId !== id));
        } else {
            setSelectedGenres([...selectedGenres, id]);
        }
    };

    const handleSearch = () => {
        console.log('Selected genres:', selectedGenres);
        console.log('Search text:', searchText);
        dispatch(clearMovieData());
        props.onclick(1,searchText,selectedGenres)
        // Faire une recherche avec les catégories sélectionnées et le texte de recherche
    };

    return (
        <Box m={2} p={2}>
            <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={400} m={2}>
                Filtre
            </Heading>
            <Accordion>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            <FormLabel>Search serie</FormLabel>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box mt={4}>
                            <FormControl>
                                <SearchBar onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)} />
                            </FormControl>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                            <FormLabel>Select Categories</FormLabel>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box mt={4}>
                            <FormControl>
                                <Flex flexWrap={'wrap'}>
                                    {genreData &&
                                        genreData.map((el: any, i: number) => (
                                            <FollowButton
                                                key={el.id}
                                                onClick={() => handleGenreSelection(el.id)}
                                                variant={selectedGenres.includes(el.id) ? 'solid' : 'outline'}
                                                mt={2}
                                                mr={2}
                                                mb={2}
                                            >
                                                {el.name}
                                            </FollowButton>
                                        ))}
                                </Flex>
                            </FormControl>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            <Button colorScheme='teal' onClick={handleSearch}>
                Search
            </Button>
        </Box>
    );
}
export default FilterSerieComponent;
