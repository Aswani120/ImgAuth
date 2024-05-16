let p = document.getElementsByName("password")[0];
p.readOnly = true;

// Generating a 10x10 grid of buttons
let myDiv = document.getElementById("btn");
for(let n=0;n<10;n++){
    let num = document.createElement("button");
    num.className="num btn btn-outline-secondary";
    num.type="button";
    num.textContent=n;
    num.disabled=true;
    myDiv.appendChild(num);
}

for(let i=1;i<=10;i++){
    let dv = document.createElement("div");
    for(let j=1;j<=10;j++){
        let bt= document.createElement("button");
        bt.className="bt";
        bt.type="button";
        if(i==1){
            bt.disabled=true;
        }
        bt.addEventListener("click", bfun);
        let im = document.createElement("img");
        im.className = "im";
        bt.appendChild(im);
        dv.appendChild(bt);
    }
    myDiv.appendChild(dv);
}


//Randomizing numbers
let cl = document.getElementsByClassName("bt");
let org = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25"];
let dis = 0;
const mp = new Map();

function imgrand(){
    mp.clear();
    let num = org.slice();
    let img = document.getElementsByClassName("im");
    for(let k=0;k<cl.length;k++){
        const r = Math.floor(Math.random()*num.length);
        let sc = "/static/images/" + num[r]+ ".jpg";
        img[k].src = sc;
        if(k<10){
            mp.set(sc,k)
        }
        num.splice(r,1);
        if(num.length==0){
            num = org.slice();
        }
        if(dis==4){
            cl[k].disabled=true;
        }
    }
}

imgrand();

function bfun(){
    dis++;
    if(mp.has(this.firstChild.src.substring(21))){
        p.value += mp.get(this.firstChild.src.substring(21))
    }
    else{
        p.value += '*';
    }
    imgrand();
}


// Reset button
let rs = document.getElementById("rst");
rs.addEventListener("click",rst);
function rst(){
    if(dis==4){
        for(let b=10;b<cl.length;b++){
            cl[b].disabled=false
        }
    }
    dis = 0;
    p.value = "",
    imgrand();
}
