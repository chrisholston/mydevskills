$(document).ready(function() {
    $('#newSkill').click(function() {
        var myList = $('#text').val();
        $('#list').append('<li>'+'<button id="remove">'+'X'+'</button>'+myList+'</li>');
        return false;
    });
});
$(document).ready(function() {
    $('#newSkill').click(function() {
        $('#text').val('');
    })
});

$(document).on('click','li', function(){
    $(this).remove();    
  });