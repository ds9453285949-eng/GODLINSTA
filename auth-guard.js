// auth-guard.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    const currentPage = window.location.pathname;
    if (!user) {
        if (currentPage !== '/auth.html' && currentPage !== '/index.html') {
            window.location.replace("auth.html");
        }
    } else {
        if (currentPage === '/auth.html' || currentPage === '/index.html') {
            window.location.replace("home.html");
        }
    }
});
