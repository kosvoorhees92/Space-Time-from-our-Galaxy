const planets = {
    earth: {
        name: "Земля",
        description: "Третя планета від Сонця, єдина відома планета, що підтримує життя.",
        rotation: 23.9344, // Зоряна доба в годинах
        distance: "Відстань від Сонця: 149.6 млн км",
        diameter: "Діаметр: 12,742 км",
        moons: "Супутники: 1 (Місяць)"
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
const earthTimeElement = document.getElementById('earth-time');
const earthDateElement = document.getElementById('earth-date');
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

function updateEarthClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    earthTimeElement.textContent = `Час: ${hours}:${minutes}:${seconds}`;

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    earthDateElement.textContent = `Дата: ${now.toLocaleDateString('uk-UA', options)}`;
}

function updatePlanetClock() {
    const now = new Date();
    const earthRotation = 23.9344; // Зоряна доба в годинах
    const planetRotation = currentPlanet.rotation;

    // Розрахунок зоряного часу
    const siderealTimeRatio = earthRotation / planetRotation;
    const siderealTime = (now.getTime() * siderealTimeRatio) % (24 * 60 * 60 * 1000);

    const siderealDate = new Date(siderealTime);

    const siderealHours = String(siderealDate.getUTCHours()).padStart(2, '0');
    const siderealMinutes = String(siderealDate.getUTCMinutes()).padStart(2, '0');
    const siderealSeconds = String(siderealDate.getUTCSeconds()).padStart(2, '0');

    // Розрахунок сонячного часу (з урахуванням сезонних змін)
    const month = now.getMonth() + 1; // getMonth() повертає 0-11
    let solarDayLength;
    if (month === 9) { // Вересень
        solarDayLength = 23.9775; // 23 год 59 хв 39 с
    } else if (month === 12) { // Грудень
        solarDayLength = 24.0083; // 24 год 00 хв 30 с
    } else {
        solarDayLength = 24; // Стандартна сонячна доба
    }

    const solarTimeRatio = earthRotation / solarDayLength;
    const solarTime = (now.getTime() * solarTimeRatio) % (24 * 60 * 60 * 1000);

    const solarDate = new Date(solarTime);

    const solarHours = String(solarDate.getUTCHours()).padStart(2, '0');
    const solarMinutes = String(solarDate.getUTCMinutes()).padStart(2, '0');
    const solarSeconds = String(solarDate.getUTCSeconds()).padStart(2, '0');

    // Відображення часу
    planetTimeElement.innerHTML = `
        Зоряний час: ${siderealHours}:${siderealMinutes}:${siderealSeconds}<br>
        Сонячний час: ${solarHours}:${solarMinutes}:${solarSeconds}
    `;
}

confirmButton.addEventListener('click', updatePlanetInfo);
setInterval(updateEarthClock, 1000);
setInterval(updatePlanetClock, 1000);
updatePlanetInfo(); // Оновити інформацію при завантаженні сторінки
updateEarthClock(); // Оновити годинник Землі при завантаженні сторінки
updatePlanetClock(); // Оновити планетарний годинник при завантаженні сторінки
