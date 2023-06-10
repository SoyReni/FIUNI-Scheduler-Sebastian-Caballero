import React from "react";

//format YYYY-MM-DD HH:mm:ss.sss
//"task", "reminder" o "activity"
//"in_progress" o "done"
const DummyData = [
    {   id : 1,
        title : 'Examen de Algoritmos',
        description: "Examen de Algoritmos, unidad I, II y III",
        datetime: "2023-06-28 00:00:00.000", 
        type: "task",
        status: "in_progress"
    },
    {   id : 2,
        title : 'Examen de Algebra',
        description: "Examen de Algebra, unidad I, II y III",
        datetime: "2023-06-30 00:00:00.000", 
        type: "task",
        status: "in_progress"
    },
    {   id : 3,
        title : 'Feria',
        description: "Feria de Ingenieria, preparar notebook",
        datetime: "2023-07-06 00:00:00.000", 
        type: "reminder",
        status: "in_progress"
    },
    {   id : 4,
        title : 'Hacer copias',
        description: "Hacer copias del libro",
        datetime: "2023-07-10 00:00:00.000", 
        type: "activity",
        status: "in_progress"
    },
    {   id : 5,
        title : 'Examen de Derecho',
        description: "Examen de Derecho, unidad I, II y III",
        datetime: "2023-07-15 00:00:00.000", 
        type: "reminder",
        status: "in_progress"
    },
    {   id : 6,
        title : 'Ir al cine',
        description: "Bob esponja",
        datetime: "2023-07-18 00:00:00.000", 
        type: "activity",
        status: "in_progress"
    },
    {   id : 7,
        title : 'Pasear el perro',
        description: "Pasear el perro en la costanera",
        datetime: "2023-05-28 00:00:00.000", 
        type: "reminder",
        status: "done"
    },
    {   id : 8,
        title : 'Examen de Apps Moviles',
        description: "Examen de Apps Moviles, unidad I, II y III",
        datetime: "2023-07-30 00:00:00.000", 
        type: "reminder",
        status: "in_progress"
    },
    {   id : 9,
        title : 'Feria',
        description: "Feria de Ingenieria, preparar notebook",
        datetime: "2023-05-06 00:00:00.000", 
        type: "reminder",
        status: "done"
    },
    {   id : 10,
        title : 'Hacer copias',
        description: "Hacer copias del libro",
        datetime: "2023-05-10 00:00:00.000", 
        type: "activity",
        status: "done"
    },
    {   id : 11,
        title : 'Examen de Ingenieria',
        description: "Examen de Ingenieria, unidad I, II y III",
        datetime: "2023-05-15 00:00:00.000", 
        type: "reminder",
        status: "done"
    },
    {   id : 12,
        title : 'Ir al teatro',
        description: "Bob esponja",
        datetime: "2023-05-18 00:00:00.000", 
        type: "activity",
        status: "done"
    },
]

const LastIndex = 12;

export {DummyData, LastIndex}