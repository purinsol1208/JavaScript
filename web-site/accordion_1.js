window.onload= () => {
const panelFaqContainer = document.querySelectorAll('.panel-faq-container');
console.log(panelFaqContainer);

//반복문 순회 하면서 해당 FAQ 제목 클릭 시 콜백 처리
for(let i = 0; i < panelFaqContainer.length; i++) {
    panelFaqContainer[i].addEventListener('click', function() {
        console.log(i + 'click!');
    });
}

}