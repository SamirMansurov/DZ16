let inp = document.querySelector(".input-email")
let error = document.querySelector(".error-message")
function valigate () {
    inp.onblur = (e) => {
    if (!e.target.value.includes("@")) {
        error.innerHTML = "Невозможно";
    }else {
        error.innerHTML = "";
    }  
}
}


let inputname = document.querySelector(".inputname")
let nam = document.querySelector(".name")

    inputname.addEventListener('change', function(e) {
     let num = parseInt(this.value, 10)
     let min = 2
     let max = 15

     if (isNaN(num)) {

        this.value.innerHTML = "";
        return;
     }else {
        inputname.innerHTML = "Невозможно"
     }

     this.value = Math.max(num, min);
     this.value = Math.min(num, max)
}) 



