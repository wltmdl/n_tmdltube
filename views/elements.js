class Ytnew extends HTMLElement {
    constructor(){
        super();
        console.log("생성된 새로운 엘리멘트");
    }
    connectedCallback(){
        console.log("해당 엘리멘트가 body 에 추가될 때 실행될 함수 혹은 body 에 이미 있을 경우")
    }
}
customElements.define('yt-new',Ytnew);



// document.querySelector('#test').addEventListener('click',e=>{
//     let i = document.createElement('yt-new');
//     document.body.appendChild(i);
// })
