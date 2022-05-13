//console.log("PPPPPPPPP");

const btn = document.querySelector('#btn_add');
const input = document.querySelector('#input');

btn.addEventListener('click', event => {
    if(input.value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${input.value}
                </span>
                <button class="delete">
                    Удалить
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
});

// document.querySelector('#btn_add').onclick = function(){
//     if(document.querySelector('#create_a_task input').value.length == 0){
//         alert("Please Enter a Task")
//     }
//
//     else{
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#create_a_task input').value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;
//
//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
//