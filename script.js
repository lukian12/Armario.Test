const nomeArquivo = 'armarios.json';

function mostrarDados(){
function extrairDados() {
 fetch(nomeArquivo)
.then(response => response.json())
 .then(data => {
const todosRets = data.armario;
for (k = 0; k < todosRets.length; k++){
const armario = document.createElement('div');
 armario.innerHTML = todosRets[k].nomeArmario;
armario.setAttribute("class",todosRets[k].estado);
document.body.appendChild(armario);
                
}

    })
     .catch(error => {
     console.error('Erro ao ler o arquivo JSON:', error);
    });
} 
    
    extrairDados();
}