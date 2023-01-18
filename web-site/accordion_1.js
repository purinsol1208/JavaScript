window.onload= () => {
const panelFaqContainer = document.querySelectorAll('.panel-faq-container');
console.log(panelFaqContainer);

//반복문 순회 하면서 해당 FAQ 제목 클릭 시 콜백 처리
for(let i = 0; i < panelFaqContainer.length; i++) {
    panelFaqContainer[i].addEventListener('click', function() {
        //console.log(i + 'click!');

        //FAQ 본문 선택
        let panelFaqAnswer = document.querySelectorAll('.panel-faq-answer');
        //console.log(panelFaqAnswer[i]);

        /*FAQ 제목 클릭 시 -> 본문이 보이게끔 -> active 클래스 추가
        this.classList.add('active'); -> 현재 this는 panelForContainer이지만
                                        panel-faq-answer 클래스에 active를 추가 해야함 */
        panelFaqAnswer[i].classList.add('active');
    });
}

}