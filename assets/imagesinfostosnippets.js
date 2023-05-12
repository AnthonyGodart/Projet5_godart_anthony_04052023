let images = document.getElementsByTagName('img');
const imageInfos = [];

for (let i = 0; i < images.length; i++) {
  let image = images[i];
  let alt = image.alt;
  let src = image.src;
  imageInfos.push({ alt: alt, src: src });
}

let imageRichSnippets = [];
for (let j = 0; j < imageInfos.length; j++) {
  let imageInfo = imageInfos[j];
  let imageRichSnippet = {
    "@context": "http://schema.org",
    "@type": "ImageObject",
    "url": imageInfo.src,
    "description": imageInfo.alt
  };
  imageRichSnippets.push(imageRichSnippet);
}
let imageJsonData = JSON.stringify(imageRichSnippets);
let imageScriptTag = document.createElement('script');
imageScriptTag.type = 'application/ld+json';
imageScriptTag.innerHTML = imageJsonData;
document.head.appendChild(imageScriptTag);
