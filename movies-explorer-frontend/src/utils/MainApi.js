class MainApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }
  getProfile() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: {
        Authorization: `${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  getProfiles() {
    return fetch(`${this._url}users/`, {
      method: "GET",
      headers: {
        Authorization: `${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
     
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  setProfileData(name, email) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getProfileByID(ID) {
    return fetch(`${this._url}users/${ID}`, {
      method: "GET",
      headers: {
        Authorization: `${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  registerUser(password, email, name) {
    return fetch(`${this._url}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email, name }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  authorizeUser(password, email) {
    return fetch(`${this._url}signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getMovies() {
    return fetch(`${this._url}movies/`, {
      method: "GET",
      headers: {
        Authorization: `${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  deleteMovie(movieID) {
    return fetch(`${this._url}movies/${movieID}`, {
      method: "DELETE",
      headers: {
        Authorization: `${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
     
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  postMovie(data) {
    const url = `https://api.nomoreparties.co${data.image.url}`;
    return fetch(`${this._url}movies`, {
      method: "POST",
      headers: {
        Authorization: `${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      

      body: JSON.stringify({
        country: data.country|| "undef",
        director: data.director,
        duration: data.duration,
        description: data.description,
        image:  url,
        trailer: data.trailerLink,
        thumbnail: url,
        movieId: data.id,
        nameRU: data.nameRU || " ",
        nameEN: data.nameEN || " ",
        year: data.year,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  getAuthProfile(JWT) {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: {
        Authorization: `${JWT}`,
        "Content-Type": "application/json",
      },
      
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}
let jwt = localStorage.getItem("jwt");
const api = new MainApi({
  //url: "https://api.medvedmovies-explorer.nomoredomains.club/",
  url:"http://localhost:3001/",
  headers: {
    authorization: `${jwt}`,
    "Content-Type": "application/json",
  },
});

export default api;
