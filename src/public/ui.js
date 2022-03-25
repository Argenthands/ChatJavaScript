//user interface
import {
    saveNotes,
    deleteNote,
    getNoteById,
    updateNote
} from './sokets.js'

const noteList = document.querySelector('#notes')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
let saveID = ""

const noteUI = note =>{
    const div = document.createElement('div')
    div.innerHTML = `
        <div>
            <h1>
                ${note.title}
            </h1>
            <div>
                <button class="delete" data-id="${note._id}">Delete</button>
                <button class="update" data-id="${note._id}">Update</button>
            </div>
            <p>
                ${note.description}
            </p>
        </div>
    `
    const btnDelete = div.querySelector('.delete')
    const btnUpdate = div.querySelector('.update')

    btnDelete.addEventListener('click', (e)=>{
        deleteNote(btnDelete.dataset.id)
    })

    btnUpdate.addEventListener('click', (e)=>{
        getNoteById(btnUpdate.dataset.id)
        //updateNote(btnUpdate.dataset.id)
    })

    return div
}

export const renderNotes = (notes)=>{
    noteList.innerHTML = ""
    notes.map(note =>{
        noteList.append(noteUI(note))
    })
}

export const fillForm = note =>{
    title.value = note.title
    description.value = note.description
    saveID = note._id
}

export const onHandleSubmit = (e) =>{
    e.preventDefault()
    if(saveID){
        updateNote(saveID, title.value, description.value)
    }else{
        saveNotes(
            title.value,
            description.value
        )
    }
    saveID = ''
    title.value = ''
    description.value = ''

}

export const appendNote = (note) =>{
    noteList.append(noteUI(note))
}