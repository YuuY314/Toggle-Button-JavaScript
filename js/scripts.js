const toggle = document.querySelector("#checkbox");
const label = document.querySelector("#label");
const btn = document.querySelector("#btn");
const toggleContainer = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
    let mode = toggle.checked;
    if(mode){
        label.textContent = "ocultar"
        btn.style.display = "block";
    } else {
        label.textContent = "mostrar";
        btn.style.display = "none";
        const cats = document.querySelectorAll(".cat");
        cats.forEach(cat => {
            cat.remove();
        });
    }
});

btn.addEventListener("click", () => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = "https://qph.cf2.quoracdn.net/main-qimg-b8a04a683b30c668f1dd64e68231b66d-lq";
    div.appendChild(img);
    div.classList.add("cat")
    toggleContainer.appendChild(div);
});