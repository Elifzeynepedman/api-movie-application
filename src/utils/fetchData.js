
export const movieOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c5a7ab5f95msh845da280d92cefep1d5b7ejsnc1b0bec25732',
        'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com'
  }
  };
  



export const fetchData =async (url, options) => {
        const response=await fetch(url, options);
        const data= await response.json();
        return data;
}