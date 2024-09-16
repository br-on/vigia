document.addEventListener('DOMContentLoaded', function() {
    // Carregar sintomas iniciais (se necessário)
});


// Função para exibir os sintomas ao clicar em um grupo
function exibirSintomasPorGrupo(grupoId) {
    let resultadosSintomasDiv = document.getElementById("resultados-pesquisa");
    resultadosSintomasDiv.innerHTML = ""; // Limpar resultados anteriores

    // Filtrar sintomas pelo grupo clicado
    let sintomasEncontrados = dataSintomas.filter(sintoma => 
        sintoma.grupo_sintoma.toLowerCase() === grupoId.toLowerCase()
    );

    // Exibir sintomas filtrados
    if (sintomasEncontrados.length > 0) {
        sintomasEncontrados.forEach(sintoma => {
            let divSintoma = document.createElement('div');
            divSintoma.className = 'sintoma-item';

            // Atribui cor específica baseada no grupo do sintoma
            divSintoma.style.backgroundColor = coresPorGrupo[grupoId.toLowerCase()] || '#ccc'; // Se não houver cor definida, usa cinza

            divSintoma.textContent = sintoma.titulo_sintoma;
            divSintoma.addEventListener('click', () => adicionarSintomaEscolhido(sintoma));
            resultadosSintomasDiv.appendChild(divSintoma);
        });
    } else {
        resultadosSintomasDiv.innerHTML = '<p>Nenhum sintoma encontrado para este grupo.</p>';
    }
}

// Função para configurar o clique nos grupos
function configurarEventosDeCliqueNosGrupos() {
    // Seleciona todas as divs de grupos de sintomas
    const grupos = document.querySelectorAll('.grupo');

    // Adiciona o evento de clique para cada grupo
    grupos.forEach(grupo => {
        grupo.addEventListener('click', () => {
            exibirSintomasPorGrupo(grupo.id); // Exibe sintomas ao clicar no grupo
        });
    });
}

// Chama essa função quando a página carrega
window.onload = configurarEventosDeCliqueNosGrupos;


// Função do botão pesquisar
function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultadosSintomasDiv = document.getElementById("resultados-pesquisa");
    resultadosSintomasDiv.innerHTML = ""; // Limpar resultados anteriores

    // Filtra sintomas que correspondem ao texto digitado
    let sintomasEncontrados = dataSintomas.filter(sintoma => 
        sintoma.titulo_sintoma.toLowerCase().includes(campoPesquisa) ||
        sintoma.grupo_sintoma.toLowerCase().includes(campoPesquisa) 
    );

    // Exibir sintomas encontrados
    sintomasEncontrados.forEach(sintoma => {
        let divSintoma = document.createElement('div');
        divSintoma.className = 'sintoma-item';
        divSintoma.style.backgroundColor = coresPorGrupo[grupoId.toLowerCase()] || '#ccc';
        divSintoma.textContent = sintoma.titulo_sintoma;
        divSintoma.addEventListener('click', () => adicionarSintomaEscolhido(sintoma));
        resultadosSintomasDiv.appendChild(divSintoma);
    });
}

function adicionarSintomaEscolhido(sintoma) {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");
    let divEscolhido = document.createElement('div');
    divEscolhido.className = 'sintoma-escolhido';
    divEscolhido.textContent = sintoma.titulo_sintoma;
    sintomasEscolhidosDiv.appendChild(divEscolhido);
    
    // Remover o sintoma da lista de sintomas encontrados
    let sintomaItems = document.querySelectorAll('#resultados-pesquisa .sintoma-item');
    sintomaItems.forEach(item => {
        if (item.textContent === sintoma.titulo_sintoma) {
            item.remove();
        }
    });

    // Opcional: Se quiser mostrar as doenças relacionadas, chame uma função aqui
    mostrarDoencasRelacionadas();
}

function mostrarDoencasRelacionadas() {
    let sintomasEscolhidosDiv = document.getElementById("sintomas-escolhidos");
    let sintomasEscolhidos = Array.from(sintomasEscolhidosDiv.children).map(div => div.textContent);

    let resultadosDoencasDiv = document.getElementById("resultados-doencas");
    resultadosDoencasDiv.innerHTML = ""; // Limpar resultados anteriores

    dataDoencas.forEach(doenca => {
        let sintomasDoenca = doenca.sintomas.toLowerCase().split(',').map(s => s.trim());
        let correspondeSintomas = sintomasEscolhidos.every(s => sintomasDoenca.includes(s.toLowerCase()));

        if (correspondeSintomas) {
            resultadosDoencasDiv.innerHTML += `
                <div class="item-resultado">
                    <h2 class="black-ops-one-regular">${doenca.titulo}</h2>
                    <h4 class="electrolize-regular">Descrição</h4>
                    <p class="descricao-meta">${doenca.descricao}</p>
                    <h4 class="electrolize-regular">Sintomas</h4>
                    <p class="descricao-meta">${doenca.sintomas}</p>
                    <h4 class="electrolize-regular">Prevenção</h4>
                    <p class="descricao-meta">${doenca.prevencao}</p>
                    <h4 class="electrolize-regular">Tratamento</h4>
                    <p class="descricao-meta">${doenca.tratamento}</p>
                    <a href="${doenca.link}" target="_blank">${doenca.link}</a>
                </div>
            `;
        }
    });
}

// Função para gerar cor aleatória
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
