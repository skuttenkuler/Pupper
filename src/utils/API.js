import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandom: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  getBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
