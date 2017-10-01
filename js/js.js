// alert('one');
							//Task_1
var p = document.getElementsByTagName('p');
for (var i =0; i<p.length; i++) {
	p[i].onclick = pRed;	
}


function pRed(){
	this.style.background = 'red';
}
							//Task_1
							//Task_2
function shadow (){
	var img = document.getElementsByTagName('img');
		for (var i = 0; i<img.length; i++) {
			img[i].style.boxShadow = 0 + ' ' + 0 + ' ' + 10 + 'px';
	}
}
shadow();

// canvas = document.getElementById("drawingCanvas");
// context = canvas.getContext("2d");

// context.shadowOffsetX = 10;
// context.shadowOffsetY = 10;
// context.shadowColor = "#bbbbbb";
// context.shadowBlur = 4;

// var img = new Image();
// img.onload = function() {
// 	context.drawImage(img, 250, 30);
// };
// img.src = "img/if_google_chrome_98574.png";


							//Task_2

							//Task_3
function piCount() {
    var p = document.getElementsByTagName('p');
    for (var i = 0; i < p.length; i++) {
        p[i].insertAdjacentHTML('afterBegin', i + 1 + ')');
    }
}
 piCount();

							//Task_3



							//Task_4
var butClick = 0
var b1 = document.getElementById('but1').onclick = butPush;
var b1 = document.getElementById('but2').onclick = butPush;

function butPush(){
	{
    console.log(this.id);
    if (this) {
        butClick++;
        document.getElementById('btnOneOut').innerHTML = butClick;
    } else {
        butClick++;
        document.getElementById('btnTwoOut').innerHTML = butClick;
    }
}


}
							//Task_4

							//Task_5
//var nu
 document.getElementById('pw').onclick = function() {
    var a5 = document.getElementById('num1').value;
    var b5 = document.getElementById('num2').value;
    mathPow(a5, b5);
};

function mathPow(x, y) {
    var out = document.getElementById('rPw');
    out.innerHTML = Math.pow(x, y);
}
							//Task_5

							//Task_6
							//Task_6


							// Task_7_8
function go(){

	if (age>16) {
		console.log('добро пожаловать');

	}
	else if (age < 16) {
		console.log('вы еще молоды');
	}
	else {
		console.log('введите возраст');
	}
}
go('16');
							//Task_7_8


							//Task_8
							//Task_8


							//Task_9
							//Task_9


							//Task_10
	document.getElementById('rPow').onclick = function() {
    var num = document.getElementById('pow').value;
    document.getElementById('rPow').innerHTML = nums(num);
}

function nums(a) {
    if (a > 10) {
        return a * a;
    } else if (a < 7) {
        return 'Число меньше 7';
    } else if (a >= 7 && a <= 10) {
        return a;
    }
}
							//Task_10


							//Task_11 "Угадай число"
var numer = Math.floor(10*Math.random()) + 1;
console.log(numer);
var count = 2;

document.getElementById('check').onclick = function(){
	if(count > 0){
		var usernum = document.getElementById('number').value;
		usernum = parseInt(usernum);
		var out = document.getElementById('out');

		if (usernum == numer) {
			out.innerHTML = 'Угадали';
		}
		else if (usernum > numer){
			out.innerHTML = 'Взяли больше';
		}
		else if (usernum < numer){
			out.innerHTML = 'Взяли меньше';
		}
		count = count - 1;
		document.getElementById('count').innerHTML = 'ещо раз'+count;
	}
	else {
		alert ('Проиграш');
		location.reload();
	}
}

							//Task_11

