import {
    Flex,
    useColorModeValue,
    Box,
    Image,
    Text,
    CircularProgress,
    CircularProgressLabel,
    Button
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getOnemovie, getVideomovie } from "../redux/actions/moviesActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { AiFillCaretRight } from 'react-icons/ai'
import YouTube from 'react-youtube';

const DetailMovie = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [trailer, setTrailer] = useState(null);

    console.log(id)
    useEffect(() => {
        if (id) {
            dispatch(getOnemovie(id));
            // dispatch(getVideomovie(id))
        }
    }, []);

    const movieData = useSelector((state: any) => state.moviesData.movieData);
    const onReady = (e: any) => {
        console.log(e.target);
    };
    const [liked, setLiked] = useState(false); return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            bg={useColorModeValue('white', 'gray.800')}
            background={`linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`}
            backgroundSize="cover"
        >
            <Flex m={20} justifyContent='space-between' alignItems='flex-start' flexWrap="wrap" >
                <Box flex="1 1 30%" m={3}>
                    <Image src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`} height="600px" />
                </Box>
                <Box flex="2 1 60%" m={3}>
                    <Text textAlign='left' fontSize="4xl" fontWeight='bold'>{movieData.title}</Text>

                    <Flex mt={10}>
                        <CircularProgress mr={5} value={movieData.vote_average * 10} color='green.400'
                            thickness='10px'>
                            <CircularProgressLabel>{movieData.vote_average}</CircularProgressLabel>
                        </CircularProgress>
                        {movieData.genre_ids && movieData.genre_ids.map((el: any, i: number) => {
                            return <Flex backgroundColor="red"
                                color='white'
                                borderRadius={20}
                                m={1}
                                p={1}
                                alignItems="center"
                            >Drama</Flex>
                        })}
                    </Flex>
                    <Text mt={20} textAlign='left' fontSize="l">{movieData.overview}</Text>
                    <Flex mt={10}>
                        <Flex
                            p={4}
                            alignItems="center"
                            justifyContent={'space-between'}
                            roundedBottom={'sm'}
                            cursor="pointer"
                            onClick={() => setLiked(!liked)}>
                            {liked ? (
                                <BsHeartFill fill="red" fontSize={'24px'} />
                            ) : (
                                <BsHeart fontSize={'24px'} />
                            )}
                        </Flex>
                        <Button backgroundColor="red"
                            color='white'
                            borderRadius={5}>
                            <Flex justifyContent={'space-around'} alignItems="center">
                                <AiFillCaretRight />
                                <Text>Watch now</Text>
                            </Flex>
                        </Button>
                    </Flex>

                </Box>
                <Box>
                    <Text>Video</Text>
                    {movieData.key ? <YouTube
                        videoId={movieData.key} // defaults -> null
                        onReady={onReady}
                    /> : <Text></Text> }
                    
                </Box>
            </Flex>
        </Flex>
    )
}

export default DetailMovie;