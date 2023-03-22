var btnOpen=document.getElementById('open');
var btnClose=document.getElementById('close');
var container=document.getElementById('div');
btnClose.onclick=()=>{
    container.classList.add('hiden');;
    btnOpen.classList.remove('hiden');
    btnClose.classList.add('hiden');
};
btnOpen.onclick=()=>{
    container.classList.remove('hiden');
    btnClose.classList.remove('hiden');
    btnOpen.classList.add('hiden');
};
