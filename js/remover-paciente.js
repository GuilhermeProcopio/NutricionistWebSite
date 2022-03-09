var pacientes = document.querySelectorAll(".paciente");
var tabelaDePacientes = document.querySelector("#tabela-pacientes");

tabelaDePacientes.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
      
      event.target.parentNode.remove();
    }, 500);



});
