const request = require('request');

const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  if (error) {
    console.log('error:', error);
  }

  const data = JSON.parse(body); // turns it into a object
  // console.log(data);
  // console.log(typeof data);

  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log(`Error: ${breedName} doesn't exist`);
  }
});
