fetch('http://localhost:3000/kanap/sofas')

    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })

    .then((sofas) => {
        for (let each of sofas) {
            items.innerHTML += (
                `<div class='item'>
                    <img src='${each.imageUrl}' />

                    <h3 class='productName'>${each.name}</h3>
                                
                    <p class='productDescription'>${each.description}</p>
                </div>`
            );
        }
    })

    .catch((error) => console.error(error));