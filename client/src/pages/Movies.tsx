import {Flex} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { fetchMOVIEData } from "../redux/actions/moviesActions";
import { movieTypes } from "../redux/types";

// Step 3: Create a React component that will connect to the store and render the API data
const MovieComponent = () => {
    const movieData = useSelector((state: any) => state.moviesData.movieData);
    console.log(movieData)
    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
           {movieData.map((el:movieTypes,index:number)=>{
            <MovieCard key={index} data={el} />
           })}
        </Flex>
    );
  };
  
  // Step 4: Dispatch the API request action when the component mounts
  const Movies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchMOVIEData(1));
    }, []);
    return <MovieComponent />;
  };
  
  export default Movies;