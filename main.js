let newBtn = document.querySelector('#new');
let deleteBtn = document.querySelector('#trash');
let list = document.querySelector(".list");
let text = document.querySelector("textarea");
let noteList = document.querySelectorAll('article');
let input = document.querySelectorAll('input');

newBtn.addEventListener('click', () => {
    let date = new Date();
    const formatNumber = (number) => {
        return number < 10 ? "0" + number : number;
    };
    let formattedDate = `${formatNumber(date.getDate())}/${formatNumber(date.getMonth() + 1)}/${date.getFullYear()}, ${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`;
    let inputValues = [];
    input.forEach((inputField) => {
        inputValues.push(inputField.value);
    });
    list.innerHTML += `
        <article>
            <input type="text" maxlength="16" placeholder="New note..." value=""></input>
            <p>${formattedDate}</p>
        </article>
    `;
    input = document.querySelectorAll('input');
    noteList = document.querySelectorAll('article');
    input.forEach((inputField, index) => {
        inputField.value = inputValues[index] || '';
    });

    eventClick();
});

deleteBtn.addEventListener('click', () => {
    document.querySelector('.selected').remove();
    document.querySelector('.title').textContent = "";
    deleteBtn.disabled = true;
});

window.addEventListener("load", () => {
    eventClick();
});

function eventClick() {
    noteList.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (document.querySelector('.selected')) {
                document.querySelector('.selected').classList.remove('selected');
            }
            item.classList.add('selected');
            text.disabled = false;
            deleteBtn.disabled = false;
            changeNote(index);
        });
    });
}

function changeNote(index) {
    if (input[index]) {
        document.querySelector('.title').textContent = input[index].value
        input[index].addEventListener('input',()=>{
            document.querySelector('.title').textContent = input[index].value
        })
    }
}
