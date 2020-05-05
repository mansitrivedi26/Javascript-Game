jQuery(document).ready(function($) {
    "use strict";
var collect_data = [];
var button = document.getElementById('register_user');
button.addEventListener('click', getdata);

function getdata(){
    var form_data = document.getElementById('name').value;
 alert(form_data);
}

});