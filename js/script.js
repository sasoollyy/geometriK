// BOTÓN "COMENZAR A ESTUDIAR"

const boton = document.querySelector("#botonInicio");

boton.addEventListener("click", function(){

    document.querySelector("#temas").scrollIntoView({
        behavior:"smooth"
    });

});


// MOSTRAR UN TEMA

function mostrarTema(tema){

    // Ocultar todos los temas

    const contenidos =
        document.querySelectorAll(".contenido-tema");

    contenidos.forEach(function(contenido){

        contenido.style.display = "none";

    });


    // Mostrar el tema seleccionado

    const seleccionado =
        document.querySelector("#" + tema);

    seleccionado.style.display = "block";


    // Ir hacia el contenido

    seleccionado.scrollIntoView({
        behavior:"smooth"
    });


    // Si es el quiz, se reinicia desde la primera pregunta

    if(tema === "quiz"){
        iniciarQuiz();
    }

}




function volverTemas(){

    const contenidos =
        document.querySelectorAll(".contenido-tema");

    contenidos.forEach(function(contenido){

        contenido.style.display = "none";

    });

    document.querySelector("#temas").scrollIntoView({
        behavior:"smooth"
    });

}


// QUIZ PAES - 10 PREGUNTAS

const preguntasQuiz = [

    {
        tema:"Triángulos",
        pregunta:"Un triángulo rectángulo tiene catetos de 3 cm y 4 cm. ¿Cuánto mide su hipotenusa?",
        opciones:["5 cm", "6 cm", "7 cm"],
        correcta:0
    },
    {
        tema:"Triángulos",
        pregunta:"Los ángulos interiores de un triángulo miden 50°, 60° y x. ¿Cuál es el valor de x?",
        opciones:["60°", "70°", "80°", "90°"],
        correcta:1
    },
    {
        tema:"Cuadriláteros",
        pregunta:"¿Cuánto suman los ángulos interiores de cualquier cuadrilátero?",
        opciones:["180°", "270°", "360°", "450°"],
        correcta:2
    },
    {
        tema:"Cuadriláteros",
        pregunta:"Un rectángulo mide 8 cm de largo y 5 cm de ancho. ¿Cuál es su área?",
        opciones:["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
        correcta:2
    },
    {
        tema:"Circunferencia",
        pregunta:"Si el radio de una circunferencia es 5 cm, ¿cuánto mide su diámetro?",
        opciones:["5 cm", "10 cm", "15 cm", "25 cm"],
        correcta:1
    },
    {
        tema:"Circunferencia",
        pregunta:"Usando π ≈ 3,14, ¿cuál es el área aproximada de un círculo de radio 4 cm?",
        opciones:["12,56 cm²", "25,12 cm²", "50,24 cm²", "78,5 cm²"],
        correcta:2
    },
    {
        tema:"Cuerpos geométricos",
        pregunta:"¿Cuál es la fórmula del volumen de un cilindro?",
        opciones:["π r² h", "4/3 π r³", "área de la base × altura ÷ 3", "2 π r"],
        correcta:0
    },
    {
        tema:"Cuerpos geométricos",
        pregunta:"Un cubo tiene arista de 4 cm. ¿Cuál es su volumen?",
        opciones:["16 cm³", "48 cm³", "64 cm³", "80 cm³"],
        correcta:2
    },
    {
        tema:"Geometría analítica",
        pregunta:"¿Cuál es la pendiente de la recta que pasa por los puntos A(1, 2) y B(4, 8)?",
        opciones:["1", "2", "3", "6"],
        correcta:1
    },
    {
        tema:"Geometría analítica",
        pregunta:"Calcula la distancia entre los puntos A(0, 0) y B(3, 4).",
        opciones:["4", "5", "6", "7"],
        correcta:1
    }

];

let quizIndice = 0;
let quizPuntaje = 0;
let quizRespondida = false;

function iniciarQuiz(){

    quizIndice = 0;
    quizPuntaje = 0;

    document.querySelector("#quiz-contenedor").style.display = "block";
    document.querySelector("#quiz-final").style.display = "none";

    mostrarPreguntaQuiz();

}

function mostrarPreguntaQuiz(){

    quizRespondida = false;

    const actual = preguntasQuiz[quizIndice];

    document.querySelector("#quizProgreso").textContent =
        "Pregunta " + (quizIndice + 1) + " de " + preguntasQuiz.length + " · " + actual.tema;

    document.querySelector("#quizPregunta").textContent = actual.pregunta;

    const contenedorOpciones = document.querySelector("#quizOpciones");
    contenedorOpciones.innerHTML = "";

    actual.opciones.forEach(function(opcion, indice){

        const boton = document.createElement("button");

        boton.textContent = opcion;
        boton.className = "opcion-quiz";
        boton.addEventListener("click", function(){
            responderQuiz(indice);
        });

        contenedorOpciones.appendChild(boton);

    });

    document.querySelector("#resultado").textContent = "";
    document.querySelector("#quizSiguiente").style.display = "none";

}

function responderQuiz(seleccion){

    if(quizRespondida){
        return;
    }

    quizRespondida = true;

    const actual = preguntasQuiz[quizIndice];
    const resultado = document.querySelector("#resultado");
    const opciones = document.querySelectorAll(".opcion-quiz");

    opciones.forEach(function(boton, indice){

        if(indice === actual.correcta){
            boton.classList.add("opcion-correcta");
        }else if(indice === seleccion){
            boton.classList.add("opcion-incorrecta");
        }

    });

    if(seleccion === actual.correcta){

        quizPuntaje++;

        resultado.textContent = "Correcto.";
        resultado.style.color = "#2f7a3d";

    }else{

        resultado.textContent =
            "Incorrecto. La respuesta correcta era: " + actual.opciones[actual.correcta];

        resultado.style.color = "#b23a3a";

    }

    document.querySelector("#quizSiguiente").style.display = "inline-block";

}

function siguientePreguntaQuiz(){

    quizIndice++;

    if(quizIndice < preguntasQuiz.length){

        mostrarPreguntaQuiz();

    }else{

        document.querySelector("#quiz-contenedor").style.display = "none";
        document.querySelector("#quiz-final").style.display = "block";

        document.querySelector("#quizPuntajeFinal").textContent =
            "Obtuviste " + quizPuntaje + " de " + preguntasQuiz.length + " respuestas correctas.";

    }

}

document.querySelector("#quizSiguiente").addEventListener("click", siguientePreguntaQuiz);
document.querySelector("#quizReiniciar").addEventListener("click", iniciarQuiz);
