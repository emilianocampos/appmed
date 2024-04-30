import { useState, useEffect } from 'react';
import { Tarea } from './componentes/Tarea';
import { Form } from './componentes/Form';
import './App.css';

function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    // Cargar tareas desde el almacenamiento local al inicio
    const storedTareas = localStorage.getItem('tareas');
    if (storedTareas) {
      setTareas(JSON.parse(storedTareas));
    }
  }, []); // El segundo argumento es un array vacío, lo que significa que este efecto solo se ejecuta una vez al montar el componente

  useEffect(() => {
    // Guardar tareas en el almacenamiento local cada vez que cambien
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]); // El segundo argumento es el array de dependencias, lo que significa que este efecto se ejecutará cada vez que el estado de las tareas cambie

  const handleChange = e => {
    setTarea(e.target.value);
  }

  const añadirTarea = e => {
    e.preventDefault();

    if (tarea.trim() === '') {
      alert('Por favor ingresa una tarea');
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false
    };

    const totalTareas = [nuevaTarea, ...tareas];
    setTareas(totalTareas);
    setTarea('');
  }

  const borrarTarea = id => {
    const tareaActualizada = tareas.filter(t => t.id !== id);
    setTareas(tareaActualizada);
  }

  return (
    <div className="App">
      <h1>Lista de medicamentos</h1>

      <Form
        handleChange={handleChange}
        tarea={tarea}
        añadirTarea={añadirTarea}
      />

      {tareas.map(tarea => (
        <Tarea
          key={tarea.id}
          id={tarea.id}
          tarea={tarea}
          borrarTarea={borrarTarea}
        />
      ))}
    </div>
  );
}
export default App;
