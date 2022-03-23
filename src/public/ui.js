//user interface
import {saveNotes} from './sokets.js'

const noteList = document.querySelector('#notes')

const noteUI = note =>{
    const div = document.createElement('div')
    div.innerHTML = `
        <div>
            <h1>
                ${note.title}
            </h1>
            <div>
                <button>Delete</button>
                <button>Update</button>
            </div>
            <p>
                ${note.description}
            </p>
        </div>
    `
    return div
}

export const renderNotes = (notes)=>{

    notes.map(note =>{
        noteList.append(noteUI(note))
    })
}

export const onHandleSubmit = (e)=>{
    e.preventDefault()
    saveNotes(
        noteForm['title'].value,
        noteForm['description'].value
    )
}

export const appendNote = note =>{
    noteList.append(noteUI(note))
}