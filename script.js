const elevi = [
  { nume: "Andrei Popescu", note: [8, 7, 9], medie: (8 + 7 + 9) / 3 },
  { nume: "Maria Ionescu", note: [10, 9, 10], medie: (10 + 9 + 10) / 3 },
  { nume: "Alexandru Dumitrescu", note: [7, 8, 6], medie: (7 + 8 + 6) / 3 },
  { nume: "Ioana Georgescu", note: [9, 8, 9], medie: (9 + 8 + 9) / 3 },
  { nume: "Mihai Marinescu", note: [6, 7, 8], medie: (6 + 7 + 8) / 3 },
];

const inputNumeElev = document.getElementById("nume-elev-input");
const butonAdaugareElev = document.getElementById("adauga-elev-btn");
const tabelElevi = document.getElementById("tabel-elevi");
const tabelNote = document.getElementById("tabel-note");
const sectiuneNote = document.getElementById("note-elev-wrapper");
const butonAscundeNote = document.getElementById("ascunde-note");
const containerNoteElev = document.getElementById("note-elev-wrapper");
const inputNota = document.getElementById("nota");
const butonAdaugaNota = document.getElementById("adauga-nota-btn");
const numeElevH1 = document.getElementById("nume-elev");
const butonSortareAsc = document.getElementById("sort-asc-btn");
const butonSortareDesc = document.getElementById("sort-desc-btn");

inputNota.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adaugareNota();
  }
});

butonAdaugareElev.addEventListener("click", adaugareElevInTabel);
tabelElevi.addEventListener("click", trateazaActiuniTabelElevi);
tabelNote.addEventListener("click", trateazaActiuniTabeNote);
butonAscundeNote.addEventListener("click", ascundeSectiuneNote);
butonAdaugaNota.addEventListener("click", adaugareNota);
butonSortareAsc.addEventListener("click", () => sorteazaElevi("asc"));
butonSortareDesc.addEventListener("click", () => sorteazaElevi("desc"));

function adaugareElevInTabel() {
  const numeElev = inputNumeElev.value;
  if (numeElev.length > 2) {
    elevi.push({ nume: numeElev, medie: 0, note: [] });
  } else {
    alert("Numele elevului trebuie sa contina minim 3 caractere");
  }
  afisareTabel(elevi);
}

function afisareTabel(elevi) {
  const tableBody = tabelElevi.querySelector("tbody");
  tableBody.innerHTML = "";

  for (let i = 0; i <= elevi.length - 1; i++) {
    tableBody.innerHTML += `
         <tr id="elev_${i}">
            <td>${elevi[i].nume}</td>
            <td>${elevi[i].medie.toFixed(2)}</td>
            <td><button class="vezi-note">Vezi Notele</button></td>
            <td><button class="sterge-elev">X</button></td>
         </tr>
      `;
  }
  console.log(tableBody);
}

function trateazaActiuniTabelElevi(e) {
  if (e.target.classList.contains("vezi-note")) {
    sectiuneNote.classList.remove("hide");
    const id = e.target.parentElement.parentElement.id;
    const index = id.split("_")[1];
    afiseazaNote(elevi[index]);
  } else if (e.target.classList.contains("sterge-elev")) {
    const id = e.target.parentElement.parentElement.id;
    const index = id.split("_")[1];

    elevi.splice(index, 1);
    afisareTabel(elevi);
  }
}

function trateazaActiuniTabeNote(e) {
  if (e.target.classList.contains("sterge-nota")) {
    const idNota = e.target.parentElement.parentElement.id;
    const indexNota = idNota.split("_")[1];

    const idTableBody = e.target.parentElement.parentElement.parentElement.id;
    const indexElev = idTableBody.split("_")[1];

    elevi[indexElev].note.splice(indexNota, 1);
    afiseazaNote(elevi[indexElev]);
  }
}

function ascundeSectiuneNote() {
  tabelNote.classList.add("hide");
  numeElevH1.textContent = "";
  tabelNote.querySelector("tbody").innerHTML = "";
}

function adaugareNota() {
  const idTableBody = tabelNote.querySelector("tbody").id;
  const indexElev = parseInt(idTableBody.split("_")[1]);
  const nota = parseFloat(inputNota.value);

  if (!isNaN(nota)) {
    elevi[indexElev].note.push(nota);
    elevi[indexElev].medie =
      elevi[indexElev].note.reduce((a, b) => a + b, 0) /
      elevi[indexElev].note.length;
    afiseazaNote(elevi[indexElev]);
    afisareTabel(elevi);
    inputNota.value = "";
  } else {
    alert("Introduceti o nota valida");
  }
}

function afiseazaNote(elev) {
  const index = elevi.indexOf(elev);
  const h1NumeElev = containerNoteElev.querySelector("h1");
  h1NumeElev.innerHTML = elev.nume;
  const tableBody = tabelNote.querySelector("tbody");

  tableBody.innerHTML = "";
  tableBody.id = `elev_${index}`;
  for (let i = 0; i <= elev.note.length - 1; i++) {
    tableBody.innerHTML += ` 
        <tr id="nota_${i}">
            <td>${elev.note[i].toFixed(2)}</td>
            <td><button class="sterge-nota">X</button></td>
        </tr>
    `;
  }
}

function sorteazaElevi(sortType) {
  if (sortType === "asc") {
    elevi.sort((a, b) => a.medie - b.medie);
  } else if (sortType === "desc") {
    elevi.sort((a, b) => b.medie - a.medie);
  }
  afisareTabel(elevi);
}
afisareTabel(elevi);
