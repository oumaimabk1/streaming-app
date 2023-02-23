import axios from "axios";

export const getVideo = async (id:any) =>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6cc1df6659017d51dec12febc2690279`);
    
    return response.data.results
}