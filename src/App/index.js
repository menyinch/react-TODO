//Components
import AppUI from "./AppUI";
import { TodoProvider } from "../TodoContext/index.js";

// const deafultTodos = [
//   { text: "Cortar la cebolla", completed: false },
//   { text: "Tomar el curso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
