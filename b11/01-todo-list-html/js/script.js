let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addTaskBtn = document.querySelector(".js-add-task-btn");
const taskForm = document.querySelector(".js-task-form");
const taskId = document.querySelector(".js-task-id");
const taskInput = document.querySelector(".js-task-input");
const taskLevel = document.querySelector(".js-task-level");
const taskCancelBtn = document.querySelector(".js-task-cancel");
const taskSubmitBtn = document.querySelector(".js-task-submit");
const dropDownItem = document.querySelectorAll(".dropdown-item");
const searchInput = document.querySelector(".js-task-search");
const taskSearchClearBtn = document.querySelector(".js-task-search-clear");
let taskInputValue = document.querySelector(".js-task-input").value;
let taskLevelValue = document.querySelector(".js-task-level").value;

function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

const updateLocal = () => {
  const tasksLocal = JSON.parse(localStorage.getItem("tasks"));

  if (!tasksLocal) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  if (tasks !== tasksLocal) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

const createTaskContent = (task) => {
  const tr = document.createElement("tr");
  const firstTd = document.createElement("td");
  firstTd.classList.add("text-center");
  firstTd.innerText = task.id;
  const secondTd = document.createElement("td");
  secondTd.innerHTML = task.task;
  const thirdTd = document.createElement("td");
  thirdTd.classList.add("text-center");
  const span = document.createElement("span");
  span.classList.add("badge");

  switch (Number(task.level)) {
    case 0:
      span.classList.add("badge-secondary");
      span.innerText = "Low";
      break;
    case 1:
      span.classList.add("badge-info");
      span.innerText = "Medium";
      break;
    default:
      span.classList.add("badge-danger");
      span.innerText = "High";
      break;
  }

  thirdTd.appendChild(span);
  const fourTd = document.createElement("td");
  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-warning mr-1";
  editBtn.innerText = "Edit";
  editBtn.setAttribute("data-task", JSON.stringify(task));
  // Edit Button Click
  editBtn.addEventListener("click", () => {
    showTaskForm();
    taskInput.value = JSON.parse(editBtn.getAttribute("data-task")).task;
    taskLevel.value = Number(
      JSON.parse(editBtn.getAttribute("data-task")).level
    );
    taskId.setAttribute(
      "data-task-id",
      Number(JSON.parse(editBtn.getAttribute("data-task")).id)
    );
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger js-delete-btn";
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute("data-id-task", task.id);
  deleteBtn.addEventListener("click", () => {
    tasks = tasks.filter(
      (task) => task.id !== Number(deleteBtn.getAttribute("data-id-task"))
    );
    updateLocal();
    renderTaskListHTML(tasks);
  });
  fourTd.appendChild(editBtn);
  fourTd.appendChild(deleteBtn);

  tr.appendChild(firstTd);
  tr.appendChild(secondTd);
  tr.appendChild(thirdTd);
  tr.appendChild(fourTd);

  return tr;
};

const randomInRange = (start, end) => {
  const number = Math.random() * (end - start + 1) + start;
  return Math.floor(number);
};

const toggleTaskForm = () => {
  if (taskForm.classList.contains("hidden")) {
    taskForm.classList.remove("hidden");
    taskForm.classList.add("show");
    addTaskBtn.innerHTML = "Close Form";
  } else {
    taskForm.classList.add("hidden");
    taskForm.classList.remove("show");
    addTaskBtn.innerHTML = "Add Task";
  }
};

const closeTaskForm = () => {
  taskForm.classList.add("hidden");
  taskForm.classList.remove("show");
  addTaskBtn.innerHTML = "Add Task";
};

const showTaskForm = () => {
  taskForm.classList.remove("hidden");
  taskForm.classList.add("show");
  addTaskBtn.innerHTML = "Close Form";
};

const reset = () => {
  document.querySelector(".js-task-list tbody").remove();
};

const resetForm = () => {
  taskInput.value = "";
  taskLevel.value = taskLevelValue;
};

const addTask = (task) => {
  tasks.push(task);
};

taskInput.addEventListener("input", (e) => {
  taskInputValue = e.target.value;
});

taskLevel.addEventListener("input", (e) => {
  taskLevelValue = e.target.value;
});

taskCancelBtn.addEventListener("click", () => {
  resetForm();
  closeTaskForm();
});

searchInput.addEventListener("input", (e) => {
  const tasksFiltered = tasks.filter((task) =>
    task.task.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderTaskListHTML(tasksFiltered);
});

taskSearchClearBtn.addEventListener("click", (e) => {
  searchInput.value = "";
  renderTaskListHTML(tasks);
});

taskSubmitBtn.addEventListener("click", () => {
  // User is Editing Task
  if (taskId.getAttribute("data-task-id")) {
    const taskIndex = tasks.findIndex(
      (task) => task.id === Number(taskId.getAttribute("data-task-id"))
    );

    tasks[taskIndex].task = document.querySelector(".js-task-input").value;
    tasks[taskIndex].level = Number(
      document.querySelector(".js-task-level").value
    );
    renderTaskListHTML(tasks);
    return;
  }

  if (!taskInputValue) {
    alert("Noooooo");
    return;
  }

  const task = {
    id: randomInRange(1000, 9999),
    task: taskInputValue,
    level: Number(taskLevelValue),
  };

  addTask(task);
  updateLocal();
  resetForm();
  renderTaskListHTML(tasks);
});

addTaskBtn.addEventListener("click", () => {
  toggleTaskForm();
});

dropDownItem.forEach((el) =>
  el.addEventListener("click", (e) => {
    document.querySelector(".js-task-sort").innerHTML = el.innerText
      .split(" ")
      .join(" - ")
      .toUpperCase();
    //
    const sortType = el.innerText.split(" ")[0].toLowerCase();
    const sortOrder = el.innerText.split(" ")[1].toLowerCase();
    tasks.sort(dynamicSort(`${sortOrder === "desc" ? "" : "-"}${sortType}`));
    renderTaskListHTML(tasks);
  })
);

const renderTaskListHTML = (tasks) => {
  reset();
  let el = document.createElement("tbody");

  tasks.length !== 0 &&
    tasks.forEach((task) => {
      el.appendChild(createTaskContent(task));
    });

  document.querySelector(".js-task-list").appendChild(el);
};

updateLocal();
renderTaskListHTML(tasks);
