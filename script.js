// ============================================
// EXPANDIR / CONTRAER TODOS LOS DESPLEGABLES
// ============================================

const expandButton = document.getElementById("expandAll");
const collapseButton = document.getElementById("collapseAll");


// Expandir todos

expandButton.addEventListener("click", () => {

    const details = document.querySelectorAll("details");

    details.forEach(detail => {
        detail.open = true;
    });

});


// Contraer todos

collapseButton.addEventListener("click", () => {

    const details = document.querySelectorAll("details");

    details.forEach(detail => {
        detail.open = false;
    });

});
