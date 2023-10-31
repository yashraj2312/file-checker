function checkFile() {
  const fileInput = document.getElementById("fileInput");
  const fileSize = fileInput.files[0].size;
  const maxSize = 1024 * 1024; // 1MB

  if (fileSize > maxSize) {
    alert("File size must be less than 1MB");
  } else {
  }
}

function fileValidation() {
  var fileInput = document.getElementById("fileInput");

  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions =
    /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd)$/i;

  if (!allowedExtensions.exec(filePath)) {
    alert("Invalid file type");
    fileInput.value = "";
    return false;
  }
}

function getLocation() {
  if (!navigator.geolocation) {
    console.log('Geolocation API not supported by this browser.');
  } else {
    console.log('Checking location...');
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

function success(position) {
  console.log(position);
}

function error() {
  console.log('Geolocation error!');
}

document.getElementById('get-location').addEventListener('click', getLocation);

function success(position) {
  console.log('Latitude:', position.coords.latitude);
  console.log('Longitude:', position.coords.longitude);
}