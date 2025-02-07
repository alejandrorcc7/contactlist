const getState = () => {
    return {
        store: {
            currentUser: {
                email: 'lrodriguez@4geeks.co'
            },
            notes: [
                { id: 1, text: 'Mi primera nota' }
            ],
            products: []
        },
        actions: {
            login: () => { },
            register: () => { },
            getProducts: () => {
                /* 
                fetch('')
                .then(response => response.json())
                .then(datos => console.log(datos))
                .catch(error => console.log(error)) 
                */
            }, // fetch a la api de productos
        }
    }
}

export default getState