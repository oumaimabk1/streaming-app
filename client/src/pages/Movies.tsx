import { SimpleGrid, Flex, Button ,Card} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import FilterComponent from "../components/filter";
import ProductAddToCart from "../components/MovieCard";
import MovieCard from "../components/MovieCard";
import { clearMovieData, fetchMOVIEData } from "../redux/actions/moviesActions";
import { movieTypes } from "../redux/types";

const Movies = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(clearMovieData());
  }, [location]);
  const displayfilms =(page:any,title: string = "", genre_ids: any[] = [])=>{
    console.log('de film',title)

    dispatch(fetchMOVIEData(page,10,title,genre_ids));
  }
  useEffect(() => {
    displayfilms(page)
  }, [page,dispatch]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const movieData = useSelector((state: any) => state.moviesData.movieData) as any[];
  console.log(movieData);
  return (
    <Flex m={4} justifyContent="space-between" flexWrap="wrap">
      <Card borderRadius='5px' w={{ base: "100%", md: "30%" }} position={{ base: "initial", md: "sticky" }} top={{ base: "initial", md: "0" }}>
        <FilterComponent page={page} onclick={displayfilms}/>
      </Card>

      <SimpleGrid columns={[1, 2, 3]} spacing="1" w={{ base: "100%", md: "70%" }}>
        {movieData.map((el: movieTypes, index: number) => {
          return <MovieCard key={index} data={el} />;
        })}
     
        <Button onClick={handleLoadMore}>Load more movies</Button>
        
        
      </SimpleGrid>
    </Flex>
  );
};

export default Movies;


