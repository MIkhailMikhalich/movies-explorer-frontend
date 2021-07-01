class MoviesApi {
    constructor(options) {
      this._url = options.url;
      this._headers = options.headers;
    }
    getMovies() {
        return fetch(`${this._url}`, { }).then((res) => {
          if (res.ok) {
            return res.json();
          }
    
          return Promise.reject(`Ошибка: ${res.status}`);
        });
      }
     
}
const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;
