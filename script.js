let icon = document.getElementById("dark");
console.log(icon);
icon.onclick = function(){
    event.preventDefault();
    
    document.body.classList.toggle("darkTheme");
}