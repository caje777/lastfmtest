document.addEventListener('DOMContentLoaded', () => {
    // Example function to fetch and display Last.fm data
    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    const displayMonthlyData = async () => {
        const data = await fetchData('https://api.example.com/monthly'); // Replace with actual API URL
        document.getElementById('monthly-data').textContent = JSON.stringify(data, null, 2);
    };

    const displayYearlyData = async () => {
        const data = await fetchData('https://api.example.com/yearly'); // Replace with actual API URL
        document.getElementById('yearly-data').textContent = JSON.stringify(data, null, 2);
    };

    displayMonthlyData();
    displayYearlyData();
});
