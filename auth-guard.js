// auth-guard.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    const currentPage = window.location.pathname;
    
    // Agar user logged in nahi hai aur wo protected page par hai
    if (!user) {
        if (!currentPage.includes('auth.html') && !currentPage.includes('index.html')) {
            window.location.replace("auth.html");
        }
    } 
    // Agar user logged in hai aur wo auth page par wapas ja raha hai
    else {
        if (currentPage.includes('auth.html') || currentPage.includes('index.html')) {
            window.location.replace("home.html");
        }
    }
});
