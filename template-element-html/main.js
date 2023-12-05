const container = document.getElementById('container');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();

for (let i = 0; i < 3; i++) {
    fragment.appendChild(template.content.cloneNode(true));
}

container.appendChild(fragment);