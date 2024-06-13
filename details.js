document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const sign = urlParams.get('sign');

    if (!sign) {
        document.getElementById('horoscope-text').innerHTML = '<p>Invalid zodiac sign. Please go back and select a sign.</p>';
        return;
    }

    const imagePath = `${sign}`;
    
    const zodiacImg = document.getElementById('zodiac-img');
    zodiacImg.src = imagePath;
    zodiacImg.alt = sign.charAt(0).toUpperCase() + sign.slice(1);

    const sampleHoroscopes = {
        aries: "Today is a day for bold actions and decisions. You are confident and ready to take on new challenges.",
        taurus: "Today you might find yourself feeling more grounded and stable. It's a good day for practical matters.",
        gemini: "Communication is key today. Your wit and charm will help you navigate any situation.",
        cancer: "Emotions run high today. Take time to nurture yourself and those you love."
    };

    document.getElementById('horoscope-text').innerHTML = `<p>${sampleHoroscopes[sign]}</p>`;
});
