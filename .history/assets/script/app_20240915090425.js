document.addEventListener('DOMContentLoaded', function() {
    // Assumindo que 'sintomas' é um array de sintomas já disponível no arquivo sintomas.js
    let filtrosSintomasDiv = document.getElementById('filtros-sintomas');
    
    // Itera sobre o array de sintomas e cria as caixas de seleção (checkboxes)
    sintomas.forEach(s => {
        filtrosSintomasDiv.innerHTML += `
            <label>
                <input type="checkbox" class="sintoma-checkbox" value="${s.toLowerCase()}">
                ${s}
            </label><br>
        `;
    });
});

function pesquisar() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let main = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Obtém todos os checkboxes de sintomas e filtra apenas os selecionados
    let checkboxes = document.querySelectorAll(".sintoma-checkbox");
    let sintomasSelecionados = Array.from(checkboxes)
        .filter(cb => cb.checked) // Filtra os checkboxes que estão marcados
        .map(cb => cb.value);     // Mapeia os valores (sintomas) dos checkboxes selecionados

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre os dados de pesquisa (agora referenciando "dataDoencas")
    dataDoencas.forEach(dado => {
        // Normaliza os valores de título, descrição, sintomas e tags para letras minúsculas
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let sintomas = dado.sintomas.toLowerCase().split(',').map(s => s.trim()); // Converte sintomas para array
        let tags = dado.tags.toLowerCase();

        // Verifica se o título, descrição ou tags contêm o termo de pesquisa
        let correspondePesquisa = titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa);

        // Verifica se todos os sintomas selecionados estão presentes no item atual
        let correspondeSintomas = sintomasSelecionados.every(s => sintomas.includes(s));

        // Se o termo de pesquisa for encontrado E os sintomas selecionados forem correspondentes (ou nenhum sintoma estiver selecionado)
        if (correspondePesquisa && (sintomasSelecionados.length === 0 || correspondeSintomas)) {
            // Adiciona o HTML correspondente ao resultado na variável 'resultados'
            resultados += `
                <div class="item-resultado">
                    <h2 class="black-ops-one-regular">${dado.titulo}</h2>
                    <h4 class="electrolize-regular">Descrição</h4>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <h4 class="electrolize-regular">Sintomas</h4>
                    <p class="descricao-meta">${dado.sintomas}</p>
                    <h4 class="electrolize-regular">Prevenção</h4>
                    <p class="descricao-meta">${dado.prevencao}</p>
                    <h4 class="electrolize-regular">Tratamento</h4>
                    <p class="descricao-meta">${dado.tratamento}</p>
                    <a href="${dado.link}" target="_blank">${dado.link}</a>
                </div>
            `;
        }
    });

    // Se não houver resultados correspondentes, exibe uma mensagem de "Nada foi encontrado"
    if (!resultados) {
        main.innerHTML = "<p><center>Nada foi encontrado</center></p>";
    } else {
        // Caso contrário, exibe os resultados encontrados
        main.innerHTML = resultados;
    }
}
