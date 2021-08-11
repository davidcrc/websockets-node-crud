var notesList = document.querySelector('#notes')
let savedId = null

const addDiv = (div, note) => {
  
  div.innerHTML =  `
  <div class="card card-body rounded-0 mb-2 animate__animated animate__fadeInUp" >
    <div class="d-flex justify-content-between" >
      <h1 class="h3 card-title"> ${note.title} </h1>
      <div>
        <button class="btn btn-danger delete" data-id="${note.id}"> delete</button>
        <button class="btn btn-secondary update" data-id="${note.id}"> update </button>
      </div>
    </div>
    <p> ${note.description} </p>
  </div>
  `
  const btnDelete = div.querySelector(".delete")
  const btnUpdate = div.querySelector(".update")
  // console.log(btnDelete)
  btnDelete.addEventListener('click', () => {
    deleteNote(btnDelete.dataset.id)
  })

  btnUpdate.addEventListener('click', () => {
    // console.log("actualizar este id", btnUpdate.dataset.id)
    getNote(btnUpdate.dataset.id)
    savedId = btnUpdate.dataset.id
  })

  return div;
}
const noteUI = note => {
  const div = document.createElement('div');
  div.id = note.id

  return addDiv(div, note);
}

const renderNotes = (notes) => {
  // console.log("mostrar las notas", notes)
  notesList.innerHTML = ''
  notes.forEach(note => {
    appendNote(note)
  });
}

const appendNote = note => {
  notesList.append(noteUI(note))
}

const deleteOneNote = noteId => {
  console.log("eliminame este id d", noteId)
  document.getElementById(noteId).remove();
}

const updateOneNote = note => {
  let divnote = document.getElementById(note.id);
  addDiv(divnote, note)
}