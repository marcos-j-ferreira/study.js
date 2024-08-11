let number = 100

const url =  `http://localhost:8000/number?number=${number}`

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json();
    })
    .then(data => {

        console.log(data)
    })
    .catch(error => {
        console.log('Erro ao acessar a API', error);
})
