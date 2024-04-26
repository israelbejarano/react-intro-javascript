console.log('Hola mundo');

const getImages = async() => {
    try {
        const appKey = '';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${appKey}`);
        const {data} = await resp.json();
        const {url} = data.images.url
        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(url);

    }catch(error){
        console.error(error);
    }
}