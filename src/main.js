import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { Haiku } from './haiku.js';

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    // let first = $("#first").val();
    // let second = $("#second").val();
    // let third = $("#third").val();
    // let weekdayInstance = new Haiku(first,second,third);
    // let weekdayInt = weekdayInstance.getDay();

    // let result = dayOfWeekAsString(weekdayInt);
    // $("#result").text(`${result}`);
  });
});
