function initMap() {
    const map = L.map("map").setView([44.7417832,-0.5329014], 16);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker([44.7417832,-0.5329014]).addTo(map);
}

initMap();