$(document).ready(function(){
  $('header button').click(function(){
    $('form').slideDown();
  })
  $('#btn-cancelar').click(function(){
    $('form').slideUp();
  })
  $('form').submit(function(e){
    e.preventDefault();
    const enderecoNovaImg = $('#endereco-img-nova').val();
    console.log(enderecoNovaImg);
    const novoItem = $('<li style="display:none"></li>');
    $(`<img src="${enderecoNovaImg}"/>`).appendTo(novoItem);
    $(`
        <div class="overlay-imagem-link">
          <a href="${enderecoNovaImg}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
          </a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn('2s');
    $('#endereco-img-nova').val('');
  })

  /* $('form').on('submit', function(e){
    e.preventDefault();
  }) */
})