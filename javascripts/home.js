function openLink(link) {
  window.open(link, "_blank");
}

function handleTime() {
  var date = new Date();
  const dateElement = document.getElementById("date");
  dateElement.innerHTML = `${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function showTime() {
  handleTime();
  setInterval(() => {
    handleTime();
  }, 1000);
}
