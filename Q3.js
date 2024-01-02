const apiUrl = "https://randomfox.ca/floof/";

const imageArea = document.getElementById("fox-image");

const loadFoxImage = ({ image }) => {
  const imgElement = document.getElementById("img-element");
  imgElement.src = image;
};

const getFox = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  loadFoxImage(data);
};
getFox();
