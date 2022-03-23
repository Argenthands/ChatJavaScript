const socket = io()

export const loeadNotes = callback =>{
    socket.on('server:loadnotes', callback)
}

export const saveNotes = (title, description)=>{
    socket.emit('client:newnote', {
        title,
        description
    })
}

export const onNewNote = (callback) =>{
    socket.on('server:newnote', callback)
}