const checkCredentials = (credentials) => {
    return (credentials.username == 'admin' && credentials.password == '12345');
}

export default checkCredentials;
