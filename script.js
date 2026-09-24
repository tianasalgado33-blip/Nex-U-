document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("asesoriaForm");
  const modal = document.getElementById("successModal");
  const closeModal = document.getElementById("closeModal");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const data = {
        nombre: document.getElementById("nombre")?.value || "",
        correo: document.getElementById("correo")?.value || "",
        nivel: document.getElementById("nivel")?.value || "",
        motivo: document.getElementById("motivo")?.value || "",
        mensaje: document.getElementById("mensaje")?.value || "",
        fecha: new Date().toLocaleString("es-CO")
      };

      // Guarda la última solicitud en el navegador
      localStorage.setItem(
        "nexu_ultima_solicitud",
        JSON.stringify(data)
      );

      // Muestra el mensaje de confirmación
      if (modal) {
        modal.classList.add("show");
      }

      // Limpia el formulario
      form.reset();
    });
  }

  // Cerrar ventana de confirmación
  if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
      modal.classList.remove("show");
    });

    // Cerrar haciendo clic fuera de la ventana
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  }
});
