var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(image, first, last, rating, street, city, state, zip, phone, website) {
  $('.results').append('<img class="img-circle" src="' + image + '" alt="' + first + " " + last + '" />' + '<h3>' + first + " " + last + '</h3><img src"' + rating + '"/><h5>' + street + ', ' + city + ', ' + state + ' ' + zip + '</h5><h4>' + phone + '</h4><h4><a href="' + website + '">' + website + '</a></h4>');
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
