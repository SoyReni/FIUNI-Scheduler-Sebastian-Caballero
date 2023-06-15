# FIUNI-Scheduler-Sebastian-Caballero
INFORME

Se implementó un Scheduler basico desde cero con React Native segun las directivas de la tarea

1. Descripción de la aplicación.
La aplicación FIUNI Scheduler es una agenda que nos permite registrar tareas, recordatorios y actividades calendarizadas. 
El usuario puede ver su agenda y registrar entradas a la misma. Pero no puede eliminarlas ni editarlas
Las entradas en la agenda pueden tener los siguientes tipos: 
    task (tareas por hacer que pueden marcarse como hechas y no tienen fecha), 
    reminder (recordatorios de eventos con fecha y hora determinadas) 
    y activity (actividad que ya se realizó en una fecha y hora determinada).

2. Tareas del proyecto.
Se implementaron los distintos componentes: 
    ABM de entradas, permite listar, agregar y ver una entrada. La vista de entrada permite ver los datos completos de una entrada.
    Dashboard. que muestra los recordatorios de los proximos 7 dias y las tareas pendientes
    Tambien hay un buscador pero no se termino de implementar la vista para las busquedas 
3. Definición de objetos.
Para poder estandarizar el código y poder utilizar correctamente los datos, los objetos que vamos a usar tendrán la siguiente definición:

Entry:
{
  id: number,
  title: string,
  description: text,
  datetime: string de fecha en formato YYYY-MM-DD HH:mm:ss.sss,
  type: ("task", "reminder" o "activity"),
  status: ("in_progress" o "done")
}
