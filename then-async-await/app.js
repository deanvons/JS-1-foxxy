fetch("https://api.punkapi.com/v2/beers")
  .then((response) => response.json())
  .then((result) => console.log(result));

// must use an async function to use await syntax
async function logBeerData() {
  const response = await fetch("https://api.punkapi.com/v2/beers");
  const result = await response.json();
  console.log(result);
}
// call async function
logBeerData();
