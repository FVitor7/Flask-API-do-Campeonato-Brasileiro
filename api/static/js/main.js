url = 'https://campbrapi.herokuapp.com/api/times/'
$.getJSON(url, function(result) {
  // result é o json obtido
  $(document).ready(function() {
    for (i = 0; i < 4; i++) {
      line = createLine(result[i]);
      $('#customers tbody').append(line);
    }
    
    for (i = 4; i < 6; i++) {

      line = createLine2(result[i]);

      $('#customers tbody').append(line);
    }
    
    for (i = 6; i < 12; i++) {



      line = createLine3(result[i]);

      $('#customers tbody').append(line);
    }
    for (i = 12; i < 16; i++) {

      line = createLine4(result[i]);

      $('#customers tbody').append(line);
    }
    for (i = 16; i < 20; i++) {

      line = createLine5(result[i]);
      $('#customers tbody').append(line);
    }
  });
});



function createLine(obj){
    var line = '<tr>'+
    '<td bgcolor="#13b055"><font color="#fff">'+ obj.posicao+'</font></td>'+
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

function createLine2(obj){

    var line = '<tr>'+

    '<td bgcolor="#19d419"><font color="#fff">'+ obj.posicao+'</font></td>'+
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

function createLine3(obj){



    var line = '<tr>'+

    '<td bgcolor="#105ae3"><font color="#fff">'+ obj.posicao+'</font></td>'+
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


function createLine4(obj){

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

function createLine5(obj){



    var line = '<tr>'+

    '<td bgcolor="#c40a0a"><font color="#fff">'+ obj.posicao+'</font></td>'+
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
