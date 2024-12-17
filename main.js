const card = document.getElementById("cards");

async function fetchMovies() {
  const response = await fetch("https://dummyapi.online/api/movies");
  const data = await response.json();

  console.log(data);

  data.map((item) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrgJWPaIwWrD0mMhWyUyj_39UofsG9gA-HBw&s"
    <span style="display:flex "> <b> Movie Name : </b>  ${item.movie} </span>
    <span style="display:flex "> <b> Movie ratings : </b>  ${item.rating} </span>
    <span style="display:flex "> <b> Movie URL : </b>  ${item.imdb_url} </span>`;

    card.appendChild(box);
  });
}

fetchMovies();
