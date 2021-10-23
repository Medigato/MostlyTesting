    //variables to be used in script 

            //currencies
            var ff = 0;

           //factories 

           var smile = 0;
           var totalSmileOutput = 0;

        totalSmileoutputf();
            // window.setInterval(function() { }, every how many ms. 
            //refresh score every 200 ms
        window.setInterval(function () {

            //refresh score
            document.getElementById("ffCount").innerHTML = "You have " + ff + " fireflies!";

        }, 200);

        window.setInterval(function () {

            //refresh ffps
            document.getElementById("ffpsCount").innerHTML = "Currently generating " + smile + " fireflies per second.";
    



   
        }, 200);

            //adds 100 ffs 
        function add100ff(){
        ff += 100; 
        }

        
        function add1ps(){
            
            smile += 1;
                       
            
            }


        function totalSmileoutputf (){
            
            var myVar = setInterval(function(){
               
               totalSmileOutput = smile; 
                ff += totalSmileOutput;
            }, 1500);

        
            }

        function clear1ps() {

            

            smile -= 1;


        }
