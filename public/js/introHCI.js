// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
  initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
  console.log('Page ready');
  initCamera();
  initGestures();
  initRSVPForm();
}

// init jQuery gestures
function initGestures() {
  $(function () {
    $('.div.box').bind('taphold', tapholdHandler);
    function tapholdHandler(e) {
      $(e.target).addClass('taphold');
    }
  });

  $(function () {
    $('.judge-img').bind('taphold', tapholdHandler);
    function tapholdHandler(event) {
      //get id
      var targetIDPrefix = event.target.id;
      console.log('got prefix: ' + targetIDPrefix);

      //show
      $('#' + targetIDPrefix + '-bio').show();
    }
  });
}

// init RSVP form submit listener
function initRSVPForm() {
  $('#rsvpForm').submit(function (e) {
    e.preventDefault();
    console.log('submitting form...');
    var rsvpEmail = $('#rsvpEmail').val();
    $.post('addRSVP', { rsvpEmail: rsvpEmail }, postCallback);

    function postCallback(res) {
      alert('RSVP form successfully submitted!');
      $('#rsvpEmail').val('');
    }
  });
}
