const planets = {
    earth: {
        name: "Земля",
        description: "Третя планета від Сонця, єдина відома планета, що підтримує життя.",
        rotation: 23.9344, // Зоряна доба в годинах
        distance: "Відстань від Сонця: 149.6 млн км",
        diameter: "Діаметр: 12,742 км",
        moons: "Супутники: 1 (Місяць)"
    },
    mercury: {
        name: "Меркурій",
        description: "Найближча до Сонця планета, має найкоротший рік.",
        rotation: 1407.6, // Період обертання в годинах
        distance: "Відстань від Сонця: 57.9 млн км",
        diameter: "Діаметр: 4,880 км",
        moons: "Супутники: 0"
    },
    venus: {
        name: "Венера",
        description: "Друга планета від Сонця, найгарячіша планета у Сонячній системі.",
        rotation: 5832.5, // Період обертання в годинах
        distance: "Відстань від Сонця: 108.2 млн км",
        diameter: "Діаметр: 12,104 км",
        moons: "Супутники: 0"
    },
    mars: {
        name: "Марс",
        description: "Червона планета, відома своїми величезними вулканами та каньйонами.",
        rotation: 24.6229, // Період обертання в годинах
        distance: "Відстань від Сонця: 227.9 млн км",
        diameter: "Діаметр: 6,779 км",
        moons: "Супутники: 2 (Фобос і Деймос)"
    },
    jupiter: {
        name: "Юпітер",
        description: "Найбільша планета Сонячної системи, газовий гігант.",
        rotation: 9.9259, // Період обертання в годинах
        distance: "Відстань від Сонця: 778.5 млн км",
        diameter: "Діаметр: 139,820 км",
        moons: "Супутники: 79"
    },
    saturn: {
        name: "Сатурн",
        description: "Відомий своїми кільцями, газовий гігант.",
        rotation: 10.656, // Період обертання в годинах
        distance: "Відстань від Сонця: 1.43 млрд км",
        diameter: "Діаметр: 116,460 км",
        moons: "Супутники: 83"
    },
    uranus: {
        name: "Уран",
        description: "Льодяний гігант, обертається навколо Сонця на боці.",
        rotation: 17.24, // Період обертання в годинах
        distance: "Відстань від Сонця: 2.87 млрд км",
        diameter: "Діаметр: 50,724 км",
        moons: "Супутники: 27"
    },
    neptune: {
        name: "Нептун",
        description: "Найвіддаленіша планета від Сонця, льодяний гігант.",
        rotation: 16.11, // Період обертання в годинах
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
const solarTimeElement = document.getElementById('solar-time');
const solarDateElement = document.getElementById('solar-date');
const siderealTimeElement = document.getElementById('sidereal-time');
const planetClockTitle = document.getElementById('planet-clock-title');
const planetTimeElement = document.getElementById('planet-time');

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

    // Оновлення заголовку планетарного годинника
    planetClockTitle.textContent = `Годинник (${currentPlanet.name})`;
}

function updateSolarClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Локальний час
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    solarTimeElement.textContent = `Час: ${hours}:${minutes}:${seconds}`;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    solarDateElement.textContent = `Дата: ${now.toLocaleDateString('uk-UA', options)}`;
}

function updateSiderealClock() {
    const now = new Date();
    const earthRotation = 23.9344; // Зоряна доба в годинах

    // Розрахунок зоряного часу
    const siderealTimeRatio = 24 / earthRotation; // Співвідношення сонячного часу до зоряного
    const siderealTime = (now.getTime() * siderealTimeRatio) % (24 * 60 * 60 * 1000);

    const siderealDate = new Date(siderealTime);

    const siderealHours = String(siderealDate.getUTCHours()).padStart(2, '0');
    const siderealMinutes = String(siderealDate.getUTCMinutes()).padStart(2, '0');
    const siderealSeconds = String(siderealDate.getUTCSeconds()).padStart(2, '0');

    siderealTimeElement.textContent = `Час: ${siderealHours}:${siderealMinutes}:${siderealSeconds}`;
}

function updatePlanetClock() {
    const now = new Date();
    const earthRotation = 23.9344; // Період обертання Землі в годинах
    const planetRotation = currentPlanet.rotation;

    // Розрахунок часу для обраної планети
    const planetTimeRatio = earthRotation / planetRotation;
    const planetTime = (now.getTime() * planetTimeRatio) % (24 * 60 * 60 * 1000);

    const planetDate = new Date(planetTime);

    const hours = String(planetDate.getUTCHours()).padStart(2, '0');
    const minutes = String(planetDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(planetDate.getUTCSeconds()).padStart(2, '0');

    planetTimeElement.textContent = `Час: ${hours}:${minutes}:${seconds}`;
}

// Додаємо обробник події для кнопки "Продовжити"
confirmButton.addEventListener('click', () => {
    updatePlanetInfo();
    updatePlanetClock(); // Оновити планетарний годинник при виборі планети
});

setInterval(updateSolarClock, 1000);
setInterval(updateSiderealClock, 1000);
setInterval(updatePlanetClock, 1000);
updatePlanetInfo(); // Оновити інформацію при завантаженні сторінки
updateSolarClock(); // Оновити сонячний годинник при завантаженні сторінки
updateSiderealClock(); // Оновити зоряний годинник при завантаженні сторінки
updatePlanetClock(); // Оновити планетарний годинник при завантаженні сторінки
