const time = document.getElementById('timediv');

setInterval(() => {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();

}, 1000);
