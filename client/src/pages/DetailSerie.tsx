import {
    Flex,
    useColorModeValue,
    Box,
    Image,
    Text,
    CircularProgress,
    CircularProgressLabel,
    Button,
    Center
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getOnemovie } from "../redux/actions/moviesActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { AiFillCaretRight } from 'react-icons/ai'
import YouTube from 'react-youtube';
import { getTvShow, getVideo } from "../api/movieApi";
import { getOneSERIES } from "../redux/actions/seriesActions";

const Detailserie = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [trailer, setTrailer] = useState(null) as any;
    useEffect(() => {
        const fetchserie = async () => {
            setTrailer(await getTvShow(id))
        }
        if (id) {
            dispatch(getOneSERIES(id));
            fetchserie()
        }
    }, [id,dispatch]);

    const serieData = useSelector((state: any) => state.Oneserie.serieData);
    console.log(serieData)
    const onReady = (e: any) => {
        console.log(e.target);
    };
    const [liked, setLiked] = useState(false); return (
        
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            bg={useColorModeValue('white', 'gray.800')}
            background={`linear-gradient(0deg, rgba(0,0,0,1), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/original/${serieData.backdrop_path})`}
            backgroundSize="cover"
        >
          {serieData &&   <Flex m={20} justifyContent='space-between' alignItems='flex-start' flexWrap="wrap" >
                <Box flex="1 1 30%" m={3}>
                    <Image src={`https://image.tmdb.org/t/p/original/${serieData.poster_path}`} height="600px" />
                </Box>
                 <Box flex="2 1 60%" m={3}>
                    <Text textAlign='left' fontSize="4xl" fontWeight='bold'>{serieData.name}</Text>

                    <Flex mt={10}>
                        <CircularProgress mr={5} value={serieData.vote_average * 10} color='green.400'
                            thickness='10px'>
                            <CircularProgressLabel>{serieData.vote_average}</CircularProgressLabel>
                        </CircularProgress>
                        {serieData.genre_ids && serieData.genre_ids.map((el: any, i: number) => {
                            return <Flex
                                key={i}
                                backgroundColor="red"
                                color='white'
                                borderRadius={20}
                                m={1}
                                p={1}
                                alignItems="center"
                            >{el}</Flex>
                        })}
                    </Flex>
                    <Text mt={20} textAlign='left' fontSize="l">{serieData.overview}</Text>
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
            </Flex>}
            <Box ml={20} mr={20}>
                <Text>Video</Text>
                {trailer ?
                    <Center w={'100%'}>
                    <YouTube
                            videoId={trailer[0].key} // defaults -> null
                            onReady={onReady}
                        />
                  </Center>
                        
                     : <Text>
                        No video attached
                    </Text>}
                
            </Box>

        </Flex>
        
    )
}

export default Detailserie;