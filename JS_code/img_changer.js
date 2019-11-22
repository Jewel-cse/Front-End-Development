let my_img = document.querySelector('img');
my_img.onclick = function () {
    let my_src = my_img.getAttribute('src');
    if(my_src === '../assets/girl.jpg'){
        my_img.setAttribute('src','../assets/apple.ico');
    }
    else{
        my_img.setAttribute('src', '../assets/girl.jpg');
    }
}