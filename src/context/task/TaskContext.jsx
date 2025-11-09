import { createContext, useState, useMemo } from 'react';
import { save, load, remove } from '../../utils/storage';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(load(`tasks`) || []);

  const store = (task) => {
    setTasks(task);
    save(`tasks`, task);
  };

  const addTask = (newTask) => {
    store([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    store(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (selectedTask) => {
    store(
      tasks.map((task) => {
        return task.id === selectedTask.id ? selectedTask : task;
      })
    );
  };

  const deleteAllTask = () => {
    setTasks([]);
    remove(`tasks`);
  };

  const stats = useMemo(
    () => ({
      total: tasks.length,
      completed: tasks.filter((task) => {
        return task.isTaskCompleted;
      }).length,
      pending: tasks.filter((task) => {
        return !task.isTaskCompleted;
      }).length,
    }),
    [tasks]
  );

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask, stats, deleteAllTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
