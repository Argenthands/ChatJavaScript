//user interface
import { saveNotes, deleteNote } from './sokets.js'

const noteList = document.querySelector('#notes')

const noteUI = note =>{
    const div = document.createElement('div')
    div.innerHTML = `
        <div>
            <h1>
                ${note.title}
            </h1>
            <div>
                <button class="delete" data-id="${note._id}">Delete</button>
                <button class="update">Update</button>
            </div>
            <p>
                ${note.description}
            </p>
        </div>
    `
    const btnDelete = div.querySelector('.delete')
    btnDelete.addEventListener('click', (e) =>{
        deleteNote(btnDelete.dataset.id)
    })
    return div
}

export const renderNotes = (notes)=>{
    noteList.innerHTML = ""
    notes.map(note =>{
        noteList.append(noteUI(note))
    })
}

export const onHandleSubmit = (e) =>{
    e.preventDefault()
    saveNotes(
        noteForm['title'].value,
        noteForm['description'].value
    )
}

export const appendNote = (note) =>{
    noteList.append(noteUI(note))
}