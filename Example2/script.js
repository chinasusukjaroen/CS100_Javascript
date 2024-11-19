// Function to load options from the text file
function loadOptions() {
    // Fetch data from a txt file
    fetch('options.txt')
        .then(response => response.text())
        .then(data => {
            // Get reference to the dropdown menu element
            const dropdown = document.getElementById('dropdown');
            const options = data.split('\n').map(option => option.trim()).filter(option => option !== '');

            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                dropdown.appendChild(optionElement);
            });
        })
        .catch(error => console.error('Error loading options:', error));
}

// Function to display the selected option and keep a history of selections
function showSelected() {
    const selectedOption = document.getElementById('dropdown').value;
    const outputDiv = document.getElementById('output');

    if (selectedOption) {
        const newEntry = document.createElement('p');
        newEntry.textContent = `You selected: ${selectedOption}`;
        outputDiv.appendChild(newEntry); // Append the newEntry to the output div
    }
}

// Load options on page load
window.onload = loadOptions;
