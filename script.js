let icon = document.getElementById("dark");
console.log(icon);
icon.onclick = function(){
    document.body.classList.toggle("darkTheme");
    if(document.body.classList.contains("darkTheme")){
        icon.src = "./image/sun.png";
    }else{
        icon.src = "./image/sun.png";
    }
}