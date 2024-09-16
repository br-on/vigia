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

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Obtém todos os checkboxes e filtra os sintomas selecionados
    let checkboxes = document.querySelectorAll(".sintoma-checkbox");
    let sintomasSelecionados = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    data.forEach(dado => {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let sintomas = dado.sintomas.toLowerCase().split(',').map(s => s.trim());
        let tags = dado.tags.toLowerCase();

        // Verifica se o título, descrição ou tags correspondem ao termo de pesquisa e se todos os sintomas selecionados estão presentes
        let correspondePesquisa = titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa);
        let correspondeSintomas = sintomasSelecionados.every(s => sintomas.includes(s));

        if (correspondePesquisa && (sintomasSelecionados.length === 0 || correspondeSintomas)) {
            // Cria o HTML para o resultado correspondente
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

    // Se não houver resultados, exibe uma mensagem
    if (!resultados) {
        main.innerHTML = "<p><center>Nada foi encontrado</center></p>";
    } else {
        main.innerHTML = resultados;
    }
}
