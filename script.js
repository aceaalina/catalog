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
const butonAscundereNote = document.getElementById("ascunde-note");
const containerNoteElev = document.getElementById("note-elev-wrapper");

afisareTabel(elevi);

butonAdaugareElev.addEventListener("click", adaugareElevInTabel);
tabelElevi.addEventListener("click", trateazaActiuniTabelElevi);
tabelNote.addEventListener("click", trateazaActiuniTabeNote);
butonAscundereNote.addEventListener("click", ascundeSectiuneNote);

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
  sectiuneNote.classList.add("hide");
}

function afiseazaNote(elev) {
  const index = elevi.indexOf(elev);
  const h1NumeElev = containerNoteElev.querySelector("h1");
  h1NumeElev.innerHTML = elev.nume;
  const tableBody = tabelNote.querySelector("tbody");

  tableBody.innerHTML = "";

  for (let i = 0; i <= elev.note.length - 1; i++) {
    tableBody.id = `elev_${index}`;
    tableBody.innerHTML += ` 
        <tr id="nota_${i}">
            <td>${elev.note[i].toFixed(2)}</td>
            <td><button class="sterge-nota">X</button></td>
        </tr>
    `;
  }
}
