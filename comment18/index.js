function sendComment() {
    let comment = document.querySelector('#comment');
    let username = document.querySelector('#username');
    let picture = document.querySelector('#picture');
    let checkedComment = comment.value;
    //  localStorage.key();

    if (comment.value == '') {
        return comment.value
    }

    document.querySelector('#showComments').innerHTML += `
    <div> <img src="${picture.value}"> </div>
    <div>${username.value}: ${checkedComment}</div>
    `
    localStorage.setItem('commentText', comment.value);
    localStorage.setItem('commentPicture', picture.value);
    localStorage.setItem('commentName', username.value);

    comment.value = '';

}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#showComments').innerHTML += 
    // `${localStorage.getItem('commentPicture')}
    // ${localStorage.getItem('commentName')}
    // ${localStorage.getItem('commentText')}`

    `
    <div> <img src="${localStorage.getItem('commentPicture')}"> </div>
    <div>${localStorage.getItem('commentName')}: ${localStorage.getItem('commentText')}</div>
    `

    document.querySelector('#username').value = localStorage.getItem('commentName');
    document.querySelector('#picture').value = localStorage.getItem('commentPicture')

})

document.querySelector('#send').addEventListener('click', sendComment);

