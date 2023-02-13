/*bringing the elements that we want to use---navbar and menbar*/
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const clo = document.getElementById('close')

if (bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active')
    })
}
if (clo){
    clo.addEventListener('click',()=> {
        nav.classList.remove('active')
    })
}