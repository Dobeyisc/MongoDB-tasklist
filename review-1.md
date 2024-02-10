CRUD (Crear, Leer, Actualizar, Eliminar)

1. Crear tarea:

Descripción: Permite agregar una nueva tarea a la lista.
Implementación: Utilizando insertOne de MongoDB, se inserta un nuevo documento en la colección de tareas con la información proporcionada.

2. Leer tarea:

Descripción: Recupera la información de una tarea específica basándose en su nombre.
Implementación: Utilizando findOne de MongoDB, se encuentra y muestra la tarea que coincide con el nombre especificado.

3. Actualizar tarea:

Descripción: Marca una tarea como completada.
Implementación: Utilizando updateOne de MongoDB, se actualiza el campo "completada" a true para la tarea con el nombre especificado.

4. Eliminar tarea:

Descripción: Elimina una tarea específica basándose en su nombre.
Implementación: Utilizando deleteOne de MongoDB, se elimina la tarea que coincide con el nombre especificado.
Este CRUD se centra en la manipulación de tareas en una lista. 