const sendData = (url, data) => {
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((data) => console.log('Отправка данных завершена'))
        .catch((error) => console.log(error));
};

const getData = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => sendData('https://jsonplaceholder.typicode.com/posts', data))
        .catch((error) => console.log(error));
};

getData('db.json');