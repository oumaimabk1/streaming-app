import { SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductAddToCart from "../components/MovieCard";
import MovieCard from "../components/MovieCard";
import { fetchMOVIEData } from "../redux/actions/moviesActions";
import { movieTypes } from "../redux/types";

// Step 3: Create a React component that will connect to the store and render the API data
const MovieComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMOVIEData(1));
  }, []);
  const movieData = useSelector((state: any) => state.moviesData.movieData);
  console.log(movieData)
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="1">
      {movieData && movieData.map((el: movieTypes, index: number) => {
        <ProductAddToCart  key={index}/>
      })}
    </SimpleGrid>
  );
};

// Step 4: Dispatch the API request action when the component mounts
const Movies = () => {
  return <MovieComponent />;
};

export default Movies;