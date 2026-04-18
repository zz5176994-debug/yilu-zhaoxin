  // 任务数组
  let tasks = [];
  // 获取元素
  const input = document.querySelector('.inputBox input');
  const addBtn = document.querySelector('.inputBox button');
  const taskBox = document.querySelector('.taskBox');
  const countEl = document.getElementById('count');
  const clearBtn = document.querySelector('.clearBtn');
  // 渲染任务列表
  function renderTasks() {
    taskBox.innerHTML = '';
    
    for(let i = 0; i < tasks.length; i++) {
      const taskItem = document.createElement('div');
      taskItem.className = 'taskItem';
      taskItem.innerHTML = `<span>${i+1}. ${tasks[i]}</span>`;
      taskBox.appendChild(taskItem);
    }
    // 修改合计数
    countEl.textContent = tasks.length;
  }
  // 添加任务
  addBtn.addEventListener('click', function() {
    //获取输入框内容，并去掉前后空格
    const content = input.value.trim();
    if (content) {
      // 内容添加到任务数组中
      tasks.push(content);
      input.value = '';
      // 渲染任务列表
      renderTasks();
    }
  });
  // 回车添加
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });

  // 清空任务
  clearBtn.addEventListener('click', function() {
    tasks = [];
    renderTasks();
  });
  // 初始化
  renderTasks();