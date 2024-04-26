console.log('Hola mundo');

const appKey = '';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${appKey}`);

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.url
        console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(url);
    })
    .catch(console.warn);