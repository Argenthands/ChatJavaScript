import { loeadNotes, onNewNote } from './sokets.js'
import { onHandleSubmit, renderNotes, appendNote } from './ui.js'

onNewNote(appendNote)
loeadNotes(renderNotes)

const noteForm = document.querySelector('#noteForm')

noteForm.addEventListener('submit', (onHandleSubmit))