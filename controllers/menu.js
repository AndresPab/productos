function logout() {
    localStorage.clear();
    window.location.href = '/login.html';
}

window.addEventListener('DOMContentLoaded'  , () => {
    if (!localStorage.getItem('token')) {
        window.location.href = '/login.html';
    }


history.pushState(null, document.title, location.href);
window.addEventListener('popstate', function(event) {
    history.pushState(null, this.document.title, this.location.href);
}); 
});
   function logout() {
    localStorage.clear();
    window.location.href = '/login.html';
}