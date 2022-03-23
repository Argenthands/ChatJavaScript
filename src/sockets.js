import Note from './models/Note'
export default (io)=>{
    io.on('connection',(socket)=>{

        const emitNotes = async ()=>{
            const notes = await Note.find()
           
            io.emit('server:loadnotes',notes)
        }
        emitNotes()

        socket.on('client:newnote', async data =>{
            const newNote = new Note(data)
            const saveNote = await newNote.save()
            io.emit('server:newnote', saveNote)
        })

        socket.on('client:deletenote', async id =>{
            await Note.findByIdAndDelete(id)
            emitNotes()
        })
    })
}