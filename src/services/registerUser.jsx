const registerUser = async (username, password) => {
    const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const newUser = await response.json();
        console.log('Пользователь зарегистрирован:', newUser);
    } else {
        console.error('Ошибка регистрации');
    }
};
