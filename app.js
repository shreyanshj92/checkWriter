
var app = angular.module("myApp",[]);
	app.controller("myCtrl",function($scope){
    $scope.output = "";
	
    
	//below function is spliting number into two parts 1st is integer value and 2nd is decimal value.
	$scope.converter = function(){
	var inputArray = $scope.inputNumber.toString().split(".");
    var decimalValue = "";
    var decimalToWord = ""; 
    var decimal = '1';
    decimalValue = inputArray[1];
	
	
		
    var numberToWord = numToWord(inputArray[0]); //passing integer number into numToWord function
	
	//checking decimal number 
    if (inputArray[1] > 0){
        for(var x = 0; x < decimalValue.length; x++){
            decimal = decimal + 0;
        }
        decimalToWord =" and " + decimalValue + "/" + decimal;
    }
    else {
        decimalToWord = "";
		}
    $scope.output = numberToWord + decimalToWord; // adding numberToWord and decimalToWord converted output
	console.log( $scope.output);
	return $scope.output; // Finally return results 
	};

 function numToWord(input) {
    var str = new String(input)
    var splt = str.split("");
    var rev = splt.reverse();
    var once = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
    var twos = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
    var tens = ['', 'Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

    numLength = rev.length;
    var word = new Array();
    var j = 0;

    for (i = 0; i < numLength; i++) {
        switch (i) {

            case 0:
				word[j] = ((rev[i] == 0) || (rev[i + 1] == 1)) ? word[j] = '' : word[j] = '' + once[rev[i]];
                word[j] = word[j];
                break;

            case 1:// converting tens value
			case 4:
			case 6:
			case 8:
                aboveTens();
                break;

            case 2://converting Hundreds value
                if (rev[i] == 0) {
                    word[j] = '';
                }
                else if ((rev[i - 1] == 0) || (rev[i - 2] == 0)) {
                    word[j] = once[rev[i]] + " Hundred ";
                }
                else {
                    word[j] = once[rev[i]] + " Hundred and";
                }
                break;

            case 3:// converting thousands value
                if (rev[i] == 0 || rev[i + 1] == 1) {
                    word[j] = '';
                }
                else {
                    word[j] = once[rev[i]];
                }
                if ((rev[i + 1] != 0) || (rev[i] > 0)) {
                    word[j] = word[j] + " Thousand";
                }
                break;

            case 5:// converting Lakhs value
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                }
                else {
                    word[j] = once[rev[i]];
                }
                if (rev[i + 1] !== '0' || rev[i] > '0') {
                    word[j] = word[j] + " Lakh";
                }
                 
                break;

            case 7:// converting crores value
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                }
                else {
                    word[j] = once[rev[i]];
                }
                if (rev[i + 1] !== '0' || rev[i] > '0') {
                    word[j] = word[j] + " Crore";
                }                
                break;

           default: break;
        }
        j++;
    }

    function aboveTens() {
        if (rev[i] == 0) { word[j] = ''; } 
        else if (rev[i] == 1) { word[j] = twos[rev[i - 1]]; }
        else { word[j] = tens[rev[i]]; }
    }

    word.reverse();
    var finalOutput = '';
    for (var a = 0; a < numLength; a++) {
        finalOutput = finalOutput + word[a];
    }
    return finalOutput;// return integer number to word converted value
    }
});