	function pow(number, exponent){
	var number = prompt('Введите целое число');
	var exponent = prompt('Введите целое число');
	
	if (exponent>0){
	var result=1;
	for (var i=0; i<exponent; i++){
    result*=number;
	}
    console.log('Результат вычислений:', result);
	}
	else if (exponent==0){
    console.log('Результат вычислений =1');	
	} 
	return result;
	}
    pow();