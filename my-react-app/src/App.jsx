import { useState } from 'react';

function App() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUsername = (e) => {
        const { value } = e.target;
        setUsername(value);

        if (value.length > 0 && value.length <= 6) {
            setUsernameError('El username debe tener más de 6 caracteres');
        } else {
            setUsernameError('');
        }
    };

    const handleEmail = (e) => {
        const val = e.target.value;
        setEmail(val);
        setEmailError(val.length > 0 && (!val.includes('@') || !val.includes('.')) ? 'Email inválido (falta @ o .)' : '');
    };

    const handlePassword = (e) => {
        const val = e.target.value;
        setPassword(val);
        setPasswordError(val.length > 0 && val.length < 8 ? 'Mínimo 8 caracteres' : '');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usernameError || username === '') {
            alert('No se puede enviar: el formulario contiene errores');
        } else {
            alert(username);
        }
    };

    const hayErrores = usernameError !== '' || emailError !== '' || passwordError !== '';
    const camposVacios = username === '' || email === '' || password === '';

    const botonBloqueado = hayErrores || camposVacios;

    return (
        <>
<           form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={handleUsername} />
                    {usernameError && <span style={{ color: 'red' }}> {usernameError}</span>}
                </div>
                <br/>
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={handleEmail} />
                    {emailError && <span style={{ color: 'red' }}> {emailError}</span>}
                </div>
                <br/>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={handlePassword} />
                    {passwordError && <span style={{ color: 'red' }}> {passwordError}</span>}
                </div>
                <br/>
                <button type="submit" disabled={botonBloqueado}>
                Enviar
                </button>
            </form>
        </>
    );
}

export default App;