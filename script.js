const btn = document.getElementById("btn_add");
const input = document.getElementById("input");
const btn_all = document.getElementById("btn_all");
const btn_completed = document.getElementById("btn_completed");
const btn_unfulfilled = document.getElementById("btn_unfulfilled");
const btn_del_f = document.getElementById("btn_del_f");

let arr = [{text: "task_1", check: true, del: false}, {text: "task_2", check: false, del: false}];

function render(m) {
    document.querySelector('#tasks').innerHTML = "";

    for (let i = 0; i < m.length; i++) {
        if (!m[i].del) {
            let checked = ``;
            if (m[i].check) {
                checked = `checked`;
            }
            document.querySelector('#tasks').innerHTML += `
            <div class="task" >
                <input type="checkbox" class="checkbox" ` + checked + `>
                <span class="taskname">
                    ${m[i].text}
                </span>
                <button class="delete">
                    Удалить
                </button>
            </div>`;
        }
    }

    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            arr[i].del = true;
            this.parentNode.remove();
        }
    }

    let check = document.querySelectorAll(".checkbox");
    for (let i = 0; i < check.length; i++) {
        check[i].onclick = function () {
            arr[i].check = !arr[i].check;
        }
    }
}

btn.addEventListener('click', event => {
    if (input.value.length == 0) {
        alert("Please Enter a Task");
    } else {
        let buf = {
            text: input.value,
            check: false,
            del: false
        };
        arr.push(buf);

        render(arr);



        console.log(arr);
    }
});

btn_all.addEventListener('click', event => {
    render(arr);

});

btn_completed.addEventListener('click', event => {
    let buf_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].check){
            buf_arr.push(arr[i]);
        }
    }
    render(buf_arr);

});

btn_unfulfilled.addEventListener('click', event => {
    let buf_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if(!arr[i].check){
            buf_arr.push(arr[i]);
        }
    }
    render(buf_arr);

});

btn_del_f.addEventListener('click', event => {
    let buf_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].del){
            buf_arr.push(arr[i]);
        }
    }
    render(buf_arr);

});

render(arr);

