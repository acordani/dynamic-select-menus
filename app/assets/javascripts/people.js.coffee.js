// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

 jQuery(function() {
  $('#person_state_id').parent().hide();
  var states;
  states = $('#person_state_id').html();
  // console.log(states);
  return $('#person_country_id').change(function() {
    var country, options;
    country = $('#person_country_id :selected').text();
    options = $(states).filter("optgroup[label=" + country + "]").html();
    // console.log(options);
    if (options) {
        $('#person_state_id').html(options);
        $('#person_state_id').parent().show();
    } else {
        $('#person_state_id').empty();
        $('#person_state_id').parent().hide();
    }
  });
});