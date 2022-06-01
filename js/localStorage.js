// gera uma string com todos os dados do formulário e armazena no local storage
function gerarDados(){
    
    // string com o nome das fotos tiradas do equipamento
    let stringFiles = gerarStringFiles();

    // string com cnpj que será usada como 'key' no local storage
    let key = JSON.stringify(document.getElementById('cnpj').value + '_');
    key = key.replace(/"/g,'');
    
    // string final com dados do formulário + dados do input file
    let stringData = {
        nomeDaEmpresa: document.getElementById('nome-da-empresa').value,
        cnpj: document.getElementById('cnpj').value,
        identificacaoDaFonte: document.getElementById('identificacao-da-fonte').value,
        descricaoDoProcesso: document.getElementById('descricao-do-processo').value,
        marca: document.getElementById('marca').value,
        combustivel: document.getElementById('combustivel').value,
        producaoDeVapor: document.getElementById('producao-de-vapor').value,
        potenciaTermicaNominal: document.getElementById('potencia-termica-nominal').value,
        tratamento: document.getElementById('tratamento').value,
        tipoDeFonte: document.getElementById('tipo-de-fonte').value,
        horasDeTrabalhoSemanal: document.getElementById('horas-de-trabalho-semanal').value,
        horasDeTrabalhoAnual: document.getElementById('horas-de-trabalho-anual').value,
        enquadramentoNaLegislacao: document.getElementById('enquadramento-na-legislacao').value,
        alturaDaChamine: document.getElementById('altura-da-chamine').value,
        diametroDaChamine: document.getElementById('diametro-da-chamine').value,
        padraoDeEmissao: document.getElementById('padrao-de-emissao').value,
        frequenciaDeAmostragem: document.getElementById('frequencia-de-amostragem').value,
        observacoes: document.getElementById('observacoes').value,
        imagens: stringFiles
    }

    // verifica se existe registro com a key atual no local storage e gera uma nova key se necessário
    key = verificarStorage(key);
    console.log(key);

    // grava os dados no local storage
    localStorage.setItem(key,JSON.stringify(stringData));
}

// gera uma string com os nomes dos arquivos selecionados no input file
function gerarStringFiles(){
    let temp = document.getElementById('input-file').files;
    let stringFiles;
    for(let item of temp){
        if(stringFiles == undefined){
            stringFiles = item.name + ';';
        }else{
            stringFiles = stringFiles + item.name + ';';
        }
    }
    return stringFiles;
}

// verifica se existem registros no local storage com a key específica
// se o registro existir, itera o 'i' no final do cnpj para criar nova key
function verificarStorage(key){
    let i=0;
    let temp = 'x';
    while(temp != null){
        temp = localStorage.getItem(key + i);
        if(temp == null){
            return key + i;
        }else{
            i++;
        }
    }
}