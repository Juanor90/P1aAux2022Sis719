function fanoro() {
Swal.fire({
    title: "SEMINARIO DE SISTEMAS",
    text: "Aux Practica N°1",

    showCancelButton: false,
    confirmButtonText: "Continuar",
    cancelButtonText: "Cancelar",
})
.then(resultado => {
    if (resultado.value) {
        // Hicieron click en "Sí"
      Swal.fire({
        icon:'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 1500
      })
    } 
});
  }