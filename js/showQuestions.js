import { temaCSS } from "./tema_css.js";
import { temaHTML } from "./tema_html.js";
import { temaJavaScript } from "./tema_js.js";
import { verifyQuestions } from "./verifyQuestions.js";

export function showQuestions(theme){

    const headerTitle = document.querySelector('header h1');
    const mainSection = document.querySelector("main");
    const footerSection = document.querySelector("footer");
    headerTitle.textContent =  `Quiz tema - ${theme}`;

    updateFooter();
    if(theme === "HTML"){
        putQuestionsFromTheme(temaHTML); 
        verifyQuestions(temaHTML);

    }
    else if(theme === "CSS"){
        putQuestionsFromTheme(temaCSS); 
        verifyQuestions(temaCSS);

    }
    else if(theme === "JS"){
        putQuestionsFromTheme( temaJavaScript ); 
        verifyQuestions(temaJavaScript);

    }
    else{
        headerTitle.textContent = 'Página não encontrada';
        mainSection.innerHTML =`<div class="not-found">
            <img src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" width='500px'>
        </div>`
    }


    function putQuestionsFromTheme(themeSelected){

    let formHTML = '<form class="questionary-form">';
    themeSelected.map((question, index) => {
            formHTML += ` 
            <article name="question${index}" class="question-container">
              <h2> ${index+1}.  ${question.title}</h2>  
              <div class="question-body">
              `
            question.value.forEach((value,vIndex) =>{
                formHTML += ` 
                <label>
                    <input type="radio" name="question${index}" value="${vIndex}" required/>
                    ${value}
                </label>  
            `
            });
            formHTML += `</div> </article>`;
        });
        formHTML += '</form>';
        mainSection.innerHTML = formHTML;
    }

    function updateFooter(){
        footerSection.innerHTML = `
            <button type="submit" class="done">Concluir</button>
            <button type="button" class="restart">Reiniciar</button>
            <button type="button" class="next">Avançar </button>
        ` 
    }
}