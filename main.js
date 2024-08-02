const navItems=document.querySelector('.nav_item');
const openNavBtn=document.querySelector('#open_nav-btn');
const closeNavBtn=document.querySelector('#close_nav-btn');

const openNav =()=>{
    navItems.computedStyleMap.display='flex';
openNavBtn.Style.display='none';
closeNavBtn.style.display='inline-block';

}
const closeNav =()=>{
    navItems.computedStyleMap.display='flex';
openNavBtn.Style.display='inline-block';
closeNavBtn.style.display='inline-block';

}
openNavBtn.addEventListener('click',openNav);


const sidebar=document.querySelector('aside');
const showSidebarBtn=document.querySelector('#show_sidebar-btn');
const hideSidebarBtn =document.querySelector('#hide_sidebar-btn');

const showSidebar=()=>{
    sidebar.style.left='0';
    showSidebarBtn.style.display='none';
    hideSidebarBtn.style.display='inline-block'
}
const hideSidebar=()=>{
    sidebar.style.left='-100%';
    showSidebarBtn.style.display='inline-block';
    hideSidebarBtn.style.display='none'
}
showSidebarBtn.addEventListener('click' ,showSidebar);
showSidebarBtn.addEventListener('click' ,hideSidebar)