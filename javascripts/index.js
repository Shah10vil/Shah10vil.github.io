function showTime() {
  handleTime();
  setInterval(() => {
    handleTime();
  }, 1000);
}
