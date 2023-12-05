const getUsers = async() => {
    const response = await fetch('https://reqres.in/api/users?page=2');
    const data = await response.json();
    const users = data['data'];

    return users;
}

const grid = document.getElementById('grid');
const cardTemplate = document.getElementById('card-template');

for (let i = 0; i < 6; i++) {
    grid.append(cardTemplate.content.cloneNode(true));
}

getUsers()
.then(users => {
    grid.innerHTML = '';
    for (const user of users) {
        const div = cardTemplate.content.cloneNode(true);
        div.querySelector('.card__background').src = user.avatar;
        div.querySelector('.card__title').textContent = user.first_name+' '+user.last_name;
        div.querySelector('.card__email').textContent = user.email;
        grid.append(div);
    }
});