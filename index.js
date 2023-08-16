const scroller = new Scroller(false)

window.onload = () => {
  scroller.setScrollPosition({top:0, behavior:'smooth'})

  //테마변경 다크
  const mode = document.querySelector('.mode')
  const header = document.querySelector('header')
  const hambtn = document.querySelector('header .navbar .ham-btn')
  const icons = document.querySelectorAll('header .navbar .mode .material-symbols-outlined')
  const scrollBtn = document.querySelectorAll('main .main-scroll .scroll-container .btns button')
  const scrollItems = document.querySelectorAll('main .main-scroll .scroll-container .item-container .item')

  mode.addEventListener('click', (e) => {
    document.body.classList.toggle('dark')
    header.classList.toggle('dark')
    hambtn.classList.toggle('dark')

    for(let item of scrollItems){
      item.classList.toggle('dark')
    }
    for (let btn of scrollBtn){
      btn.classList.toggle('dark')
    }

    for(let icon of icons){  //모드 버튼의 display설정 변경
      icon.classList.contains('show') ? 
      icon.classList.remove('show')
      : icon.classList.add('show')
    }
  })

    //스크롤링 중에 일어나는 이벤트
  window.addEventListener('scroll', function(e){
    //스크롤이 끝났는지 아닌지 체크하기
    scroller.isScrollended()
    .then(result => console.log('scroll eneded!'))
    .catch(err => console.log('scrolling...'))

    //스크롤링중에 어느정도 스크롤바를 내리면 헤더에 그림자 추가
    scroller.getScrollPosition() > header.offsetHeight ? 
    header.classList.add('active')
    : header.classList.remove('active')
  })

  //마우스 가로 스크롤 이벤트
  const scrollBox = document.querySelector('main .main-scroll .scroll-container .item-container')
  scrollItems
  const leftBtn = document.querySelector('.left')
  const rightBtn = document.querySelector('.right')

  function leftSlider(e){
    for(let item of scrollItems){
    item.style.transform = `translateX(-${item.offsetWidth*3}%)`
    item.style.transition = '0.3s'
    }
  }
  function rightSlider(e){
    for(let item of scrollItems){
    item.style.transform = `translateX(0%)`
    }
  }
  leftBtn.addEventListener('click', leftSlider)
  rightBtn.addEventListener('click', rightSlider)

}




// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzliMGU0ZWU3ODhiNWNmYmMyZmVmNTJhOWMyMjA3NSIsInN1YiI6IjY0ZDk4YmMzYTEwNzRiMDBjN2QyYTlmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b42PkLurZqrcmn39GPSuLXhaAYIZnD4pNk9wcAMSdw4'
//     }
//   };

//   async function loadApi(url,options){
//     await fetch(url,options)
//     .then(response=>response.json())
//     // .catch(err=> console.log(err))
//   }
  
//   function showdata(data){
//     const datas = data
//     const dataList = []
//     for(let itemData of datas){
//       console.log(data)
//       const title = itemData.title
//     }
//   }

//   loadApi('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
//   .then(data=>showdata(data))