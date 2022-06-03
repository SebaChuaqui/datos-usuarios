const getUsuarios = (async () => {

    const url = 'https://randomuser.me/api/?results=10';

    try {
        const response = await fetch(url);

        const { results } = await response.json()

        let lista = document.querySelector('#user-data');

        results.forEach((elemento) => {
            lista.innerHTML += `<img src='${elemento.picture.large}' >
                                    <p>${elemento.name.first} ${elemento.name.last}</p>
                                    <p>${elemento.email}</p>
                                    <p>${elemento.phone}</p>
                                    </br>
                                `;
        });
    }
    catch (error) {
        console.log(error);
    }

})();