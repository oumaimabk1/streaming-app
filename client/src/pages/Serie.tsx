import { SimpleGrid, Flex, Button ,Card} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import FilterComponent from "../components/filtermovies";
import FilterSerieComponent from "../components/filterseries";
import ProductAddToCart from "../components/MovieCard";
import MovieCard from "../components/MovieCard";
import { clearSERIESData, fetchSERIESData } from "../redux/actions/seriesActions";
import { movieTypes } from "../redux/types";

const Serie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    dispatch(clearSERIESData());
  }, [location]);
  const displaytvs =(page:any,name: string = "", genre_ids: any[] = [])=>{
    console.log('de serie',name)
    dispatch(fetchSERIESData(page,10,name,genre_ids));
  }
  const serieData = useSelector((state: any) => state.seriesData.serieData) as any[];
  console.log(serieData);
  useEffect(() => {
    displaytvs(page);
    if(serieData){
      setIsLoading(false)
    }
  }, [page,dispatch]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
 
  return (
    <>
    {!isLoading ?
    <Flex m={4} justifyContent="space-between" flexWrap="wrap">
      <Card borderRadius='5px' w={{ base: "100%", md: "30%" }} position={{ base: "initial", md: "sticky" }} top={{ base: "initial", md: "0" }}>
        <FilterSerieComponent page={page} onclick={displaytvs}/>
      </Card>

      <SimpleGrid columns={[1, 2, 3]} spacing="1" w={{ base: "100%", md: "70%" }}>
        {serieData.map((el: movieTypes, index: number) => {
          return <MovieCard key={index} data={el} click={function (id: any): void {
            navigate(`/Serie/${id}`);
          } } />;
        })}
        <Button onClick={handleLoadMore}>Load more series</Button>
      </SimpleGrid>
    </Flex>
   : <>Series loading ....</>}
   </>
  );
};

export default Serie;


