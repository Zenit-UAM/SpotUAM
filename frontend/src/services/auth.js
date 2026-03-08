import api from "../api/axios";

// archivos para que se hable react con los endpoints del backend

export async function registerUser(username, studentID,email,password) {
    const res = await api.post("/register", {username, studentID, email,password});
    return res.data;
}

export async function loginUser(email,password) {
    const res = await api.post("/login", {email,password});
    return res.data;
}

export async function logoutUser() {
    const res = await api.post("/logout");
    return res.data;
}

export async function verifySession() {
    const res = await api.get("/verification");
    return res.data;
}