// accordion skills
const faqContent = document.getElementsByClassName('faq__content'),
      faqHeader = document.querySelectorAll('.faq__header')

function toggleFaq(){
    let itemClass = this.parentNode.className

    // 設置所有技能內容為隱藏
    for(i=0; i < faqContent.length; i++){
        faqContent[i].className = 'faq__content faq__close'
    }
    // 如果點擊的元素之前是關閉狀態，則打開它，否則保持關閉狀態
    if(itemClass === 'faq__content faq__close'){
        this.parentNode.className = 'faq__content faq__open'
    }
}

faqHeader.forEach((el) =>{
    el.addEventListener('click', toggleFaq)
})