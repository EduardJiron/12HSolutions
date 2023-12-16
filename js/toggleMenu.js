
let isDeployed =localStorage.getItem('isScroll') === 'true';


function toggleMenu(){
    const notScroll =document.querySelector('body')
    const toggleButton=document.getElementById("toggleButton")
    toggleButton.addEventListener('click', toogleDeployed)
    const menu = document.getElementById("menu-item")

    onload()
   
    function toogleDeployed(){
        isDeployed =!isDeployed

        if(isDeployed){
            deployedOn()
        }
        else{
            deployedOff()
        }
        localStorage.setItem('isScroll', isDeployed.toString());
    }

    function deployedOn(){
        menu.style.display="block"
        toggleScroll(isDeployed)
    }
    function deployedOff(){
        menu.style.display="none"
        toggleScroll(isDeployed)
    }


    function toggleScroll(isDeployed){
        let isScroll = isDeployed ? "hidden" : "scroll"
        notScroll.style.overflowY= isScroll
    }
    function onload(){
        if(isDeployed){
            deployedOn()
        }
        else{
            deployedOff()
        }
    }
}
