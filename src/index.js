/**
 * Based on https://www.w3schools.com/html/html5_geolocation.asp
 */
import _ from 'lodash';

var loc;

function getLocation() {
    loc = document.getElementById('currLocation');
    if (navigator.geolocation) {
        // gets location, calls showPosition
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        loc.innerHTML = "Location not supported by browser";
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    toAddress(lat, lon);
}

function toAddress(lat, lon) {
    var api_key = "API KEY GOES HERE";
    var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${api_key}`;
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            loc.innerHTML = data.results[0].address_components[2].long_name;
        });
}

document.addEventListener('DOMContentLoaded', getLocation(), false);
