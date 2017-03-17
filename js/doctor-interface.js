var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(image, first, last, street, city, state, zip, phone, website) {
  $('.results').append('<img src="' + image + '" alt="" />' + '<h3>' + first + " " + last + '</h3><h5>' + street + ', ' + city + ', ' + state + ' ' + zip + '</h5><h4>' + phone + '</h4><h4>' + website + '</h4>');
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val('');
    currentDoctorObject.getDoctor(medicalIssue, displayDoctor);
  });
});
