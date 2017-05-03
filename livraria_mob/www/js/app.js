
// Incrementa um clique no item da lista
$('.collection-item').on('click', function () {
    var $badge = $('.badge', this);

    if ($badge.hasClass("has-count")) {
        var value = parseInt($badge.text());
        $badge.text("");
        $badge.text(value + 1);
    } else {
        $badge.addClass("has-count");
        $badge.text(1);
    }
});

$('.modal-trigger').leanModal();

$('#confirmar').on('click', function () {
    var texto = '';
    $('.badge.has-count').parent().each(function () {
        var produto = this.firstChild.textContent;
        var quantidade = $(this).find(".badge").text();
        texto += produto + ': ' + quantidade + ', ';
    });
    $('#resumo').text(texto);
});

$('.collection').on('click', '.badge', function () {
    $(this).remove();
    return false;
});

$('.acao-limpar').on('click', function () {
    $('#numero-vendedor').val('');
    $('.badge').removeClass("has-count");
    $('.badge').text("");
});
