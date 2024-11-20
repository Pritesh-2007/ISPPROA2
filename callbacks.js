window.onload=()=>{
    const btn=document.querySelector(".btn");
    btn.addEventListener("click",()=>{
        let showpage;
        showpage=document.querySelector(".div2");
        showpage.style.display="flex";
        let waittext=document.createElement("p");
        waittext.textContent="data will be fetched within 5 seconds....";
        showpage.appendChild(waittext);    
    function fetchdataAPI(callback)
    {
     setTimeout(()=>{
        fetch("https://dummyjson.com/post")
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
     },5000);
    }
    function fetchdata(error,response)
    {
        if (error) {
            console.error('Error fetching data:', error);
          }
          else{
        const result=response;
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
    }
    fetchdataAPI(fetchdata);
  }); 
}