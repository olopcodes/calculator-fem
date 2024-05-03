const themeTogglerSpanEl = document.querySelectorAll('.theme-toggler span');
const body = document.querySelector('body');
const themeButton = document.querySelector('.theme-toggler__btn');

// change color theme on click and move button
themeTogglerSpanEl.forEach(el => {
    el.addEventListener('click', e => { 
        changeThemeColor(e)
    });
    
});

// change theme color
function changeThemeColor(e) {
    let mod;
        
        if(e.target.classList.contains('theme-1')){
            
            body.dataset.theme = 'one';
            mod = 'one';
    
        } else if(e.target.classList.contains('theme-2')) {
           
            body.dataset.theme = 'two';
            mod = 'two';
    
        } else if(e.target.classList.contains('theme-3')) {
            
            body.dataset.theme = 'three';
            mod = 'three';
        }
        
        // when clicked move the toggle
        moveThemeTogglerButton(mod);
}

// move toggle button
function moveThemeTogglerButton (mod) {
    
    themeButton.classList.remove(themeButton.classList[1]);
    themeButton.classList.add(`theme-${mod}`);

}