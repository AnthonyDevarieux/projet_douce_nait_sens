function initMap() {
    const map = L.map("map").setView([44.750796946515905, -0.5336631104370813], 16);
  
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker([44.750796946515905, -0.5336631104370813]).addTo(map);
}

initMap();