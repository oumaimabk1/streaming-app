import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    MenuList,
    IconButton,
    Button,
    Menu,
    MenuButton,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    MenuItem,
    MenuDivider,
    Text
} from '@chakra-ui/react';
import { FaSignOutAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { Link as L, Link } from 'react-router-dom'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
const Links = ['Home', 'Movies', 'Search'];

const NavLink = ({ children }: { children: any }) => (
    <Box px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}>
        <L to={children}>
            {children}
        </L>
    </Box>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box>Logo</Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link}>

                                {link}

                            </NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <Avatar
                                size={'sm'}
                                src={
                                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                }
                            />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                            <Link to="FavoriteMovies">
                                <Flex alignItems={'center'}>
                                    <AiFillHeart />
                                    <Text ml={2}>Favorites</Text>
                                </Flex>
                                </Link>
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem>
                                <Flex alignItems={'center'}>
                                    
                                    <FaSignOutAlt />
                                    <Text ml={2}>Logout</Text>
                                    
                                </Flex>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>


        </Box>
    );
}