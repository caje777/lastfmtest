document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '37cfe9ae4d8face9927cd7f9b4b26f56'; // Replace with your Last.fm API key
    const user = 'caje7';  // Replace with your Last.fm username

    const fetchData = async (endpoint) => {
        try {
            const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=${endpoint}&user=${user}&api_key=${apiKey}&format=json`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const displayMonthlyData = async () => {
        const data = await fetchData('user.gettoptracks&limit=10'); // Example endpoint for top tracks
        if (data && data.toptracks) {
            const tracks = data.toptracks.track.map(track => `<li>${track.name} by ${track.artist.name}</li>`).join('');
            document.getElementById('monthly-data').innerHTML = `<ul>${tracks}</ul>`;
        }
    };

    const displayYearlyData = async () => {
        const data = await fetchData('user.gettoptracks&limit=10'); // Replace with endpoint for yearly data if needed
        if (data && data.toptracks) {
            const tracks = data.toptracks.track.map(track => `<li>${track.name} by ${track.artist.name}</li>`).join('');
            document.getElementById('yearly-data').innerHTML = `<ul>${tracks}</ul>`;
        }
    };

    displayMonthlyData();
    displayYearlyData();
});
