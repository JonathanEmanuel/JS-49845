const modal = new bootstrap.Modal('#modalStudent', {});
const btnNew = document.querySelector('#btnNew');
const btnSave = document.querySelector('#btnSave');
const btnClose = document.querySelector('#btnClose');
const frmStudent = document.querySelector('#frmStudent');
const inputName = document.querySelector('#name');
const inputTask1 = document.querySelector('#task1');
const inputTask2 = document.querySelector('#task2');
const tableRow = document.querySelector('#table-students tbody')

const list = [
    { id:1 , name: 'Juan Perez', task1: 9, task2: 7 },
    { id:2 , name: 'Rocio Gomez', task1: 7, task2: 7 }

]

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
