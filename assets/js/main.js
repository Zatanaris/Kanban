const coluns = document.querySelectorAll(".coll");
const filter = document.querySelector(".form .form--control input");
const cards = document.querySelectorAll(".card");

filter.addEventListener("input", filterCards);

function filterCards() {
    if (filter.value !== "") {
        for (let card of cards) {
            let title = card.querySelector("h3");
            title = title.textContent.toLowerCase();
            let filterText = filter.value.toLowerCase();
            if (!title.includes(filterText)) {
                card.style.display = "none";
            } else {
                card.style.display = "block";
            }
        }
    } else {
        for (card of cards) {
            card.style.display = "block";
        }
    }
}

document.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
});

coluns.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        const dragging = document.querySelector(".dragging");
        const applyAfter = getNewPosition(item, e.clientY);

        if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", dragging);
        } else {
            item.prepend(dragging);
        }
    });
});

function getNewPosition(coluns, posY) {
    const cards = coluns.querySelectorAll(".card:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCentery = box.y + box.height / 2;

        if (posY >= boxCentery) result = refer_card;
    }

    return result;
}
