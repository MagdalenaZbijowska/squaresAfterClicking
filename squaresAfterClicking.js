const btn = document.querySelector('button');
let number = 1;

const addElement = function () {
    // console.log('klik!');
    const div = document.createElement('div')
    div.textContent = number;

    if (number % 3 == 0) {
        div.classList.add('green');
    }

    document.body.appendChild(div);
    number++;
}

btn.addEventListener('click', addElement);