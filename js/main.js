function consultar() {
    $(".barra-progresso").show();
    var cep = document.getElementById('cep').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`

    $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
            console.log(response);
            document.getElementById('rua').innerHTML = response.logradouro;
            document.getElementById('bairro').innerHTML = response.bairro;
            document.getElementById('cidade').innerHTML = response.localidade;
            //document.getElementById('uf').innerHTML = response.uf
            $('#uf').html(response.uf);
            $('#tituloCep').html(`CEP ${response.cep}`);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
};

$(function() {
    $(".cep").hide();
    $(".barra-progresso").hide();
});