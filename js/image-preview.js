function exibirMiniaturas(){
    // seleciona o input file
    let input = document.getElementById('input-file');

    // evento para quando o usuário selecionar imagens
    input.addEventListener('change', function(e){
        let tgt = e.target;
        let files = tgt.files;
        let fr = new FileReader();
        fr.onload = function(){
            document.getElementById('min-a').src = fr.result;
        }
        fr.readAsDataURL(files[0]);
        console.log(fr);
        console.log(tgt);
        console.log(files);
    });
}