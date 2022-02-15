const IMGAPIURL = 'https://picsum.photos/v2/list';

async function getImages() {
  const resp = await fetch(IMGAPIURL);
  const respData = await resp.json();


  const IMGPATH = 

console.log(respData);

respData.forEach((image) => {
  
const imageElement = document.createElement('img');

imageElement.setAttribute("src",image.download_url);

document.body.appendChild(imageElement);

});


return respData;
}

getImages();