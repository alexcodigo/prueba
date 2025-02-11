
document.getElementById("toggleButton").addEventListener("click", function () {
    const content = document.getElementById("expandableContent");
    content.classList.toggle("show");

const icon = this.querySelector("i");
if (content.classList.contains("show")) {
    icon.classList.replace("fa-chevron-down", "fa-chevron-up");
} else {
    icon.classList.replace("fa-chevron-up", "fa-chevron-down");
}
});

document.addEventListener('DOMContentLoaded', function () {
var modalObra = document.getElementById('modalObra');
modalObra.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var imageSrc = button.getAttribute('data-bs-src');
    var title = button.getAttribute('data-bs-title');
    var description = button.getAttribute('data-bs-description');

    var modalTitle = modalObra.querySelector('.modal-title');
    var modalImage = modalObra.querySelector('#imagenModal');
    var modalDescription = modalObra.querySelector('#descripcionObra');

    modalTitle.textContent = title;
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalDescription.textContent = description;
});
});

function toggleContent(button) {
    let content = button.closest('.expandable-section').querySelector('.hidden-content');
    let icon = button.querySelector('.expand-icon');

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.textContent = "－"; // Cambia a signo de resta
    } else {
        content.style.display = "none";
        icon.textContent = "＋"; // Vuelve al signo de suma
    }
}
