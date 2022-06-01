function msgInputFile(evento){
  let itens = document.getElementById('input-file').files.length;
  if(itens <= 1){
    document.getElementById('form-vistoria-container-foto-miniaturas-label-alerta').innerHTML = itens + ' imagem carregada com sucesso!';
  }else{
    document.getElementById('form-vistoria-container-foto-miniaturas-label-alerta').innerHTML = itens + ' imagens carregadas com sucesso!';
  }
}