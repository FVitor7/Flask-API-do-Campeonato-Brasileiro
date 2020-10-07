url = 'https://campbrapi.herokuapp.com/api/times/'
$.getJSON(url, function(result) {
  // result é o json obtido
  $(document).ready(function() {
    for (i = 0; i < result.length; i++) {
      line = createLine(result[i]);
      $('#customers tbody').append(line);
    }
  });
});

function createLine(obj){
    var line = '<tr>'+
    '<td>'+ obj.posicao +'</td>'+
    '<td>'+ obj.time +'</td>'+
    '<td>'+ obj.pontos +'</td>'+
    '<td>'+ obj.jogos +'</td>'+
    '<td>'+ obj.vitorias +'</td>'+
    '<td>'+ obj.empates +'</td>'+
    '<td>'+ obj.derrotas +'</td>'+
    '<td>'+ obj.gols_pro +'</td>'+
    '<td>'+ obj.gols_sofridos +'</td>'+
    '<td>'+ obj.cartoes_amarelos +'</td>'+
    '<td>'+ obj.cartoes_vermelhos +'</td>'+
    '<td>'+ obj.aproveitamento +'</td>'+
    '</tr>';
    return line;
}

