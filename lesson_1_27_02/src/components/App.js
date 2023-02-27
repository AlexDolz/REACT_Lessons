import TaskCompleted from "./TaskCompleted";
import TaskNotCompleted from "./TaskNotCompleted";

function App() {
  return (
    <div>
      <h1>Task list</h1>
      <TaskCompleted />
      <TaskCompleted />
      <TaskNotCompleted />
      <TaskCompleted />
    </div>
  );
}

export default App;
