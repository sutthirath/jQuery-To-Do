$(function() {
    // All DOM code goes here.

    // Element reference
    var $textBox = $('input');
    $textBox.focus();
    var $submitBtn = $('main > button');
    var $ul = $('ul');

    // Submit
    $submitBtn.on('click', function(evt) {
        var $todoText = $textBox.val();
        var $li = $(`<li>${$todoText} <button>x</button></li>`);
        $('ul').append($li);
        $textBox.val(' ');
        $textBox.focus();
    });

    // Delete
    $('ul').on('click', 'li > button', function() {
        $(this).closest('li').fadeOut(1000, function() {
            $(this).remove();
        });
    });
});