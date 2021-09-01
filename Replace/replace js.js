function form_validate(){
	var message="";
	var text = document.getElementById('i_enter_text').value;
	var replace_word = document.getElementById('i_replace').value;
	var new_word = document.getElementById('i_replaced').value;
	var result = text.replaceAll(replace_word, new_word);
	alert(result);
	return true;
}