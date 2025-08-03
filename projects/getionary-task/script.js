const input = document.getElementById("i");
const submit = document.getElementById("submit");
const tasklist = document.getElementById("tasklist");

submit.addEventListener("click", function() {
    const value = input.value.trim();
    if (value !== "") {
        const li = document.createElement("li");
        li.textContent = value;

        const deltbutton = document.createElement("button");
        deltbutton.textContent = "Delete";
        deltbutton.style.marginLeft = "10px";
        deltbutton.addEventListener("click", function() {
            tasklist.removeChild(li);
        });

        li.appendChild(deltbutton);
        tasklist.appendChild(li);

        input.value = "";
    } else {
        alert("Veuillez entrer une tache");
    }
});

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        submit.click();
    }
});
