const verses = [
    "The fear of the LORD is the beginning of knowledge; fools despise wisdom and instruction. - Proverbs 1:7",
    "Trust in the LORD with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
    "In all your ways acknowledge Him, and He will make your paths straight. - Proverbs 3:6",
    "A gentle answer turns away wrath, but a harsh word stirs up anger. - Proverbs 15:1",
    "Commit your work to the LORD, and your plans will be established. - Proverbs 16:3",
    "Pride goes before destruction, and a haughty spirit before a fall. - Proverbs 16:18",
    "A friend loves at all times, and a brother is born for adversity. - Proverbs 17:17",
    "A joyful heart is good medicine, but a crushed spirit dries up the bones. - Proverbs 17:22",
    "Iron sharpens iron, and one man sharpens another. - Proverbs 27:17",
    "As water reflects the face, so one's life reflects the heart. - Proverbs 27:19",
    "The righteous are as bold as a lion. - Proverbs 28:1",
    "Charm is deceptive, and beauty is fleeting; but a woman who fears the LORD is to be praised. - Proverbs 31:30"
];

// Function to get today's verse
function getTodayVerse() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const storedDate = localStorage.getItem('verseDate');
    const storedVerse = localStorage.getItem('verse');

    // Check if the verse has already been set today
    if (storedDate === today && storedVerse) {
        return storedVerse;
    } else {
        // Pick a new random verse for the day
        const randomIndex = Math.floor(Math.random() * verses.length);
        const newVerse = verses[randomIndex];

        // Store today's date and the new verse in localStorage
        localStorage.setItem('verseDate', today);
        localStorage.setItem('verse', newVerse);

        return newVerse;
    }
}

// Load the verse when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const verseElement = document.getElementById('verse');
    verseElement.innerText = getTodayVerse();
});
