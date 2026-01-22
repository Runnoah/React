import { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const handleUsername = (e) => {
        const { value } = e.target;
        setUsername(value);

        if (value.length > 0 && value.length <= 6) {
            setUsernameError('El username debe tener más de 6 caracteres');
        } else {
            setUsernameError('');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (usernameError || username === '') {
            alert('No se puede enviar: el formulario contiene errores');
        } else {
            alert(username);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={handleUsername} 
                />
                <button type="submit">Enviar</button>
            </form>
            {usernameError && <p>{usernameError}</p>}
        </>
    );
}

export default App;