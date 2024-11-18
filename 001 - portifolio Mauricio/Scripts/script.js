const body = document.querySelector("body");



//EFEITO ZOOM QUANDO DESCE O SCROLL 
window.addEventListener('scroll', function () {
    page_home = document.getElementById("page_home");

    // Verifica se a página foi rolada para baixo
    if (window.scrollY > 120) {
        page_home.style.backgroundSize = "150%";
    } else {
        page_home.style.backgroundSize = "100%";
    }
});




//ALTERNAR EM MODO ESCURO E CLARO
const mode_toggle = document.getElementById("mode_toggle");
const mode_toggle_ball = document.getElementById("mode_toggle_ball");
const toggle_bar1 = document.getElementById("toggle_bar1");
const toggle_bar2 = document.getElementById("toggle_bar2");
const toggle_bar3 = document.getElementById("toggle_bar3");

var toggle_social_media = document.getElementById("toggle_social_media");
var mode_toggle_ball_status = true;
console.log(mode_toggle_ball_status);

function move_mode_toggle_ball() {
    //DEFINI A POSICAO E TAMANHO DO BACKG. PQ ELE REINICIA COM A DECLARAÇÃO DE CIMA
    toggle_social_media.style.border = "1px solid white"
    toggle_social_media.style.background = "transparent"
    toggle_bar1.style.background = "white"
    toggle_bar2.style.background = "white"
    toggle_bar3.style.background = "white"


    console.log(mode_toggle_ball_status)
    if (mode_toggle_ball_status) {
        mode_toggle_ball.style.right = "2px"
        console.log(mode_toggle_ball_status)
    } if (mode_toggle_ball_status == false) {
        mode_toggle_ball.style.right = "33px"
        page_home.style.background = 'url("../Images/wpp/wpp_forest.jpg")';
        page_home.style.backgroundPosition = "center"
        page_home.style.backgroundSize = "cover"
        toggle_social_media.style.background = "white"
        toggle_social_media.style.border = "1px solid black"
        toggle_bar1.style.background = "black"
        toggle_bar2.style.background = "black"
        toggle_bar3.style.background = "black"
        mode_toggle.style.background = "white"
    }
    mode_toggle_ball_status = !mode_toggle_ball_status
};

//ANIMAÇÃO DA AREA DE REDES SOCIAIS
var instagram_icon = document.getElementById("instagram_icon");
var linkedin_icon = document.getElementById("linkedin_icon");
function social_media_animation_active() {
    instagram_icon.style.left = "5px"
    setTimeout(() => {
        linkedin_icon.style.left = "5px"
    }, 500)
    console.log("ativado")
}
function social_media_animation_disable() {
    instagram_icon.style.left = "70px"
    linkedin_icon.style.left = "70px"
    console.log("desativado")
}


//PALAVRAS DO HOME APARECENDO
const impact_phrase = document.getElementById("impact_phrase");
const impact_word = document.getElementById("impact_word");

setTimeout(() => {
    impact_phrase.style.color = "white";
    impact_word.style.color = "white";
    impact_word.style.textShadow = "0px 0px 1px #333";
}, 1000)



//SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



function enviarEmail() {
    // Captura os valores dos campos de input
    const name_form = document.getElementById('name_form').value;
    const lastname_form = document.getElementById('lastname_form').value;
    const profission_form = document.getElementById('profission_form').value;
    const tel_form = document.getElementById('tel_form').value;
    const personal_email_form = document.getElementById('personal_email_form').value;
    const subject_form = document.getElementById('subject_form').value;
    const description_form = document.getElementById('description_form').value;

    // Captura o valor da área de serviço selecionada
    const service_select = document.getElementById('service_select');
    const selected_service = service_select.value;

    // Verifica se uma área de serviço foi selecionada
    if (!selected_service) {
        alert('Por favor, selecione uma área de serviço.');
        return;
    }

    // Constrói o corpo do e-mail com os valores capturados, incluindo o serviço selecionado
    const corpoEmail = `
        Nome: ${name_form} ${lastname_form}
        Profissão: ${profission_form}
        Telefone: ${tel_form}
        E-mail de Contato: ${personal_email_form}
        Área de Serviço Selecionada: ${selected_service}
        Descrição:
        ${description_form}

        -----------------------------------------------
        Para dar continuidade ao seu atendimento, clique em 'Enviar'. As suas informações serão enviadas para que possamos iniciar o processo de resposta e solução.
    `;

    // Cria a URL do mailto com os parâmetros necessários
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=projetosmfs1@gmail.com&su=${encodeURIComponent(subject_form)}&body=${encodeURIComponent(corpoEmail)}`;

    // Executa o mailto: com um atraso mínimo para garantir que é uma ação do usuário
    setTimeout(() => {
        window.location.href = mailtoLink;
    }, 100); // 100ms de atraso para garantir a execução como interação do usuário
}


