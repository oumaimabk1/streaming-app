
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  CircularProgress,
  CircularProgressLabel
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf, BsHeartFill, BsHeart } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { movieTypes } from '../redux/types';

interface MovieCardProps {
  data: movieTypes;
}
interface RatingProps {
  rating: number;
}
function Rating({ rating }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}

    </Box>
  );
}

function MovieCard({ data }: MovieCardProps) {
  const [liked, setLiked] = useState(false);
  return (

    <Box
      bg={useColorModeValue('white', 'gray.800')}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      m={1}
      position="relative">


      <CircularProgress value={data.vote_average * 10} color='green.400' position="absolute"
        bottom={65}
        left={2}
        thickness='4px'>
        <CircularProgressLabel>{data.vote_average}</CircularProgressLabel>
      </CircularProgress>
      <Image
        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        alt={`Picture of ${data.title}`}
        roundedTop="lg"
      />

      <Box mt="6" >
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            p={4}
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated>
            {data.title}
          </Box>
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
        </Flex>
      </Box>

    </Box>

  );
}

export default MovieCard;
