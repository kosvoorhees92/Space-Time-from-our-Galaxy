function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const rotationPeriodElement = document.getElementById('rotation-period');
    const solarDayElement = document.getElementById('solar-day');
    const factsElement = document.getElementById('facts');

    // Оновлення часу
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `Час: ${hours}:${minutes}:${seconds}`;

    // Оновлення дати
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = `Дата: ${now.toLocaleDateString('uk-UA', options)}`;

    // Період обертання Землі
    rotationPeriodElement.textContent = `Період обертання Землі: 23 год 56 хв 4.1 с`;

    // Тривалість сонячної доби
    const month = now.getMonth() + 1; // getMonth() повертає 0-11
    let solarDay;
    if (month === 9) { // Вересень
        solarDay = "23 год 59 хв 39 с";
    } else if (month === 12) { // Грудень
        solarDay = "24 год 00 хв 30 с";
    } else {
        solarDay = "~24 год";
    }
    solarDayElement.textContent = `Сонячна доба: ${solarDay}`;

    // Факти про Землю
    const facts = [
        "Земля — третя планета від Сонця.",
        "Екваторіальний діаметр Землі: 12,742 км.",
        "Один оберт навколо Сонця Земля робить за 365.24 дні.",
        "Земля має один природний супутник — Місяць."
    ];
    factsElement.textContent = `Факт: ${facts[Math.floor(Math.random() * facts.length)]}`;
}

setInterval(updateTime, 1000);
updateTime();
