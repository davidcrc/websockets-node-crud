const notesList = document.querySelector('#notes')

const appendNote = note => {
  notesList.innerHTML += `
  <div class="card card-body rounded-0 mb-2" >
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
}

const renderNotes = notes => {
  // console.log("mostrar las notas", notes)
  notes.forEach(note => {
    appendNote(note)
  });
}