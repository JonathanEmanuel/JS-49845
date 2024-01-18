const modal = new bootstrap.Modal('#modalStudent', {});
const btnNew = document.querySelector('#btnNew');
const btnSave = document.querySelector('#btnSave');
const btnClose = document.querySelector('#btnClose');
const frmStudent = document.querySelector('#frmStudent');
const inputName = document.querySelector('#name');
const inputTask1 = document.querySelector('#task1');
const inputTask2 = document.querySelector('#task2');
const tableRow = document.querySelector('#table-students tbody')

let list = [];

btnNew.addEventListener('click', ()=>{
    modal.show();

})

btnClose.addEventListener('click', ()=> {
    modal.hide();
})


frmStudent.addEventListener('submit', (e)=> {
    e.preventDefault();
    const id = list.length + 1;
    const name = inputName.value;
    const task1 = inputTask1.value;
    const task2 = inputTask2.value;

    list.push({
        id,
        name,
        task1,
        task2
    })

    render(list);
    guardar(list);
    modal.hide();
})


function render(list){
    tableRow.innerHTML = '';
    list.forEach( student => {
        tableRow.innerHTML += // html
        `<tr class="text-center">
            <td> ${student.id}</td>
            <td> ${student.name}</td>
            <td> ${student.task1} </td>
            <td> ${student.task2} </td>
            <td> -- </td>
            <td><span class="badge text-bg-success">Promo</span></td>
            <td> <button class="btn btn-primary btn-sm"><i class="fa-solid fa-pen-to-square"></i></button></td>
        </tr>`
    });
}
/* ------------- Recibe el array y lo guardar en el localStorage ------------ */
function guardar(list){
    localStorage.setItem('notas', JSON.stringify(list) )
}
/* ---------- Lee el localStorage y lo retorna ---------- */
function leer(){
    const datos = JSON.parse( localStorage.getItem('notas') );
    if( datos ){
        return datos;
    } else {
        return [];
    }
}

list = leer();

render(list);
