function pesquisar() {
   // Obtém a seção onde os resultados da pesquisa serão exibidos.
   let section = document.getElementById("resultados-pesquisa");

   let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nadda
    if (!campoPesquisa){
        section.innerHTML = "Nenhuma banda foi encontrada. Você precisa digitar o nome de alguma banda ou de algum integrante dela"
        return
    }

   campoPesquisa = campoPesquisa.toLowerCase();

   // Inicializa uma string vazia para armazenar os resultados da pesquisa.
   let resultados = "";
   let titulo = "";
   let descricao = "";
   let tags = ""; 

   // Itera sobre cada dado na lista de dados.
   for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || (descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))){
       // Constrói o HTML para cada item do resultado da pesquisa, 
       // incluindo o título, descrição e link para mais informações.
       resultados += `
       <div class="item-resultado">
           <h2>
               <a href="#" target="_blank">${dado.titulo}</a>
           </h2>
           <p class="descricao-meta">${dado.descricao} </p> 
           <a href=${dado.link} target="_blank">Mais informações sobre a banda</a>
           <a href=${dado.canalYoutube} target="_blank">Canal do Youtube</a> 
       </div>
   `;
    }
   }

   if (!resultados ) {
        resultados = "<p>Nada foi encontrado</p>"
   }

   // Atribui o HTML gerado para a seção de resultados.
   section.innerHTML = resultados;
}




