import { loeadNotes, onNewNote, onSelectedNote } from './sokets.js'
import { onHandleSubmit, renderNotes, appendNote, fillForm } from './ui.js'

onNewNote(appendNote)
loeadNotes(renderNotes)
onSelectedNote(fillForm)

const noteForm = document.querySelector('#noteForm')

noteForm.addEventListener('submit', (onHandleSubmit))