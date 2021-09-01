function form_validate(){
	var calls = document.getElementById('i_calls').value;
	calls = parseInt(calls);
	var sms = document.getElementById('i_sms').value;
	sms = parseInt(sms);
	var price_sms = 0;
	var price = 0;
	price_sms = parseFloat(price_sms);
	price = parseFloat(price);
	var text = ""

	if (calls <= 50){
		price = calls * 0.50;
	}
	else if (calls <= 150){
		price = 25 + (calls-50)*0.70;
	}
	else if (calls <= 300){
		price = 25 + 70 + (calls-150)*0.85;
	}
	else if (calls > 300){
		price = 25+ 70 + 127.5 + (calls-300)*0.95;
	}


	if (sms <= 50){
		price_sms = 0;
	}
	else if (sms <= 200){
		price_sms = 0 + (sms-50)*0.25;
	}
	else if( sms <= 400){
		price_sms = 0 + 37.5 + (sms-200)*0.40;
	}
	else if( sms > 400){
		price_sms = 0 + 37.5 + 80 + (sms-400)*0.45;
	}

	var add = price + price_sms;
	alert("Charges for calls " + price + "/- \n" + "Charges for SMS " + price_sms + "/- \n" + "Total Charges " + add + "/- \n");
	return true;
}