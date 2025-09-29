//your JS code here. If required.
	const loginForm = document.getElementById('loginForm');
    const submitButton = document.getElementById('submit');
    const existingButton = document.getElementById('existing');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('checkbox');

	const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

	if(storedPassword && storedPassword){
		existingButton.style.display = 'block';
	}

	loginForm.addEventListener('submit', (e) => {
		e.preventDefault();
		
		alert(`Logged in as ${usernameInput.value}`);
		
		if(rememberMeCheckbox.checked){
			localStorage.setItem('username', usernameInput.value);
			localStorage.setItem('password', passwordInput.value);
		} else {
			localStorage.removeItem('username');
            localStorage.removeItem('password');
		}
	});

	existingButton.addEvenListener('click', () => {
		if(storedUsername){
			alert(`Logged in as ${storedUsername}`);
		}
	})