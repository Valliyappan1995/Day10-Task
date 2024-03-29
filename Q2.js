const apiUrl =
"https://api.thecatapi.com/v1/images/search?api_key=live_c660lWljceASEfAcLoQmFchc2cFnBq1CHfmD32XfKMurzBEGa1FseqKxWznfqkhh";

const imageArea = document.getElementById("cat-image");

const loadCatImage = ({ url }) => {
  const imgElement = document.getElementById("img-element");
  imgElement.src = url;
};

const getCat = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  loadCatImage(data[0]);
}
getCat();
