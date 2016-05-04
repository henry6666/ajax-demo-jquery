
//javaScript
// Använde jQuery och Ajax

$('#my-button').click(function){console.log("Knappen klickades")
  
  $.get("http://api.github.com/zen", function(data,textStatus, jqXHR){
    
    console.log(textstatus);
    
    $('#show-server-text').text(data);
    
  })
  
});
