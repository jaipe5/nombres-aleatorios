// Arrays de nombres y apellidos
const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'Chris', 'Laura', 'Robert', 'Emily', 'James', 'Linda'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];

// Selección de elementos del DOM
const generateBtn = document.getElementById('generateBtn');
const nameDisplay = document.getElementById('nameDisplay');

// Función para generar un nombre aleatorio
function generateRandomName() {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${randomFirstName} ${randomLastName}`;
}

// Evento de clic en el botón "Generate Name"
generateBtn.addEventListener('click', function () {
    const randomName = generateRandomName();
    nameDisplay.textContent = randomName;
});
