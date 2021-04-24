const handleStyle = (id) => {
  var elms = document.querySelectorAll(`[id=${id}]`);
  for (var i = 0; i < elms.length; i++) {
    const ele = elms[i];
    if (ele.style.getPropertyValue("display") === "none") {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  }
};
