const ball  = document.getElementById('ball');

document.body.onclick = (e) => {
    ball.style.top = e.clientY + 'px';
    ball.style.left = e.clientX + 'px';
    ball.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    
}