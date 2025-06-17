//most of the JS was made with AI as I have not used JS yet. Mostly only c++.
//Tried a framework but went with mostly AI

//I did take the time to read over all the AI said and took notes explaining it. 
//I feel like I could re make this all if I had a cheat sheet.

document.addEventListener('DOMContentLoaded', function () {
    // Initialize map centered on Vancouver
    var map = L.map('map').setView([49.2827, -123.1207], 10);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // can comment out layer or cluster so I can have the pins do either. 
    //var markers = L.markerClusterGroup();
    var markers = L.layerGroup(); 

    // Function to create a marker
    function addMarker(data) {
        var iconHTML = data.type === 'homicide'
            ? "<div style='background-color:rgb(111, 40, 32); width: 24px; height: 24px; color: #fff; text-align: center; border-radius: 50%; line-height: 24px;'>H</div>"
            : "<div style='background-color:rgb(19, 64, 93); width: 24px; height: 24px; color: #fff; text-align: center; border-radius: 50%; line-height: 24px;'>M</div>";

        var icon = L.divIcon({
            className: 'custom-div-icon',
            html: iconHTML,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

       var popup = `
            <a href="${data.profile}" target="_blank" style="text-decoration: none; color: #222;">
            <strong>${data.name}</strong><br>
            <img src="${data.photo}" alt="${data.name}" style="width: 100px; height: auto; border-radius: 6px; margin: 5px 0;">
            </a><br>
            Age: ${data.age}<br>
            Gender: ${data.gender}<br>
            Date: ${data.date}<br>
            Status: ${data.status}
        `;


        var marker = L.marker([data.lat, data.lng], { icon: icon });
        marker.bindPopup(popup);
        markers.addLayer(marker);
    }

    // Add all markers
    allMarkers.forEach(addMarker);
    map.addLayer(markers);

    // Filter button functions
    function filterMarkers(filterFn) {
        markers.clearLayers();
        allMarkers.filter(filterFn).forEach(addMarker);
        map.addLayer(markers);
    }

    document.getElementById('show-all').addEventListener('click', () => filterMarkers(() => true));
    document.getElementById('show-homicide').addEventListener('click', () => filterMarkers(m => m.type === 'homicide'));
    document.getElementById('show-missing').addEventListener('click', () => filterMarkers(m => m.type === 'missing'));
    document.getElementById('filter-female').addEventListener('click', () => filterMarkers(m => m.gender === 'F'));
    document.getElementById('filter-male').addEventListener('click', () => filterMarkers(m => m.gender === 'M'));
    document.getElementById('filter-trans').addEventListener('click', () => filterMarkers(m => m.gender === 'T'));
    document.getElementById('filter-all-gender').addEventListener('click', () => filterMarkers(() => true));

    // Age filter
    document.getElementById('filter-age').addEventListener('click', () => {
        const minAge = parseInt(document.getElementById('min-age').value, 10);
        const maxAge = parseInt(document.getElementById('max-age').value, 10);
        if (isNaN(minAge) || isNaN(maxAge)) {
            alert("Please enter valid age values.");
            return;
        }
        filterMarkers(m => m.age >= minAge && m.age <= maxAge);
    });

  

});
