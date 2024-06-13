document.addEventListener('DOMContentLoaded', () => {
    const signs = document.querySelectorAll('.zodiac-sign');
    signs.forEach(sign => {
        sign.addEventListener('click', () => {
            const signId = sign.id;
            window.location.href = `detail.html?sign=${signId}`;
        });
    });

    const dateDayElement = document.getElementById('date-day');
    const dateMonthYearElement = document.getElementById('date-month-year');

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();

    dateDayElement.textContent = day;
    dateMonthYearElement.textContent = ` ${month} ${year}`;
});
