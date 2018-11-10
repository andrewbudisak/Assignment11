$(document).ready(function(){
 $('button').click(function NewTask() {
      var inputItem = document.getElementById("AddTask").value;
      var i = document.createTextNode(inputItem);
      var newItem = document.createElement("li");
      newItem.appendChild(i);
      document.getElementById("listed").appendChild(newItem);
    });

    $('ul').on('click', 'li', function(){
        $(this).hide("show");
      });


  
