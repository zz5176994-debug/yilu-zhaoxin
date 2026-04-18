// 轮播图区域
// 1. 初始数据
    const data = [
      { url: './images/slider01.jpg'},
      { url: './images/slider02.jpg'},
      { url: './images/slider03.jpg'},
      { url: './images/slider04.jpg'}
    ]

    const indicatorItems = document.querySelectorAll('.slider-footer ul li')

    function changeSlide() {
      // 切换图片
      img.src = data[i].url
      // 切换小圆点
      indicatorItems.forEach(item => item.classList.remove('active'))
      indicatorItems[i].classList.add('active')
    }

    // 获取元素
    const img = document.querySelector('.slider-wrapper img')
    const footer = document.querySelector('.slider-footer')
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    // 1.左右侧按钮
    let i = 0  
    // 注册点击事件
    next.addEventListener('click',function() {
      i++
      if(i >= data.length) i = 0
      changeSlide()
    })
    prev.addEventListener('click',function() {
      i--
      if(i < 0) i = data.length - 1
      changeSlide()
    })

    // 2. 自动播放模块---定时器
    let timerId = null
    function autoPlay() {
      clearInterval(timerId)
      timerId = setInterval(function() {
        next.click()
      }, 1000)
    }
    autoPlay()

    // 3. 鼠标经过大盒子停止定时器
    const slider = document.querySelector('.slider')
    // 注册事件
    slider.addEventListener('mouseenter',function() {
      // 停止定时器
      clearInterval(timerId)
    })

    // 4. 鼠标离开大盒子停止定时器
   slider.addEventListener('mouseleave', autoPlay)



// 课表区域

// 1. 显示/隐藏课表
  const controlBtn = document.querySelector('.tableContainer .control')
  const courseTable = document.querySelector('.tableContainer .courseTable')
  
  controlBtn.onclick = function() {
      if (courseTable.style.display === 'none') {
          courseTable.style.display = 'block'
      } else {
          courseTable.style.display = 'none'
      }
  }

  // 获取所有复选框
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')

  // 2. 全选
  document.querySelector('.selectAll').onclick = function() {
      for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = true
      }
  }

  // 3. 全不选
  document.querySelector('.selectNone').onclick = function() {
      for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = false
      }
  }
  // 4. 反选
  document.querySelector('.reverseSelect').onclick = function() {
      for (let i = 0; i < checkboxes.length; i++) {
          checkboxes[i].checked = !checkboxes[i].checked
  }
  }