const planets = {
    earth: {
        name: "Земля",
        description: "Третя планета від Сонця, єдина відома планета, що підтримує життя.",
        rotation: 23.9344, // Години
        distance: "Відстань від Сонця: 149.6 млн км",
        diameter: "Діаметр: 12,742 км",
        moons: "Супутники: 1 (Місяць)"
    },
    mercury: {
        name: "Меркурій",
        description: "Найближча до Сонця планета, має найкоротший рік.",
        rotation: 1407.6, // Години
        distance: "Відстань від Сонця: 57.9 млн км",
        diameter: "Діаметр: 4,880 км",
        moons: "Супутники: 0"
    },
    venus: {
        name: "Венера",
        description: "Друга планета від Сонця, найгарячіша планета у Сонячній системі.",
        rotation: 5832.5, // Години
        distance: "Відстань від Сонця: 108.2 млн км",
        diameter: "Діаметр: 12,104 км",
        moons: "Супутники: 0"
    },
    mars: {
        name: "Марс",
        description: "Червона планета, відома своїми величезними вулканами та каньйонами.",
        rotation: 24.6229, // Години
        distance: "Відстань від Сонця: 227.9 млн км",
        diameter: "Діаметр: 6,779 км",
        moons: "Супутники: 2 (Фобос і Деймос)"
    },
    jupiter: {
        name: "Юпітер",
        description: "Найбільша планета Сонячної системи, газовий гігант.",
        rotation: 9.9259, // Години
        distance: "Відстань від Сонця: 778.5 млн км",
        diameter: "Діаметр: 139,820 км",
        moons: "Супутники: 79"
    },
    saturn: {
        name: "Сатурн",
        description: "Відомий своїми кільцями, газовий гігант.",
        rotation: 10.656, // Години
        distance: "Відстань від Сонця: 1.43 млрд км",
        diameter: "Діаметр: 116,460 км",
        moons: "Супутники: 83"
    },
    uranus: {
        name: "Уран",
        description: "Льодяний гігант, обертається навколо Сонця на боці.",
        rotation: 17.24, // Години
        distance: "Відстань від Сонця: 2.87 млрд км",
        diameter: "Діаметр: 50,724 км",
        moons: "Супутники: 27"
    },
    neptune: {
        name: "Нептун",
        description: "Найвіддаленіша планета від Сонця, льодяний гігант.",
        rotation: 16.11, // Години
        distance: "Відстань від Сонця: 4.5 млрд км",
        diameter: "Діаметр: 49,244 км",
        moons: "Супутники: 14"
    }
};

const planetSelect = document.getElementById('planet-select');
const confirmButton = document.getElementById('confirm-button');
const planetName = document.getElementById('planet-name');
const planetDescription = document.getElementById('planet-description');
const planetRotation = document.getElementById('planet-rotation');
const planetDistance = document.getElementById('planet-distance');
const planetDiameter = document.getElementById('planet-diameter');
const planetMoons = document.getElementById('planet-moons');
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

let currentPlanet = planets.earth; // Початкова планета - Земля

function updatePlanetInfo() {
    const selectedPlanet = planetSelect.value;
    currentPlanet = planets[selectedPlanet];

    planetName.textContent = currentPlanet.name;
    planetDescription.textContent = currentPlanet.description;
    planetRotation.textContent = `Період обертання: ${currentPlanet.rotation} годин`;
    planetDistance.textContent = currentPlanet.distance;
    planetDiameter.textContent = currentPlanet.diameter;
    planetMoons.textContent = currentPlanet.moons;
}

function updateClock() {
    const now = new Date();
    const earthRotation = 23.9344; // Період обертання Землі в годинах
    const planetRotation = currentPlanet.rotation;

    // Розрахунок часу для обраної планети
    const planetTime = (now.getTime() * (earthRotation / planetRotation)) % (24 * 60 * 60 * 1000);

    const planetDate = new Date(planetTime);

    const hours = String(planetDate.getUTCHours()).padStart(2, '0');
    const minutes = String(planetDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(planetDate.getUTCSeconds()).padStart(2, '0');

    timeElement.textContent = `Час: ${hours}:${minutes}:${seconds}`;

    // Оновлення дати (для Землі)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = `Дата: ${now.toLocaleDateString('uk-UA', options)}`;
}

confirmButton.addEventListener('click', updatePlanetInfo);
setInterval(updateClock, 1000);
updatePlanetInfo(); // Оновити інформацію при завантаженні сторінки
updateClock(); // Оновити годинник при завантаженні сторінки
