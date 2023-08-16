// 아코디언 박스 이벤트
const detailBox_01 = document.querySelector('main .personal-detail .detail-container')
const detailBox_02 = document.querySelector('main .personal-detail .personal-list')
const openBtn_01 = document.querySelector('main .personal-detail .detail-container .open-btn')
const openBtn_02 = document.querySelector('main .personal-detail .personal-list .open-btn')
const acodienBox_01 = document.querySelector('main .personal-detail .details')
const acodienBox_02 = document.querySelector('main .personal-detail .list-items')
console.log(acodienBox_01)
console.log(acodienBox_02)

openBtn_01.addEventListener('click', (e)=> {
    acodienBox_01.style.display = 'block'
    detailBox_01.style = 'margin-bottom: 0px; border-radius: 0.5rem 0.5rem 0 0 '
})
openBtn_02.addEventListener('click', (e)=> {
    acodienBox_02.style.display = 'block'
    detailBox_02.style = 'margin-bottom: 0px; border-radius: 0.5rem 0.5rem 0 0 '
})