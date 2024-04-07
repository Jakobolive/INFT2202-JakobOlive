/* 
 * This line should configure the submit handler for your form.
 * It should use the submitAnimalForm method below.
 */
// put your code here
document.getElementById('animalForm').addEventListener('submit', submitAnimalForm);


/* 
 * This line should get the list of available animals, then render the table when the page loads.
 * It should use the getAnimals and renderAnimalTable methods below.
 */
// put your code here
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const animals = await getAnimals();
        renderAnimalTable(animals);
    } catch (err) {
        console.error('Error:', err);
        showError('Failed to fetch animals.');
    }
});

/* 
 * renderAnimalTable
 * This method should take an array of animals, and display a table of them.
 * If the array is empty, it should hide the table and instead show a message that there are currently no animals.
 * @param Animal[];
 * @return void
 */
async function renderAnimalTable (arrayOfAnimals) {
    // put your code here
    const table = document.getElementById('animalTable');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Heads</th>
                <th>Legs</th>
                <th>Sound</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    const tbody = table.querySelector('tbody');
    arrayOfAnimals.forEach(animal => {
        const row = `<tr>
                        <td>${animal.name}</td>
                        <td>${animal.heads}</td>
                        <td>${animal.legs}</td>
                        <td>${animal.sound}</td>
                    </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
    table.classList.add('table', 'table-striped');
    table.style.display = 'table';
}


/* 
 * submitAnimalForm
 * This method should be what gets called when your form is submitted.
 * It should utilize the fetch methods below.
 * It should hide or show an error message if there is a problem.
 * If it is successful, it should do something to update the list of animals.
 * @param event;
 * @return void
 */
async function submitAnimalForm (event) {
    // put your code here
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const heads = parseInt(formData.get('heads'));
    const legs = parseInt(formData.get('legs'));
    const sound = formData.get('sound');
    console.log('Name:', name);
    console.log('Heads:', heads);
    console.log('Legs:', legs);
    console.log('Sound:', sound);
    // Data validation
    if (isNaN(heads) || isNaN(legs) || heads < 0 || legs < 0 || !name.trim() || !sound.trim()) {
        showError('Please provide valid inputs for the requested information.');
        return;
    }

    // Convert FormData to JSON
    const jsonData = {};
    for (const [key, value] of formData.entries()) {
        jsonData[key] = value;
    }
    const jsonBody = JSON.stringify(jsonData);

    try {
        const response = await postAnimal(jsonBody);
        if (response.ok) {
            event.target.reset();
            const animals = await getAnimals();
            renderAnimalTable(animals);
        } else {
            const errorData = await response.json();
            showError(errorData.message);
        }
    } catch (err) {
        console.error('Error:', err);
        showError('An unexpected error occurred.');
    }
}

/* 
 * postAnimal
 * This method should use fetch to post a new animal to the server.
 * It should only return a successful response from the server, or an object with an error message.
 * It should not modify the dom at all.
 * For full points, your fetch methods should utilize the URL, Headers, and Request classes.
 * @param event;
 * @return Animal | Error
 */
async function postAnimal (jsonBody) {
    // put your code here
    try {
        const response = await fetch('/api/animal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonBody
        });
        return response;
    } catch (err) {
        throw new Error('Failed to post animal.');
    }
}

/* 
 * getAnimal
 * This method should use fetch to get a list of animals from the server.
 * It should only return an array of animals, or an object with an error message.
 * It should not modify the dom at all.
 * For full points, your fetch methods should utilize the URL, Headers, and Request classes.
 * @param event | null;
 * @return Animal[] | Error
 */
async function getAnimals (event = null) {
    // put your code here
    try {
        const response = await fetch('/api/animal');
        if (!response.ok) {
            throw new Error('Failed to fetch animals.');
        }
        const animals = await response.json();
        return animals;
    } catch (error) {
        throw new Error(error.message);
    }
}

/*
 * showError
 * This method should display an error message below the form.
 * @param message;
 * @return void
 */
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.classList.add('alert', 'alert-danger');
}






