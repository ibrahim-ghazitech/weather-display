let list = document.querySelectorAll('#ul-list li a');
let allList = document.querySelectorAll('#ul-list li a');


list.forEach(anchor => {
 anchor.addEventListener('click',function(){
    allList.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
 });
});
