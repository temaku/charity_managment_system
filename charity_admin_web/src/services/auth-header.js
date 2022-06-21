
export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token }
    } else {
        return {}
    }
}

export const token = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    if(user && user.token){
        return user.token
    }else{
        return
    }
}

export const authHeaderForPdf = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    if (user && user.token) {
        return { token: user.token, 'Accept': 'application/pdf' }
    } else {
        return {}
    }
}