const DELETE_ICON = 'img/delete_icon.png';

let addNonebtn = document.getElementById("add_note_btn");
let addNoteBlock = document.getElementById("add_note_block");
let savebtn = document.getElementById("save_notes");
let loadbtn = document.getElementById('load_notes');

addNonebtn.addEventListener('click', createNote);
savebtn.addEventListener('click', saveNotes);
loadbtn.addEventListener('click', loadNotes);

function saveNotes(){
    //localStorage.clear();
    let titles = document.getElementsByClassName("title_note");
    let texts = document.getElementsByClassName("body_note");
    
    for(let i = 0; i < titles.length; i++){
        localStorage.setItem(titles[i].value, texts[i].value);
    }
}

function loadNotes(){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
       console.log(`${key}: ${localStorage.getItem(key)}`);
      }
}

function removeNote(){
    this.parentNode.parentNode.remove();
}

function createNote(){
    let note = document.createElement("div");
    note.classList.add('note');
    let head = document.createElement("div");
    head.classList.add('head_note');

    let title = document.createElement("input");
    title.classList.add('title_note');
    let deleteIcon = document.createElement("img");
    deleteIcon.classList.add('icon');
    deleteIcon.setAttribute('src', DELETE_ICON);
    deleteIcon.addEventListener('click', removeNote);

    head.append(title);
    head.append(deleteIcon);

    let text = document.createElement("textarea");
    text.classList.add('body_note');


    note.append(head);
    note.append(text);

    addNoteBlock.before(note);
}