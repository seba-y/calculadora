const show = document.getElementById('show');
const fullNum = document.getElementById('fullNum');
// NUMBERS ---
const nOne = document.getElementById('numOne');
const nTwo = document.getElementById('numTwo');
const nThree = document.getElementById('numThree');
const nFour = document.getElementById('numFour');
const nFive = document.getElementById('numFive');
const nSix = document.getElementById('numSix');
const nSeven = document.getElementById('numSeven');
const nEight = document.getElementById('numEight');
const nNine = document.getElementById('numNine');
const nCero = document.getElementById('numCero');
const comma = document.getElementById('comma');
// OPERATIONS ---
const reset = document.getElementById('reset');
const add = document.getElementById('addition');
const substr = document.getElementById('substraction');
const multiply = document.getElementById('multiply');
const division = document.getElementById('division');
const rest = document.getElementById('resto');
const equal = document.getElementById('equal');
const rq = document.getElementById('rq');
const potentia = document.getElementById('potentiation');
const pi = document.getElementById('pi');
const e = document.getElementById('e-num');
// TRIGONOMETRY
const hyp = document.getElementById('hyp');
const sin = document.getElementById('sin');
const sec = document.getElementById('sec');
const cos = document.getElementById('cos');
const csc = document.getElementById('csc');
const tan = document.getElementById('tan');
const cot = document.getElementById('cot');
const log = document.getElementById('log');
const ln = document.getElementById('ln');
const dgRd = document.querySelector('.deg-rad');
// FUNCTIONS
const random = document.getElementById('random');
const floor = document.getElementById('floor');
const ceil = document.getElementById('ceil');
const round = document.getElementById('round');

const deletee = document.getElementById('delete');
const calcH = document.getElementById('results');
const clearH = document.getElementById('clean-h');

// ---	---- --- ---- --- ---- --- ----

//logaritm

let hiper = 'no';
let opA = '' 	;
let opB = ''	;
let op = ''		;
let res = ''	;
let opT = ''	;

show.value = null ;

// EVENTOS DE LOS BOTONES --- ---- EVENTOS DE LOS BOTONES --- ----

onmousedown = ()=>{
	if(show.value.includes('!')){
		show.style.color = '#ffffff'
		message = false ;
		resetF()
	}
}

random.onclick = ()=>{	res = Math.floor(Math.random()*(Math.floor(100)-Math.ceil(0)+1)+Math.ceil(0));
						show.value = (res).toLocaleString('es-es');
}
floor.onclick = ()=>{	if(res != ''){
						res = Math.floor(parseFloat(res));
						show.value = (res).toLocaleString('es-es');
						fullNum.setAttribute('disabled','');
						}
}
ceil.onclick = ()=>{	if(res != ''){
						res = Math.ceil(parseFloat(res));
						show.value = (res).toLocaleString('es-es');
						fullNum.setAttribute('disabled','');
						}
}
round.onclick = ()=>{	if(res != ''){
						res = Math.round(parseFloat(res));
						show.value = (res).toLocaleString('es-es');
						fullNum.setAttribute('disabled','');
						}
}

dgRd.onclick = ()=>{ dgRd.textContent == 'RAD' ? dgRd.textContent = 'DEG' : dgRd.textContent = 'RAD';	}

		// se escribe en result el numero clickeado 
nOne.onclick = ()=>{show.value += 1;
					res += '1';	
					};
nTwo.onclick = ()=>{show.value += 2;
					res += '2';
					};
nThree.onclick = ()=>{show.value += 3;
					res += '3';
					};
nFour.onclick = ()=>{show.value += 4;
					res += '4';
					};
nFive.onclick = ()=>{show.value += 5;
					res += '5';	
					};
nSix.onclick = ()=>{show.value += 6;
					res += '6';
					};
nSeven.onclick = ()=>{show.value += 7;
					  res += '7';
					};
nEight.onclick = ()=>{show.value += 8;
					  res += '8';
					};
nNine.onclick = ()=>{show.value += 9;
					 res += '9';
					};
nCero.onclick = ()=>{show.value += 0;
					 res += '0';
					};
comma.onclick = ()=>{if((res+'').includes('.') == false){
						show.value += ',';
						res += '.' ;
						}	
					};
pi.onclick = ()=>{show.value = (Math.PI+'').replace('.',',');
				  res = Math.PI;
				 };
e.onclick = ()=>{show.value = (Math.E+'').replace('.',',');
				 res = Math.E;
				};
reset.onclick = ()=>{	resetF();	};	

		// se pasa por operations la opercion seleccionada 		
add.onclick = ()=>{	operations('+');	};
potentia.onclick = ()=>{	operations('^');	};
multiply.onclick = ()=>{	operations('x');	};
division.onclick = ()=>{	operations('/');	};
rest.onclick = ()=>{		operations('%');	};
hyp.onclick = ()=>{			hyperbolic(); 		};
rq.onclick = ()=>{			opTri('√');			};
log.onclick = ()=>{			opTri('log');		};
ln.onclick = ()=>{			opTri('ln');		};
sin.onclick = ()=>{ sin.textContent == 'sin'? opTri('sin') : opTri('sinh');		};
sec.onclick = ()=>{	sec.textContent == 'sec'? opTri('sec') : opTri('sech');		};
cos.onclick = ()=>{	cos.textContent == 'cos'? opTri('cos') : opTri('cosh');		};
csc.onclick = ()=>{	csc.textContent == 'csc'? opTri('csc') : opTri('csch');		};
tan.onclick = ()=>{ tan.textContent == 'tan'? opTri('tan') : opTri('tanh');		};
cot.onclick = ()=>{	cot.textContent == 'cot'? opTri('cot') : opTri('coth');		};
substr.onclick = ()=>{
						if(res == ''  && op != '-' && op != '+' && op != '√' ){
							show.value = '-';
							res = '-';
						}else if(res != '-' || res != '-.') {	operations('-');	}
		};
deletee.onclick = ()=>{	let shw = show.value.replace(/[.]/g,'');
						let shwDel = show.value.substring(0, show.value.length -1);
						
						if(show.value.replace(/[.]/g,'').length < (res+'').length){		
							res = (res+'').substring(0, (''+res).length -1);
							if((shw.length == (res+'').length) && (show.value.slice(-1) != res.slice(-1)) ){
								show.value = shwDel+res.slice(-1);
							}
						} else {
							if(show.value.slice(-1) == '.')	{
								show.value = shwDel;
								console.log('1');
							} else {	show.value = shwDel;
										res = (res+'').substring(0, (res+'').length -1);
										console.log('2');	}
							fullNum.setAttribute('disabled','');
						}
					  };
clearH.onclick = ()=>{	calcH.textContent = '';	};
equal.onclick = ()=>{
	if(opT != 'geometry' && opA == '' || op == '' ){
		show.value = '!NO HAY UNA OPERACIÓN PARA REALIZAR¡'
		show.style.color = 'rgb(223, 212, 65)'
	} else if((res+'').startsWith('-')  == true && res == '-' || res == '-.'  || res == '.'){
		show.value = '!OPERACIÓN INVALIDA¡';
		show.style.color = 'rgb(250,0,0)';
	 } else if(res != ''){
		opB = res;
		resolve();
	  }
};

fullNum.onclick = ()=> {	
	let shwC = show.value.replace(/[.]/g,'');
	show.value.slice(-1) != (res+'').substring(shwC.length-1, shwC.length) ?
							show.value = show.value.slice(0, -1)+(res+'').slice(shwC.length-1)
							:
							show.value += (res+'').slice(shwC.length, (res+'').length);
	fullNum.setAttribute('disabled','');
};

// --- ---- --- ---- --- ---- --- ---- --- ----


// EVENTOS DEL TECLADO  --- ---- EVENTOS DEL TECLADO --- ----
					// Busca si la tecla presionada coincide con los casos pasados en el switch.
document.addEventListener('keydown', (e)=>{
		switch(e.key){
			case '1': nOne.click();
				break;
			case '2': nTwo.click();
				break;
			case '3': nThree.click();
				break;
			case '4': nFour.click();
				break;
			case '5': nFive.click();
				break;
			case '6': nSix.click();
				break;
			case '7': nSeven.click();
				break;
			case '8': nEight.click();
				break;
			case '9': nNine.click();
				break;
			case '0': nCero.click();
				break;
			case '+': add.click();
				break;
			case '-': substr.click();
				break;
			case '*': multiply.click();
				break;
			case '/': division.click();
				break;
			case '%': rest.click();
				break;
			case ',': comma.click();
				break;
			case '=': equal.click();
				break;
			case 'Backspace': deletee.click();
				break;
			case 'Enter': equal.click();
				break;
			case '^' : potentia.click();
				break;
			case 't': tan.click();
				break;
			case 's': sin.click(); 
				break;
			case 'p': pi.click();
				break;
			case 'y': potentia.click();
				break;
			case 'l': log.click();
				break;
			case 'n': ln.click();
				break;
			case 'c': reset.click();
				break;
		}
});
// --- ---- --- ---- --- ---- --- ---- --- ----


// FUNCIONES --- ---- FUNCIONES --- ---- FUNCIONES --- ----
							//manjea las operaciones
function operations(op_){
	// Si no hay un numero guradado y hay un numero escrito, se guarda el numero y se limpia el result.
	if((res != '' && res != '-'  && res != '.' && res != '-.') && opA == '' && op_ != op){
			opA = res;
			op = op_;
			clear();
	}
	// si ya hay un numero guardado y hay un numero escrito, se realiza la operacion, se guarda el resultado y se limpia el result. 
	else if((res != '' && res != '-' && res != '.' && res != '-.') && opA != '' ){
			opB = res;
			resolve();
			opA = res;
			clear();
			op = op_;
	} 
}

function opTri(op_){
	if(opA != ''){	opA='' }
	op = op_ ;
	opT = 'geometry'
	if((op == 'log' || op == 'ln' || op == '√') && (res+'').startsWith('-')){
		show.value= '¡OPERACIÓN INVÁLIDA!';
		show.style.color='rgb(250,0,0)'
	} else if(res != '' && res != '-' && res != '.' && res != '-,'){
		opB = res;
		resolve();
	}
	opT = ''
}

						// Realiza la operacion segun corresponda
function resolve() {
	// fullOperation.textContent = operationA + operation + operationB  ;
	let res_ =  '' ;
	opA = parseFloat(opA);
	opB = parseFloat(opB);
	switch(op){
		case '+' : 	res_ = opA + opB;
			break;
		case '-' : 	res_ = opA - opB;
			break;
		case 'x' : 	res_ = opA * opB;
			break;
		case '/' : 	res_ = opA / opB;
			break;	
		case '√':	res_ = Math.sqrt(opB);
			break;
		case '^' :	res_ = opA ** opB;
			break;
		case '%':	res_ = opA % opB;
			break;
		case 'sin':	res_ = dgRd.textContent == 'DEG' ? Math.sin(opB*(Math.PI/180)) : Math.sin(opB);
			break;
		case 'sec':	res_ = dgRd.textContent == 'DEG' ? 1/Math.sin(opB*(Math.PI/180)) : 1/(Math.sin(opB));
			break;
		case 'cos':	res_ = dgRd.textContent == 'DEG' ? Math.cos(opB*(Math.PI/180)) : Math.cos(opB);
			break;
		case 'csc':	res_ = dgRd.textContent == 'DEG' ? 1/Math.cos(opB*(Math.PI/180)) : 1/Math.cos(opB);
			break;
		case 'tan':	res_ = dgRd.textContent == 'DEG' ? Math.tan(opB*(Math.PI/180)) : Math.tan(opB);
			break;
		case 'cot':	res_ = dgRd.textContent == 'DEG' ? 1/Math.tan(opB*(Math.PI/180)) : 1/Math.tan(opB);
			break;
		case 'log':	res_ = dgRd.textContent == 'DEG' ? Math.log10(opB*(Math.PI/180)) : Math.log10(opB);
			break;
		case 'ln':	res_ = dgRd.textContent == 'DEG' ? Math.log(opB*(Math.PI/180)) : Math.log(opB);
			break;
		case 'sinh': res_ = Math.sinh(opB);
			break;
		case 'sech': res_ = 1/(Math.sinh(opB));
			break;
		case 'cosh': res_ = Math.cosh(opB);
			break;
		case 'csch': res_ = 1/(Math.cosh(opB));
			break;
		case 'tanh': res_ = Math.tanh(opB);
			break;
		case 'coth': res_ = 1/(Math.tanh(opB));
			break;
	}
	// reemplaza los puntos para que no haya malentendidos entre los formatos es y en
	opA = (opA+'').replace(/[.]/g,',');
	opB = (opB+'').replace(/[.]/g,',');

	// agrega la operación al historial 
	if(opT == 'geometry'){
		calcH.insertAdjacentHTML('afterbegin', `<p class='his-p'>${op}(${opB}) = <br> <b class='his-b'>${(''+res_).replace(/[.]/g,',')}</b></p>`);
	} else if(op == '^'){
		calcH.insertAdjacentHTML('afterbegin',`<p class='his-p'>(${opA})<sup style="color:#4f4f4f;">${opB}</sup>=<br> <b class='his-b'>${(''+res_).replace(/[.]/g,',')}</b></p>`);
	}else { calcH.insertAdjacentHTML('afterbegin',`<p class='his-p'>${opA} ${op} ${opB} =<br> <b class='his-b'>${(''+res_).replace(/[.]/g,',')}</b></p>`);};
	
	resetF();
	res = res_ ;

	// si el numero es muy largo, muestra 
	(''+res).includes('e')	?	show.value = (res_+'').replace(/[.]/g,',') : show.value = res_.toLocaleString('es-es');
	// 	revisa si se habilita el boton fullNum 
	if(show.value.replace(/[.]/g,'').length != (''+res).length)	{ fullNum.removeAttribute('disabled','') } ;
}

function resetF() {
	op = '' ;
	opA = '' ;
	opB = '' ;
	show.value = '' ;
	res = ''	;
	fullNum.setAttribute('disabled','');
}

function clear() {
	show.value = '' ;
	res = '' ;
}

function hyperbolic(){
		if(hiper == 'no'){
				sin.textContent = 'sinh';
				sec.textContent = 'sech';
				cos.textContent = 'cosh';
				csc.textContent = 'csch';
				tan.textContent = 'tanh';
				cot.textContent = 'coth';
				hiper = 'yes';
				hyp.style.color='#ffff';
		} else {
				sin.textContent = 'sin';
				sec.textContent = 'sec';
				cos.textContent = 'cos';
				csc.textContent = 'csc';
				tan.textContent = 'tan';
				cot.textContent = 'cot'; 
				hiper = 'no';
				hyp.style.color='#313131';
				}
				
}

function toDegree(){
	if(dgRd.textContent == 'RAD'){
		res = res/(Math.PI/180);
		show.value = (''+res).replace(/[.]/g,',');
		dgRd.textContent = 'DEG';
	}	
}

function toRadian(){
	if(dgRd.textContent == 'DEG'){
		res = res*(Math.PI/180);
		show.value = (''+res).replace(/[.]/g,',');
		dgRd.textContent = 'RAD';
	}
}
// ---- ---- --- ---- --- ---- --- ---- --- ----

