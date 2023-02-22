import { SimpleGrid, Center, Button ,Card} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import FilterComponent from "../components/filtermovies";
import ProductAddToCart from "../components/MovieCard";
import MovieCard from "../components/MovieCard";
import { clearMovieData, fetchMOVIEData } from "../redux/actions/moviesActions";
import { movieTypes } from "../redux/types";

const FavoriteMovies = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(clearMovieData());
  }, [location]);
  useEffect(() => {
    dispatch(fetchMOVIEData(page));
  }, [page,dispatch]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const movieData = useSelector((state: any) => state.moviesData.movieData) as any[];
  console.log(movieData);
  return (
    <Center m={4} >
      <SimpleGrid columns={[1, 2, 3]} spacing="1" w={{ base: "100%", md: "70%" }}>
        {movieData.map((el: movieTypes, index: number) => {
          return <MovieCard key={index} data={el} click={function (e: any): void {
            throw new Error("Function not implemented.");
          } } />;
        })}
        <Button onClick={handleLoadMore}>Load more movies</Button>
      </SimpleGrid>
    </Center>
  );
};

export default FavoriteMovies;