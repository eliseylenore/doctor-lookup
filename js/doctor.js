var apiKey = require('./../.env').apiKey;

Doctor = function() {
};

Doctor.prototype.getDoctor = function(medicalIssue, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=2&user_key=' + apiKey)
  .then(function(response) {
    var rating;
    var website = response.data[0].practices[0].website;
    if (response.data[0].ratings.length > 0) {
      if (response.data[0].ratings[0] !== undefined) {
        if(response.data[0].ratings[0].image_url_small !== undefined) {
          rating = response.data[0].ratings[0].image_url_small;
        }
        else if (response.data[0].ratings[1] !== undefined){
          rating = response.data[0].ratings[1].image_url_small;
        }
      }
    }
    else {
      rating = "./img/no-rating.png";
    }

    if(website === undefined) {
      website = "";
    }
    displayDoctor(
      response.data[0].profile.image_url,
      response.data[0].profile.first_name,
      response.data[0].profile.last_name,
      rating,
      response.data[0].practices[0].visit_address.street,
      response.data[0].practices[0].visit_address.city,
      response.data[0].practices[0].visit_address.state,
      response.data[0].practices[0].visit_address.zip,
      response.data[0].practices[0].phones[0].number,
      website);
      console.log(rating);
   })
  .fail(function(error){
     console.log("fail");
   });
};

exports.doctorModule = Doctor;
