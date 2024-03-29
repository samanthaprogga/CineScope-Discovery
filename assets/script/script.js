'use strict';

const customMovies = [
  {
    id: 1001,
    title: 'Jurassic Park',
    year: 1993,
    runningTime: '2h 7m',
    description: 'A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.',
    genre: ['Adventure', 'Action', 'Sci-Fi'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg'
  },
  {
    id: 1002,
    title: 'The Matrix',
    year: 1999,
    runningTime: '2h 16m',
    description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth - the life he knows is the elaborate deception of an evil cyber-intelligence.',
    genre: ['Action', 'Sci-Fi'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-matrix.jpg',
  },
  {
    id: 1003,
    title: 'Ocean\'s Eleven',
    year: 2001,
    runningTime: '1h 56m',
    description: 'Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.',
    genre: ['Crime', 'Thriller'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/oceans-eleven.jpg'
  },
  // Add other movie objects below
  {
    id: 1004,
    title: 'JFK',
    year: 1991,
    runningTime: '3h 26m',
    description: 'New Orleans District Attorney Jim Garrison discovers there\'s more to the Kennedy assassination than the official story.',
    genre: ['Drama', 'History', 'Thriller'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/jfk.jpg'
  },
  {
    id: 1005,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    runningTime: '2h 58m',
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-fellowship-of-the-ring.jpg'
  },
  {
    id: 1006,
    title: 'The Godfather',
    year: 1973,
    runningTime: '2h 55m',
    description: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
    genre: ['Crime', 'Drama'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-godfather.jpg'
  },
  {
    id: 1007,
    title: 'Rocky',
    year: 1976,
    runningTime: '2h',
    description: 'A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion in a bout in which he strives to go the distance for his self-respect.',
    genre: ['Drama', 'Sport'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/rocky.jpg'
  },
  {
    id: 1008,
    title: 'Terminator 2: Judgment Day',
    year: 1991,
    runningTime: '2h 17m',
    description: 'A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.',
    genre: ['Action', 'Sci-Fi'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/terminator-2-judgment-day.jpg'
  },
  {
    id: 1009,
    title: 'The Exorcist',
    year: 1973,
    runningTime: '2h 20m',
    description: 'When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.',
    genre: ['Horror'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-exorcist.jpg'
  },
  {
    id: 1010,
    title: 'My Cousin Vinny',
    year: 1992,
    runningTime: '2h',
    description: 'Two New Yorkers accused of murder in rural Alabama while on their way back to college call in the help of one of their cousins, a loudmouth lawyer with no trial experience.',
    genre: ['Comedy', 'Crime'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/my-cousin-vinny.jpg'
  },
  {
    id: 1011,
    title: 'The Lion King',
    year: 1994,
    runningTime: '1h 28m',
    description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
    genre: ['Animation', 'Adventure', 'Drama'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-lion-king.jpg'
  },
  {
    id: 1012,
    title: 'Gone in 60 Seconds',
    year: 2000,
    runningTime: '1h 58m',
    description: 'A retired master car thief must come back to the industry and steal fifty cars with his crew in one night to save his brother\'s life.',
    genre: ['Action', 'Crime', 'Thriller'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/gone-in-60-seconds.jpg'
  },
  {
    id: 1013,
    title: 'Titanic',
    year: 1999,
    runningTime: '3h 14m',
    description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    genre: ['Drama', 'Romance'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/titanic.jpg'
  },
  {
    id: 1014,
    title: 'Robocop',
    year: 1987,
    runningTime: '1h 42m',
    description: 'In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg haunted by submerged memories.',
    genre: ['Action', 'Crime', 'Sci-Fi'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/robocop.jpg'
  },
  {
    id: 1015,
    title: 'The Grand Budapest Hotel',
    year: 2014,
    runningTime: '1h 39m',
    description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel\'s glorious years under an exceptional concierge.',
    genre: ['Comedy', 'Adventure', 'Crime'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-grand-budapest-hotel.jpg'
  },
  {
    id: 1016,
    title: 'The Remains of the Day',
    year: 1993,
    runningTime: '2h 14m',
    description: 'A butler who sacrificed body and soul to service in the years leading up to World War II realizes too late how misguided his loyalty was to his lordly employer.',
    genre: ['Drama', 'Romance'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-remains-of-the-day.jpg'
  },
  {
    id: 1017,
    title: 'The Shining',
    year: 1980,
    runningTime: '2h 26m',
    description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
    genre: ['Drama', 'Horror'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-shining.jpg'
  },
  {
    id: 1018,
    title: 'Star Wars Episode III: Revenge of the Sith',
    year: 2005,
    runningTime: '2h 20m',
    description: 'Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.',
    genre: ['Action', 'Adventure', 'Fantasy'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/revenge-of-the-sith.jpg'
  },
  {
    id: 1019,
    title: 'The Fate of the Furious',
    year: 2017,
    runningTime: '2h 16m',
    description: 'When a mysterious woman seduces Dominic Toretto into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.',
    genre: ['Action', 'Crime', 'Thriller'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-fate-of-the-furious.jpg'
  },
  {
    id: 1020,
    title: 'Ferris Bueller\'s Day Off',
    year: 1986,
    runningTime: '1h 43m',
    description: 'A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.',
    genre: ['Comedy'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/ferris-buellers-day-off.jpg',
  },
  {
    id: 1021,
    title: 'No Time to Die',
    year: 2021,
    runningTime: '2h 43m',
    description: 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.',
    genre: ['Action', 'Adventure', 'Thriller'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/no-time-to-die.jpg'
  },
  {
    id: 1022,
    title: 'Spider-Man: No Way Home',
    year: 2021,
    runningTime: '2h 30m',
    description: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
    genre: ['Action', 'Adventure', 'Fantasy'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/spider-man-no-way-home.jpg'
  },
  {
    id: 1023,
    title: 'West Side Story',
    year: 2021,
    runningTime: '2h 36m',
    description: 'An adaptation of the 1957 musical, West Side Story explores forbidden love and the rivalry between the Jets and the Sharks, two teenage street gangs of different ethnic backgrounds.',
    genre: ['Musical', 'Drama'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/west-side-story.jpg',
  },
  {
    id: 1024,
    title: 'Avengers: Infinity War',
    year: 2018,
    runningTime: '2h 29m',
    description: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
    genre: ['Action', 'Adventure', 'Fantasy'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/avengers-infinity-war.jpg'
  },
  {
    id: 1025,
    title: 'The Batman',
    year: 2022,
    runningTime: '2h 59m',
    description: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
    genre: ['Action', 'Crime', 'Drama'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-batman.jpg',
  },
  {
    id: 1026,
    title: 'Back to the Future',
    year: 1985,
    runningTime: '1h 56m',
    description: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
    genre: ['Adventure', 'Comedy', 'Sci-fi'],
    poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/back-to-the-future.jpg',
  },
  // Additional movie objects...
];

function searchCustomMovies(searchTerm) {
  const matchingMovies = customMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const matchingTitles = matchingMovies.map(movie => movie.title);
  return matchingTitles.length > 5 ? matchingTitles.splice(0, 5) : matchingTitles;
}

function listCustomMovies(input) {
  if (input.length < 3) {
    matchedCustomMoviesDisplay.innerHTML = '';
    return;
  }

  matchedCustomMoviesDisplay.innerHTML = '';
  const occurences = searchCustomMovies(input);

  if (occurences.length > 0) {
    occurences.forEach(occurence => {
      const newLi = document.createElement('li');
      newLi.textContent = occurence;
      copyToInputOnClick(newLi);
      matchedCustomMoviesDisplay.appendChild(newLi);
    });
    
  } else {
    matchedCustomMoviesDisplay.innerHTML = '<li style="cursor: default; user-select: none;">Movie not found</li>';
  }
}

function copyToInputOnClick(element) {
  element.addEventListener('click', () => {
    searchCustomInput.value = element.textContent;
    matchedCustomMoviesDisplay.innerHTML = ''; // Clear the list
  });
}

function getCustomMovie() {
  const movieFound = customMovies.find(movie => movie.title.trim().toLowerCase() === searchCustomInput.value.trim().toLowerCase());

  let genres = '';
  movieFound.genre.forEach(singleGenre => {
    genres += `<span>${singleGenre}</span>`;
  });

  let movieDetailsHTML = `
  <div class="custom-poster-wrapper">
    <figure>
      <img src="${movieFound.poster}" alt="${movieFound.title}">
    </figure>
  </div>
  <div class="custom-information-container">
    <div class="information">
      <h2>${movieFound.title}</h2>
      <p class="custom-release-duration">
        <span>${movieFound.year}</span> | <span>${movieFound.runningTime}</span>
      </p>
      <p class="custom-description">${movieFound.description}</p>
      <p class="custom-genres custom-flex">
        ${genres}
      </p>
    </div>
  </div>
  `;

  customMovieContainer.innerHTML = movieDetailsHTML;
  customMovieContainer.classList.remove('custom-hidden');
}

const searchCustomInput = document.querySelector('.custom-movie-search-input');
const matchedCustomMoviesDisplay = document.querySelector('.custom-matched-movies-wrapper ul');
const findCustomButton = document.querySelector('.custom-find-button');
const customMovieContainer = document.querySelector('.custom-movie-information-container');
const customForm = document.querySelector('form'); 

searchCustomInput.addEventListener('input', () => listCustomMovies(searchCustomInput.value));
findCustomButton.addEventListener('click', getCustomMovie);
customForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
