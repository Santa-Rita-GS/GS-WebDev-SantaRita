#Faça um slide show da forma mais simples possível e me explique como foi feito.
HTML

            <div class="section-titleslide">
            <section class="slideshow">
                <img class="slide active" src="./assets/img/imagem1.jpg">
                <img class="slide" src="./assets/img/imagem2.jpg">
                <img class="slide" src="./assets/img/imagem3.jpg">
            </section>

JS

const slides = document.querySelectorAll(".slide");
let i = 0;
setInterval(() => {
    slides[i].classList.remove("active");
    i++;
    if(i == slides.length){
        i = 0;
    }
    slides[i].classList.add("active");
},3000);

Explicação:

Esse código cria um slideshow automático de imagens.
Ele primeiro seleciona todas as imagens (.slide) e cria uma variável (i) para controlar qual imagem está aparecendo.
A cada 3 segundos (setInterval), o JavaScript remove a classe active da imagem atual, passa para a próxima imagem (i++) e adiciona active nela.
Quando chega na última imagem, ele volta para a primeira, criando um loop infinito.


PROMPT
Quiz dinâmico contendo 10 perguntas sobre o tema Exibição do resultado final do quiz Faça pra mim usando html e javascript puro, e faça as perguntas sobre o assunto alagamento

    <div class="container">

        <h1>Quiz sobre Alagamentos 🌧️</h1>

        <div id="quiz">
            <h2 id="question"></h2>

            <div id="answers"></div>

            <button id="next-btn">Próxima Pergunta</button>
        </div>

        <div id="result" class="hide">
            <h2>Quiz Finalizado!</h2>
            <p id="score"></p>

            <button onclick="location.reload()" id="restart-btn">
                #Refazer Quiz
            </button>
        </div>

    </div>

    <script src="script.js"></script>

    const questions = [
{
    question: "O que é um alagamento?",
    answers: [
        { text: "Acúmulo temporário de água em ruas e áreas urbanas", correct: true },
        { text: "Falta de água em reservatórios", correct: false },
        { text: "Aumento da temperatura", correct: false },
        { text: "Movimento de placas tectônicas", correct: false }
    ]
},
{
    question: "Qual é uma das principais causas dos alagamentos urbanos?",
    answers: [
        { text: "Excesso de árvores", correct: false },
        { text: "Bueiros entupidos por lixo", correct: true },
        { text: "Baixa umidade do ar", correct: false },
        { text: "Ventos fortes", correct: false }
    ]
},
{
    question: "O descarte incorreto de lixo pode:",
    answers: [
        { text: "Melhorar a drenagem", correct: false },
        { text: "Entupir galerias pluviais", correct: true },
        { text: "Evitar enchentes", correct: false },
        { text: "Reduzir as chuvas", correct: false }
    ]
},
{
    question: "Durante um alagamento, o mais seguro é:",
    answers: [
        { text: "Atravessar áreas inundadas", correct: false },
        { text: "Buscar locais elevados e seguros", correct: true },
        { text: "Dirigir rapidamente pela água", correct: false },
        { text: "Ficar próximo a postes elétricos", correct: false }
    ]
},
{
    question: "As enchentes podem causar:",
    answers: [
        { text: "Melhoria da infraestrutura", correct: false },
        { text: "Doenças e prejuízos materiais", correct: true },
        { text: "Redução do trânsito", correct: false },
        { text: "Menor consumo de água", correct: false }
    ]
},
{
    question: "Qual doença pode estar relacionada à água contaminada das enchentes?",
    answers: [
        { text: "Leptospirose", correct: true },
        { text: "Miopia", correct: false },
        { text: "Asma", correct: false },
        { text: "Anemia", correct: false }
    ]
},
{
    question: "O que ajuda a reduzir alagamentos?",
    answers: [
        { text: "Jogar lixo nos rios", correct: false },
        { text: "Manter sistemas de drenagem limpos", correct: true },
        { text: "Impermeabilizar toda a cidade", correct: false },
        { text: "Remover áreas verdes", correct: false }
    ]
},
{
    question: "Qual tecnologia pode ajudar no monitoramento de enchentes?",
    answers: [
        { text: "Sensores de nível da água", correct: true },
        { text: "Micro-ondas doméstico", correct: false },
        { text: "Televisão", correct: false },
        { text: "Ventilador", correct: false }
    ]
},
{
    question: "Chuvas intensas podem causar alagamentos porque:",
    answers: [
        { text: "A água excede a capacidade de drenagem", correct: true },
        { text: "Diminuem o nível dos rios", correct: false },
        { text: "Secam o solo rapidamente", correct: false },
        { text: "Reduzem a umidade", correct: false }
    ]
},
{
    question: "Qual atitude contribui para a prevenção de enchentes?",
    answers: [
        { text: "Descartar lixo corretamente", correct: true },
        { text: "Tampar bueiros", correct: false },
        { text: "Jogar entulho em córregos", correct: false },
        { text: "Desmatar margens de rios", correct: false }
    ]
}
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQuestion = 0;
let score = 0;

function showQuestion() {

    resetState();

    const q = questions[currentQuestion];

    questionElement.textContent =
        `${currentQuestion + 1}. ${q.question}`;

    q.answers.forEach(answer => {

        const button = document.createElement("button");

        button.textContent = answer.text;
        button.classList.add("option");

        button.addEventListener("click", () => {
            selectAnswer(answer.correct, button);
        });

        answersElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answersElement.innerHTML = "";
}

function selectAnswer(correct, selectedButton) {

    const buttons =
        document.querySelectorAll(".option");

    buttons.forEach(button => {
        button.disabled = true;
    });

    if(correct){
        selectedButton.style.backgroundColor = "#90ee90";
        score++;
    } else {
        selectedButton.style.backgroundColor = "#ff9999";
    }

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    } else {
        showResult();
    }
});

function showResult(){

    document.getElementById("quiz")
        .classList.add("hide");

    document.getElementById("result")
        .classList.remove("hide");

    document.getElementById("score").innerHTML =
        `Você acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas!`;
}

showQuestion();