import { SimpleGrid,Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterComponent from "../components/filter";
import ProductAddToCart from "../components/MovieCard";
import MovieCard from "../components/MovieCard";
import { fetchMOVIEData } from "../redux/actions/moviesActions";
import { movieTypes } from "../redux/types";

// Step 3: Create a React component that will connect to the store and render the API data
const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMOVIEData(1));
  }, []);
  const movieData = useSelector((state: any) => state.moviesData.movieData);
  console.log(movieData)
  return (
    <Flex m={4} justifyContent='space-between'>
    <FilterComponent />
    <SimpleGrid columns={[1, 2, 3]} spacing="1">
      {movieData && movieData.map((el: movieTypes, index: number) => {
      return  <MovieCard  key={index} data={el}/>
      })}
    </SimpleGrid>
    </Flex>
  );
};


export default Movies;