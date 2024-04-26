import dayjs from 'dayjs';

export default function handleSubmit(event) {
    event.preventDefault();
    let nameInput = document.querySelector('.name-input');
    let name = nameInput.value;
    let nameComment = document.createElement('h4');
    let textArea = document.querySelector('textarea');
    let textAreaValue = textArea.value;
    let descComment = document.createElement('p');
    let commentProfile = document.createElement('div');
    let container = document.createElement('div');
    let replyBtn = document.createElement('button');
    let commentContainer = document.querySelector('.comments');
    let commentText = document.createElement('div');
    let descDiv = document.createElement('div');
    let userImage = document.createElement('img');
    let date = document.createElement('p');
    nameComment.innerHTML = name;
    nameComment.classList.toggle('comment-name');
    descComment.classList.toggle('comment-desc');
    descComment.innerHTML = textAreaValue;
    commentProfile.classList.toggle('comment-profile');
    container.classList.toggle('comment-main')
    replyBtn.classList.toggle('reply-btn');
    replyBtn.innerHTML = 'Reply';
    commentText.classList.toggle('comment-text');
    const commentDiv = document.createElement('div');
    commentDiv.classList.toggle('comment-container');
    descDiv.classList.toggle('comment-desc-container');
    descDiv.appendChild(descComment);
    commentContainer.appendChild(container);
    userImage.classList.toggle('comment-image');
    userImage.src = 'https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png';
    container.append(userImage);
    container.appendChild(commentText);
    commentText.appendChild(commentProfile);
    commentText.append(descDiv);
    commentProfile.appendChild(nameComment);
    const currentYear = dayjs().format('YYYY');
    const currentMonth = dayjs().format('MMM');
    const currentDay = dayjs().format('DD');
    date.classList.toggle('comment-date');
    date.innerHTML = `${currentMonth} ${currentDay}, ${currentYear}`;
    commentProfile.appendChild(date);
}