  let memorialDate = null;
  let timer = null;

  // 为数字补零
  function formatNumber(num) {
      return num < 10 ? '0' + num : num;
  }

  // 更新计时显示
  function updateTimer() {
      if (!memorialDate) return;
      const now = new Date();
      const diff = now - memorialDate; 

      if (diff < 0) {
          document.querySelector('.time-display').textContent = "纪念日还未到";
          return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = formatNumber(days);
      document.getElementById('hours').textContent = formatNumber(hours);
      document.getElementById('minutes').textContent = formatNumber(minutes);
      document.getElementById('seconds').textContent = formatNumber(seconds);
  }

  // 设定纪念日
  function setMemorialDay() {
      const timeInput = document.getElementById('memorialTime').value;
      if (!timeInput) {
          alert("请选择纪念日时间");
          return;
      }
      memorialDate = new Date(timeInput);
      const title = document.getElementById('memorialTitle').value || "纪念日";
      document.querySelector('h2').textContent = `距我们${title}已经过啦`;

      // 清除旧计时器，启动新计时器
      if (timer) clearInterval(timer);
      updateTimer(); // 立即更新一次
      timer = setInterval(updateTimer, 1000);
  }

  // 重置计时器
  function resetTimer() {
      clearInterval(timer);
      timer = null;
      memorialDate = null;
      document.getElementById('days').textContent = "00";
      document.getElementById('hours').textContent = "00";
      document.getElementById('minutes').textContent = "00";
      document.getElementById('seconds').textContent = "00";
      document.querySelector('h2').textContent = "距我们在一起已经过啦";
      document.getElementById('memorialTime').value = "2026-01-01T17:25";
      document.getElementById('memorialTitle').value = "在一起";
  }