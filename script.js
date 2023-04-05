let dec = document.getElementById("dec");
let inc = document.getElementById("inc");
let zero = document.getElementById("zero");
let reset = document.getElementById("reset");
let count = document.getElementById("zero").value;
count =Number(count);
inc.addEventListener("click",()=>{
    count = count + 1;
    if(count>=10){
        alert("10+ values are not allowed");
    }
    else{
    zero.value = count;
    }
});

dec.addEventListener("click",()=>{
    count = count - 1;
    if(count<0){
        alert("Negative values not allowed");
    }
    else{
    zero.value = count;
    }
});

reset.addEventListener("click",()=>{
   zero.value = 0;
});
