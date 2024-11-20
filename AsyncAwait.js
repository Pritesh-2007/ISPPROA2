window.onload=()=>{
    const btn=document.querySelector(".btn");
    btn.addEventListener("click",fetchdata);
   async function fetchdata()
    {
        let showpage;
        showpage=document.querySelector(".div2");
        showpage.style.display="flex";
        let waittext=document.createElement("p");
        showpage.appendChild(waittext);
        waittext.textContent="data will be fetched within 5 seconds....";
    try {
        const response=await fetch("https://dummyjson.com/post");
        const result=await response.json();
        console.log(result); 
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
       catch (error) {
       console.log(error); 
       document.querySelector("p").innerHTML=error;
       } 
    } 
}