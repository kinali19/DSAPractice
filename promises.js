let images = [
    './images/1.PNG',
    './images/2.PNG',
    './images/3.PNG',

]

async function loadImages(){
    const image = await Promise.all(images);
    console.log(image);
}

async function load(){
    let data = await fetch('https://jsonplaceholder.typicode.com/photos');
    const result = await data.json();
    try {

        let images = [];
        const img = result.map((item => images.push(await fetch(item.url))))
        await Promise.all(images).then(res => res.json())
        .then(img => {
           let imgEle = document.createElement('img');
           imgEle.src = img;
           imgEle.height = "150"
           imgEle.width = "150"
           document.getElementById("images").append(imgEle);
        })
    } catch(err){
        console.log("error")
    }
}

async function parallel() {
    const task1 = wait(500, 'parallelTask1');
    const task2 = wait(500, 'parallelTask2');

    return {
      result1: await task1,
      result2: await task2,
    }
}
function wait(url) {
    return fetch(url, {mode: "no-cors"});
}

function wait(data) {
    return new Promise(resolve => resolve.bind(this, data) );
  }

  const loadImage = (url) => new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', (err) => reject(err));
    img.src = url;
  });


async function loadImages(){
    let data = await fetch('https://jsonplaceholder.typicode.com/photos');
    const result = await data.json();
    try{
        let images = [];

        result.map((item) => {
            loadImage(item.url)
            .then(img => images.push(img))
            .catch(err => console.error(err));
            console.log(images);
        })
        return images;
    } catch(err){
        console.log(err);
    }
}

console.log(loadImages())
