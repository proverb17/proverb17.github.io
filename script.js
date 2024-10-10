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
    "Charm is deceptive, and beauty is fleeting; but a woman who fears the LORD is to be praised. - Proverbs 31:30",
    "A man's heart plans his way, but the LORD directs his steps. - Proverbs 16:9",
    "Better is a little with righteousness than great revenues with injustice. - Proverbs 16:8",
    "A cheerful heart is a good medicine, but a broken spirit dries up the bones. - Proverbs 17:22",
    "Do not boast about tomorrow, for you do not know what a day may bring. - Proverbs 27:1",
    "Whoever walks in integrity walks securely, but whoever takes crooked paths will be found out. - Proverbs 10:9",
    "The name of the LORD is a strong tower; the righteous run to it and are safe. - Proverbs 18:10",
    "The tongue has the power of life and death, and those who love it will eat its fruit. - Proverbs 18:21",
    "He who guards his lips guards his life, but he who speaks rashly will come to ruin. - Proverbs 13:3",
    "A fool gives full vent to his spirit, but a wise man quietly holds it back. - Proverbs 29:11",
    "Where there is no guidance, a people falls, but in an abundance of counselors there is safety. - Proverbs 11:14",
    "Gray hair is a crown of glory; it is gained in a righteous life. - Proverbs 16:31",
    "The LORD detests dishonest scales, but accurate weights find favor with him. - Proverbs 11:1",
    "The light of the righteous shines brightly, but the lamp of the wicked is snuffed out. - Proverbs 13:9",
    "Hatred stirs up conflict, but love covers over all wrongs. - Proverbs 10:12",
    "Gracious words are like a honeycomb, sweetness to the soul and health to the body. - Proverbs 16:24",
    "The rich and poor have this in common: The LORD is the maker of them all. - Proverbs 22:2"
];

// Function to get today's verse based on the day of the month
function getTodayVerse() {
    const today = new Date();
    const dayOfMonth = today.getDate(); // Get today's day of the month (1-31)
    const verseIndex = (dayOfMonth - 1) % verses.length; // Cycle through the 28 verses
    return verses[verseIndex];
}

// Load the verse when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const verseElement = document.getElementById('verse');
    verseElement.innerText = getTodayVerse();
});
