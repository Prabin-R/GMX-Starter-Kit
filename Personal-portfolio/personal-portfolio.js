
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");
function closemenu(){
    sidemenu.style.right="-200px";
}
function openmenu(){
    sidemenu.style.right="0";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwHy_O6ol-_G87F2c1PjeyV-socvV_AnnE02v5JmfmP2qj_boISGNoHatHDLT-_s8Px/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => { msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = " ";
        },5000)
        form.reset() 
    })
    .catch(error => console.error('Error!', error.message))
})


