
const logIn = (credentials) => {
    return {
        type: 'LOG_IN',
        payload: credentials
    }
}

export {
  logIn
};
