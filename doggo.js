const Doggo_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(Doggo_URL);
const doggos = document.querySelector(".doggos");

promise
  .then((response)=> {
      const processingPromise = response.json();
      return processingPromise;
  })
  .then((processedResponse)=> {
    console.log(processedResponse);
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "A good boy";
    doggos.appendChild(img);
  });

function addNewDoggo() {
  const promise = fetch(Doggo_URL);
  promise
    .then((response)=> {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then((processedResponse)=> {
        const newImg = document.createElement("img");
        newImg.src = processedResponse.message;
        newImg.alt = "A good boy";
        doggos.appendChild(newImg);
    });
}

  document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);



  console.log("Hi this should come first :^)");