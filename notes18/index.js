function sendNote() {

    let note = document.querySelector('#note');

    let date = document.querySelector('#date');

    if (note.value == '') {
        return note.value
    }

    if (date.value == '') {
        return date.value
    }

    localStorage.setItem(date.value, note.value);

    document.querySelector('#showNotes').innerHTML += `${date.value} : ${note.value} <br>`

    note.value = '';
}

document.addEventListener('DOMContentLoaded', ()=>{
        
        for (let index = 0; index < localStorage.length; index++) {
            
            let key = localStorage.key(index);

            document.querySelector('#showNotes').innerHTML += 
            `${key} : ${localStorage.getItem(key)} <br>`;
        }

})

document.querySelector('#send').addEventListener('click', sendNote);