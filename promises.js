window.onload=()=>{
    const btn=document.querySelector(".btn");
    btn.addEventListener("click",()=>{
        const date=new Date();
        let starttime=date.getSeconds();
        let showpage;
        showpage=document.querySelector(".div2");
        showpage.style.display="flex";
        let waittext=document.createElement("p");
        showpage.appendChild(waittext);
        waittext.textContent="data will be fetched within 5 seconds....";
       const Promisedata=new Promise((resolve,reject)=>{
       setTimeout(()=>
        {
            const data=fetch("https://dummyjson.com/post").then(res=>resolve(res.json())).catch(err=>reject(err));
        },1000); 
    });
        Promisedata.then((result)=>{
        const date2=new Date();
        const timeDiff = Math.abs(date.getTime() - date2.getTime());
        if(timeDiff>5000)
        {
             document.querySelector("p").innerHTML="Operation timed out.";
        }
        else{
        let postsarray;
        let chld=document.querySelector("p");
        chld.remove();
        postsarray=result.posts;
        let postlines;
        let heading=document.createElement("h2");
        heading.textContent="Fresh posts just below!";
        showpage.appendChild(heading);
        for(let post of postsarray)
        {
            postlines= document.createElement("p");
            postlines.textContent=`${post.title}`;
            showpage.appendChild(postlines);
        }
    }
    });
    Promisedata.catch((error)=>{
    console.log("promise rejected",error);
    document.querySelector("p").innerHTML="Promise is Rejected";
 
    });    
    });
    
    }      
