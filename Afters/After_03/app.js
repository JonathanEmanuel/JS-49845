const list = [
    { id: 1, name: 'Gabriel Ruiz', test1: 8, test2: 9, status: 'Promocionado'},
    { id: 2, name: 'Lucia Herrera',   test1: 6, test2: 4, status: 'Aprobado'},
    { id: 3, name: 'Sebastian Cruz', test1: 3, test2: 2, status: 'Desaprobado'},
    { id: 4, name: 'Emanuel Ruiz', test1: 1, test2: 2, status: 'Desaprobado'},
    { id: 5, name: 'Nahuel Ruiz', test1: 10, test2: 8, status: 'Promocionado'}
]

class Ratings {
    constructor(list){
        this.list = list;
    }
    addStudent(student){
        let id = this.list.length + 1;
        student.id = id;

        const status = this.getStudentAverage(student.test1, student.test2);
        student.status = status;

        // Realizar las validaciones de los atributos
        this.list.push(student);
    }
    getStudentAverage(test1, test2){
        const average = ( test1 + test2 ) / 2;
        if( average >= 7 ){
            return 'Promocionado';

        } else if( average >= 4 && average < 7){
            return 'Aprobado';
        } else { 
            return 'Desaprobado';
        }
    }
    // Retornar el estudiante por id
    getStudentById(id){
        const student = this.list.find( item => item.id === id );
        return student ? student : 'No existe el estudiante';

        if ( student ){
            return student;
        } else {
            return 'No existe el estudiante';
        }
       
    }
    getStudentByStatus(status ){
        const list = this.list.filter( item => item.status === status );
        return list;
    }
    getStudentByName(name){
        const list = this.list.filter(  item => item.name.toLowerCase().includes( name.toLowerCase() ) );
        return list;
    }
    showStudentsAverage(){
        const averages = this.list.map( student => {
            const average = (student.test1 + student.test2 ) / 2;
            return { id: student.id, name: student.name, average: average }
        })

        // Agrego el ordenar por mayor promedio
        averages.sort( (a,b) => {
            if ( a.average < b.average){ return 1  }
            if (a.average > b.average ){ return -1 }

            return 0
        })
        console.table(averages)
    }
    showStudents(){
        console.table(this.list);
        let mensaje = '';

        this.list.forEach(student => {
            
            mensaje += `Nombre ${student.name} | Estado : ${student.name}  \n`;
        });
            

        alert(mensaje)


    }
}


const libro = new Ratings(list);
//const id = parseInt(  prompt('Ingrese el ID') )
// const estudiantes = libro.getStudentById(id);

const filtrados = libro.getStudentByStatus('Desaprobado');
console.table( filtrados );


let nombre = prompt('Nombre');

do {
    nota1 = parseFloat( prompt('nota 1'));
    nota2 = parseFloat( prompt('nota 2'));

    // { id: 5, name: 'Nahuel Ruiz', test1: 10, test2: 8, status: 'Promocionado'}
    libro.addStudent( {name: nombre, test1: nota1, test2: nota2 } );

    libro.showStudents();
    nombre = prompt('Nombre');


} while( nombre.toLowerCase() != 'salir' )

console.log('Mayor Promedio')
libro.showStudentsAverage();
