const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzliMGU0ZWU3ODhiNWNmYmMyZmVmNTJhOWMyMjA3NSIsInN1YiI6IjY0ZDk4YmMzYTEwNzRiMDBjN2QyYTlmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b42PkLurZqrcmn39GPSuLXhaAYIZnD4pNk9wcAMSdw4'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
    .then(response => response.json())
    .then(response => response.results)
    .then(response => console.log(response))
    .catch(err => console.error(err));