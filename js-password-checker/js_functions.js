function check_password()
{
	let password = document.getElementById('password').value;
	
	let valid = false;

	if(
		password.match(/[A-Z]/)         // 1 or more uppercase letters
		&& password.match(/[a-z]/)      // 1 or more lowercase letters
		&& password.match(/[0-9]/)      // 1 or more numbers
		&& password.match(/[!@#$%^&*]/) // 1 or more Special character
		&& password.length > 5          // 6 or more characters
	){
		valid = true;
	}
  
	let message = document.getElementById('message');
	
	message.style.display = "inline-block";

	if( valid ){
		message.innerHTML = 'Password is valid!';
		message.style.background = "#0f0";
	}
	else{
		message.innerHTML = 'Password is invalid!';
		message.style.background = "red";
	}
}