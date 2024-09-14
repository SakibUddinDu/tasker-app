import getData from "../data";
import TaskActions from "./TaskActions";
import TaskAddEditModal from "./TaskAddEditModal";
import TasksList from "./TasksList";
import { useState } from "react";

export default function TaskBoard() {
  const taskData = getData();
  const [data, setData] = useState(taskData); //[]
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleCreateTask = (newTask, isAdd) => {
    console.log( newTask, isAdd)
    if (isAdd) {
      setData([...data, newTask]);
    } else {
      setData(
        data.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    handleCloseClick()
  };

  const handleDelete = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmed) {
      const filteredTasks = data.filter((task) => task.id !== taskId);
      setData(filteredTasks);
    }
  };

  const handleDeleteAll = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all task?"
    );
    if (confirmed) {
      setData([]);
    }
  };

  const handleEdit = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleFavoriteClick = (taskId) => {
    const taskIndex = data.findIndex((task) => task.id === taskId);
    const newTasks = [...data];
    console.log(newTasks[taskIndex]);
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setData(newTasks);
  };

  function handleCloseClick() {
    setShowModal(false);
    setTaskToUpdate(null);
}

  const handleSearch= (searchTerm)=>{
    const filtered = data.filter((task)=> task.title.toLowerCase().includes(searchTerm.toLowerCase()))

    setData(filtered)
  }

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <TaskAddEditModal
          taskToUpdate={taskToUpdate}
          onCreateTask={handleCreateTask}
          onCancelModal={handleCloseClick}
        />
      )}

      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <TaskActions
            onSearch={handleSearch}
              onAddTask={setShowModal}
              onDeleteAll={handleDeleteAll}
            />
          </div>
          <TasksList
            data={data}
            onFavoriteClick={handleFavoriteClick}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </section>
  );
}
