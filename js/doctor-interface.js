var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(image, first, last, rating, street, city, state, zip, phone, website) {
  $('.results').append('<img class="img-circle center-block" src="' + image + '" alt="' + first + " " + last + '" />' + '<h5>' + first + " " + last + '<img class="rating" src="' + rating + '" alt="rating"/></h5><h7>' + street + '</h7>' + '<h7>' + city + ', ' + state + ' ' + zip + '</h7><h4>' + phone + '</h4><h8><a href="' + website + '">' + website + '</a></h8>');
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('form').submit(function(event) {
    $('.results').text("");
    event.preventDefault();
    var medicalIssue = $('#medical-issue').val();
    $('#medical-issue').val('');
    currentDoctorObject.getDoctor(medicalIssue, displayDoctor);
  });
});
