
window.onload = function() {

    const form = document.getElementById("consultaForm");

   
    form.addEventListener("submit", function(event) {
     
        event.preventDefault();

     
        alert("Gracias por contactarse con estudio juridico UADE. Nuestros representantes se pondran en contacto a la brevedad.");
        
      
        form.reset();
    });
};
