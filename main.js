
// Nav bar 
let navigation = Array.from(document.querySelectorAll('#navigation li a'))
navigation.forEach(el=>{
    el.addEventListener('click',()=>{
        navigation.forEach((a)=>a.classList.remove('active'));
        
        el.classList.add('active')
    });
});



// PortFolio (filter image in nav
function portFolio (){
    let shuffle = document.querySelectorAll('.shuffle li');
let photoBox =document.querySelectorAll(`.imgs-container .box`);

shuffle.forEach((el)=>{
    el.addEventListener('click', removeAndAddActive);
    el.addEventListener('click', filterImage)
});

function removeAndAddActive(){
    shuffle.forEach((el)=> {
        el.classList.remove('active');
        this.classList.add('active');
    });
}

function filterImage(){
    photoBox.forEach((el)=>{
        el.children[1].children[1].innerHTML = this.dataset.cls.toUpperCase();
        el.classList.contains(this.dataset.cls) ? el.style.display='block' : el.style.display = 'none';
    });
}
}
portFolio ()


// About Us count Numbers
let parent = document.querySelector('.about');
let stats = document.querySelectorAll('.stats .box .number');
let started = false;
// console.log(parent)


window.onscroll = _ =>{
    if(window.scrollY >= parent.offsetTop){
        if(!started){
            stats.forEach((e) => startCount(e));
        }
        started = true
    }
}

function startCount(el){
    let goal = el.dataset.count;
    let count = setInterval(()=>{
        el.textContent++;
        if(el.textContent === goal){
            clearInterval(count)
        }
    },1 / goal)
}


// Our skills 
function anmationSkill (){
    let stats = document.querySelector('.stats')
    let skills = document.querySelectorAll('.skills .prog-holder span');

    window.addEventListener('scroll', _ =>{
        if(window.scrollY >= stats.offsetTop){
            skills.forEach((el)=> el.style.width = `${el.dataset.progress}`);       
        }
    });
}

anmationSkill ()