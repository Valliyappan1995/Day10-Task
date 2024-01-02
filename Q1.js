const apiUrl =
  "https://api.thedogapi.com/v1/images/search?api_key=live_yQvuExGATDncNzZjG5u5H7n2kNW9Yc8FecCjTnYo1utXwjEIr49QI0QKw3lJ5hqf";
const imageArea = document.getElementById("dog-image");

const loadDogImage = ({ url }) => {
  const imgElement = document.getElementById("img-element");
  imgElement.src = url;
};

const getDog = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  loadDogImage(data[0]);
};

getDog();
