// setting the token to the sessionStorage
export const setToken = (token) => {
    sessionStorage.setItem('token', token);
}

// getting the token from the sessionStorage
export const getToken = () => {
    return sessionStorage.getItem('token');
}

// this is for clearing the sessionStorage
export const logout = () => {
    sessionStorage.clear()
    window.location.href = '/login';
}

// setting the email to the sessionStorage
export const setEmailer = (email) => {
    sessionStorage.setItem('email', email);
}

// getting the email from the sessionStorage
export const getEmailer = () => {
    return sessionStorage.getItem('email');
}