﻿$('.collection-item').on('click', function () {
    var $badge = $('.badge', this),
        count = $(this).find("span");

    if ($badge.length == 0 || $badge.text() == "") {
        $badge = $('<span class="badge brown-text">0</span>')
        .appendTo(this);
    }

    $badge.text(parseInt($badge.text()) + 1);
});
    var texto = '';
    $('.badge').parent().each(function () {
        var produto = this.firstChild.textContent;
        var quantidade = this.lastChild.textContent;
        texto += produto + ': ' + quantidade + ', ';
    });
    $('#resumo').text(texto);
});

$('.collection').on('click', '.badge', function(){
    $(this).remove();
    return flse;
});
    $('#numero-vendedor').val('');
    $('.badge').remove();
});