var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(image, first, last, rating, street, city, state, zip, phone, website) {
  $('.results').append('<div class="row profile"><div class="col-xs-5 col-sm-3 col-md-2"><img class="img-circle" src="' + image + '" alt="' + first + " " + last + '" /></div><div class="col-xs-7 col-sm-9 col-md-10">' + '<h3>' + first + " " + last + '</h3><img class="rating" src="' + rating + '" alt="rating"/><h7>' + street + '</h7>' + '<h7>' + city + ', ' + state + ' ' + zip + '</h7><h8>' + phone + '</h8><h8><a href="' + website + '">' + website + '</a></h8></div></div>');
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
