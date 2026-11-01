export function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    btn.addEventListener('click', () => {
        btn.remove();
    });
    document.body.appendChild(btn);
}
export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((itemText) => {
        const li = document.createElement('li');
        li.textContent = itemText;
        li.addEventListener('mouseover', () => {
            li.title = li.textContent;
        });
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}
export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';
    a.addEventListener('click', function firstClick(e) {
        e.preventDefault();
        a.textContent += ' ' + a.href;
        a.removeEventListener('click', firstClick);
    });
    document.body.appendChild(a);
}
export function createList() {
    const ul = document.createElement('ul');
    const btn = document.createElement('button');
    btn.textContent = 'Добавить пункт';
    const createLi = () => {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        li.addEventListener('click', () => {
            li.textContent += '!';
        });
        return li;
    };
    ul.appendChild(createLi());
    btn.addEventListener('click', () => {
        ul.appendChild(createLi());
    });
    document.body.appendChild(ul);
    document.body.appendChild(btn);
}
