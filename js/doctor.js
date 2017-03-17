var apiKey = require('./../.env').apiKey;

Doctor = function() {
};

Doctor.prototype.getDoctor = function(medicalIssue, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=2&user_key=' + apiKey)
  .then(function(response) {
    //loop through found docotors
    response.data.forEach(function(person) {
      var rating;
      var website = response.data[0].practices[0].website;
      //Determine whether ratings are listed, and where they are listed
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
      //determine whether website is listed for person
      if(website === undefined) {
        website = "";
      }

      displayDoctor(
        person.profile.image_url,
        person.profile.first_name,
        person.profile.last_name,
        rating,
        person.practices[0].visit_address.street,
        person.practices[0].visit_address.city,
        person.practices[0].visit_address.state,
        person.practices[0].visit_address.zip,
        person.practices[0].phones[0].number,
        website);
        console.log(response);
     });
    }).fail(function(error){
     console.log("fail");
   });
};

exports.doctorModule = Doctor;
