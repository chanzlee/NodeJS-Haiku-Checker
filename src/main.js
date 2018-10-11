import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Haiku } from './haiku.js';

$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    let first = $("#first").val();
    let second = $("#second").val();
    let third = $("#third").val();
    let haikuInstance = new Haiku(first,second,third);
    let haikuResult = haikuInstance.haikuChecker();

    $("#result").text(`${haikuResult}`);
  });
});
