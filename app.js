console.log("Working fine");
let body = document.querySelector("body");
let btn = document.querySelector("button");
let inp = document.querySelector("#inp");
let source = document.querySelector(".source");
let aux = document.querySelector(".aux");
let dest = document.querySelector(".dest");
btn.addEventListener("click",()=>{
    let wd= 300;
    let n=inp.value;
    let bt = 250;
    let lt = 75;
    for(let i=0;i<n;i++)
    {
        let div = document.createElement("div");
        source.append(div);
        div.classList.add("block");
        div.innerText=n - i;
        div.style.width = wd+"px";
        div.style.top = bt+"px";
        div.style.left= lt+"px";
        wd-=25;
        lt+=12.5;
        bt = bt - 20;
        div.id="d"+(n-i);
    }
    toh(n,'A','B','C');
});

async function freeze()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // a.append(x);
            res();
        },1000);
    });
}

async function toh(n,start,mid,end)
{
    if(n==0)
        return 0;
    await toh(n-1,start,end,mid);
    await freeze();
    console.log(`Move Disk ${n} from ${start} to ${end}`);
    let x = document.querySelector(`#d${n}`);
    if(end=='C')
        dest.append(x);  // to end
    else if(end =='B')
        aux.append(x); // to aux
    else
        source.append(x);   // to start
    await toh(n-1,mid,start,end);
}




