const planets = {
    earth: {
        name: "Земля",
        description: "Третя планета від Сонця, єдина відома планета, що підтримує життя.",
        rotation: "Період обертання: 23 год 56 хв 4.1 с",
        distance: "Відстань від Сонця: 149.6 млн км",
        diameter: "Діаметр: 12,742 км",
        moons: "Супутники: 1 (Місяць)"
    },
    mercury: {
        name: "Меркурій",
        description: "Найближча до Сонця планета, має найкоротший рік.",
        rotation: "Період обертання: 58 діб 15 год 30 хв",
        distance: "Відстань від Сонця: 57.9 млн км",
        diameter: "Діаметр: 4,880 км",
        moons: "Супутники: 0"
    },
    venus: {
        name: "Венера",
        description: "Друга планета від Сонця, найгарячіша планета у Сонячній системі.",
        rotation: "Період обертання: 243 діб",
        distance: "Відстань від Сонця: 108.2 млн км",
        diameter: "Діаметр: 12,104 км",
        moons: "Супутники: 0"
    },
    mars: {
        name: "Марс",
        description: "Червона планета, відома своїми величезними вулканами та каньйонами.",
        rotation: "Період обертання: 24 год 37 хв",
        distance: "Відстань від Сонця: 227.9 млн км",
        diameter: "Діаметр: 6,779 км",
        moons: "Супутники: 2 (Фобос і Деймос)"
    },
    jupiter: {
        name: "Юпітер",
        description: "Найбільша планета Сонячної системи, газовий гігант.",
        rotation: "Період обертання: 9 год 56 хв",
        distance: "Відстань від Сонця: 778.5 млн км",
        diameter: "Діаметр: 139,820 км",
        moons: "Супутники: 79"
    },
    saturn: {
        name: "Сатурн",
        description: "Відомий своїми кільцями, газовий гігант.",
        rotation: "Період обертання: 10 год 42 хв",
        distance: "Відстань від Сонця: 1.43 млрд км",
        diameter: "Діаметр: 116,460 км",
        moons: "Супутники: 83"
    },
    uranus: {
        name: "Уран",
        description: "Льодяний гігант, обертається навколо Сонця на боці.",
        rotation: "Період обертання: 17 год 14 хв",
        distance: "Відстань від Сонця: 2.87 млрд км",
        diameter: "Діаметр: 50,724 км",
        moons: "Супутники: 27"
    },
    neptune: {
        name: "Нептун",
        description: "Найвіддаленіша планета від Сонця, льодяний гігант.",
        rotation: "Період обертання: 16 год 6 хв",
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

function updatePlanetInfo() {
    const selectedPlanet = planetSelect.value;
    const planet = planets[selectedPlanet];

    planetName.textContent = planet.name;
    planetDescription.textContent = planet.description;
    planetRotation.textContent = planet.rotation;
    planetDistance.textContent = planet.distance;
    planetDiameter.textContent = planet.diameter;
    planetMoons.textContent = planet.moons;
}

confirmButton.addEventListener('click', updatePlanetInfo);
updatePlanetInfo(); // Оновити інформацію при завантаженні сторінки
