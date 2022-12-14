import { useState, useEffect } from "react";

export const useTasks = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

  const [tasks, setTasks] = useState(
    tasksFromLocalStorage ? tasksFromLocalStorage :
      [
        { id: 1, content: "przejsc na Reacta", done: true },
        { id: 2, content: "zjesc obiad", done: false },
      ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ])
  };

  return { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask }
};