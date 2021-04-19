function clear(event) {
  event.querySelector("#txtLa").innerHTML = "";
  event.querySelector("#txtLo").innerHTML = " ";
}

function validate(event) {
  clear(event);
  var valid = true;
  var latsVal = event.querySelector("#latitude").value;
  var longVal = event.querySelector("#longitude").value;

  if (latsVal < -90 || latsVal > 90) {
    valid = false;
    event.querySelector("#txtLa").innerHTML =
      "must be a valid Latitude (-90 to 90)";
  }
  if (longVal < -180 || longVal > 180) {
    valid = false;
    event.querySelector("#txtLo").innerHTML =
      "must be a valid Longitude (-90 to 90)";
  }
  return valid;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function () {
    return validate(form);
  };
};
