// Static values
const temp = 5; // Celsius
const windSpeed = 10; // km/h

// Wind chill function (metric formula)
function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

// Display wind chill
let windChill = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
  windChill = calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
}

document.getElementById("windchill").textContent = windChill;

// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;