// const submitBtn = document.querySelector('button');
// submitBtn.addEventListener('click', function () {
//     // let val = document.forms[0].school.value;
//     let val = document.querySelector("#school").value;
//     let result = document.querySelector('#result');
//     result.textContent = val;
//     console.log(val);
// });

// let ansBtn = document.querySelector(".ansBtn");
// ansBtn.addEventListener('click',function(){
//     let num1 = document.querySelector(".val_1").value;
//     let num2 = document.querySelector(".val_2").value;
//     let answer = parseInt(num1) + parseInt(num2);
//     let ansResult = document.querySelector('#ansResult');
//     ansResult.textContent = answer;
// })

//足し算
// const plusBtn = document.querySelector('.plusBtn');
// const minusBtn = document.querySelector('.minusBtn');
// const timesBtn = document.querySelector('.timesBtn');
// const dividedBtn = document.querySelector('.dividedBtn');
// const result = document.querySelector('#resultNum');

// plusBtn.addEventListener("click",function(){
//     const num1 = document.querySelector("#firstNum").value;
//     const num2 = document.querySelector("#secondNum").value;
//     result.value = Number(num1) + Number(num2);
// })

// minusBtn.addEventListener("click",function(){
//     const num1 = document.querySelector("#firstNum").value;
//     const num2 = document.querySelector("#secondNum").value;
//     result.value = Number(num1) - Number(num2);
// })

// timesBtn.addEventListener("click",function(){
//     const num1 = document.querySelector("#firstNum").value;
//     const num2 = document.querySelector("#secondNum").value;
//     result.value = Number(num1) * Number(num2);
// })

// dividedBtn.addEventListener("click",function(){
//     const num1 = document.querySelector("#firstNum").value;
//     const num2 = document.querySelector("#secondNum").value;
//     result.value = Number(num1) / Number(num2);
// })

// const radioBtn = document.querySelector(".radioBtn");
// radioBtn.addEventListener("click", function(){
//     console.log(document.querySelector("#radioForm").radio.value);
// })

let sideRange = document.querySelector('.leftright');
	let vertiRange = document.querySelector('.topbottom');
	let rabbit = document.querySelector('#rabbitImg');
	let formvalue = document.forms;
	//それぞれのinput要素にイベントを設定
	for (let i = 0; i < formvalue.length; i++) {
		formvalue[i].addEventListener('input', function () {
			rabbit.style.transform = 'translate(' + sideRange.value + 'px,' + vertiRange.value + 'px)';
		});
	}