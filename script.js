const verses = [
    "A soft answer turns away wrath, but a harsh word stirs up anger. - Proverbs 15:1",
    "Trust in the LORD with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
    "Pride goes before destruction, and a haughty spirit before a fall. - Proverbs 16:18",
    "Commit your work to the LORD, and your plans will be established. - Proverbs 16:3",
    "Iron sharpens iron, and one man sharpens another. - Proverbs 27:17"
];

// Function to display a new verse
function getNewVerse() {
    const verseElement = document.getElementById('verse');
    const randomIndex = Math.floor(Math.random() * verses.length);
    verseElement.innerText = verses[randomIndex];
}

// Load a verse when the page loads
document.addEventListener('DOMContentLoaded', () => {
    getNewVerse();
});
