const API_KEY = Process.env.REACT_APP_API_KEY;

const requests ={
    // fetch("https://api.themoviedb.org/3/genre/movie?api_key=${API_KEY}&language=en")
    fetchAnimationMovies:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchDramaMovies:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchKidsMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10762`,
    fetchFamilieMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchTalk:`/discover/movie?api_key=${API_KEY}&with_genres=10767`,
    fetchWarMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10768`,

}