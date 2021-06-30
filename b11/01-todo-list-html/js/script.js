let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function randomInRange(start, end) {
  const number = Math.random() * (end - start + 1) + start;
  return Math.floor(number);
}

const addTaskBtn = document.querySelector(".js-add-task-btn");
const taskForm = document.querySelector(".js-task-form");

addTaskBtn.addEventListener("click", () => {
  if (taskForm.classList.contains("hidden")) {
    taskForm.classList.remove("hidden");
    taskForm.classList.add("show");
  } else {
    taskForm.classList.add("hidden");
    taskForm.classList.remove("show");
  }
});

// Task Form
const taskInput = document.querySelector(".js-task-input");
const taskLevel = document.querySelector(".js-task-level");
const taskCancelBtn = document.querySelector(".js-task-cancel");
const taskSubmitBtn = document.querySelector(".js-task-submit");
let taskInputValue = document.querySelector(".js-task-input").value;
let taskLevelValue = document.querySelector(".js-task-level").value;

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

taskCancelBtn.addEventListener("click", resetForm);

taskSubmitBtn.addEventListener("click", () => {
  const task = {
    id: randomInRange(1000, 9999),
    task: taskInputValue,
    level: taskLevelValue,
  };

  addTask(task);
  updateLocal();
  resetForm();
  renderTaskListHTML();
});

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

  switch (task.level) {
    case "0":
      span.classList.add("badge-secondary");
      span.innerText = "Low";
      break;
    case "1":
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
  editBtn.className = "btn btn-warning";
  editBtn.innerText = "Edit";
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger js-delete-btn";
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute("data-id-task", task.id);
  deleteBtn.addEventListener("click", () => {
    tasks = tasks.filter(
      (task) => task.id !== Number(deleteBtn.getAttribute("data-id-task"))
    );
    updateLocal();
    renderTaskListHTML();
  });
  fourTd.appendChild(editBtn);
  fourTd.appendChild(deleteBtn);

  tr.appendChild(firstTd);
  tr.appendChild(secondTd);
  tr.appendChild(thirdTd);
  tr.appendChild(fourTd);

  return tr;
};

const renderTaskListHTML = () => {
  reset();
  let el = document.createElement("tbody");

  tasks.length !== 0 &&
    tasks.forEach((task) => {
      el.appendChild(createTaskContent(task));
    });

  document.querySelector(".js-task-list").appendChild(el);
};

updateLocal();
renderTaskListHTML();
