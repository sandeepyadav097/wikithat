$('document').ready(function(){
    
   

   
    $("#search").on("click", function(){
        
       
       
        var a=document.getElementById("input").value;
        
        
        if(a=="")
            {
               alert("Invalid Entry");
                return;
            }
          $.getJSON("https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+a+"&limit=10", function(data){
         
              document.getElementById("body").style.background="  linear-gradient(to right, #f0f2f0, #000c40)";
              
              for(var i=1; i<=9; i++){
                             
              document.getElementById("div"+i).style.borderRadius="5px";
              document.getElementById("div"+i).style.backgroundColor="antiquewhite";
              document.getElementById("div"+i).style. boxShadow="0 0px 20px 0 rgba(0, 0, 0, 0.99),0 10px 20px 0 rgba(0, 0, 0, 0.99)";
            
              }
     
              
      for(var i=1; i<=9; i++)
            {
                
               $("#output"+i).html(data[1][i-1]);
               $("#description"+i).html(data[2][i-1]);
               $("#link"+i).html("Go to Wiki");
             document.getElementById("link"+i).href=data[3][i-1];
            
            } 
              
        
    });
    
    });
    
});
