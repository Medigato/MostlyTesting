    //variables to be used in script 

            //currencies
                 var ff = 0;

           //factories 

                var smile = 0;
                var totalSmileOutput = 0;


           //story stuff

           var mainStoryText;
           var mainStoryArray = 
           [
                  
                 ["Your world is dizziness and confusion.","The warmth, welcoming darkness you had been used to appearo to be over, you breathe your first breath.","Then immediately start bawling your heart out. ","The first months are chaos, but after many moons pass, you recognize something in the shadows. ",
                        "You extend your hand and grab your first fiber of understanding. The face amongst the blurriness is looking directly at you. ",
                        "And they're smiling.",
                        "Suddenly, you feel an irrestible urge."],

                ["It is the face of your mother, so unearthly among the shadows. ","Her lips are rose pink and her eyes are piercing hazel.", "Consciousness forms fast like a thunder storm.", "What would you do with your time?"]]

             var currentStoryTextNumber = 0;    
             var mainStoryNumber = 0;
             var currentStoryArray = mainStoryArray[currentStoryTextNumber];
           
       

              totalSmileoutputf();
                
        window.setInterval(function () {
                // window.setInterval(function() { }, every how many ms. 
                //refresh score every 200 ms
                //refresh score
            document.getElementById("ffCount").innerHTML = "You have " + ff + " fireflies!";

        }, 200);

        window.setInterval(function () {

            //refresh ffps
            document.getElementById("ffpsCount").innerHTML = "Currently generating " + smile + " fireflies per second.";

            if (ff > 15) {
                
            }

            if (ff > 10) {
                document.getElementById("continueStory").style.display = "block";
             
            
                        
                

            }



   
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


        function continueStory(){
              
                        
            document.getElementById("mainStoryText").innerHTML = currentStoryArray[mainStoryNumber];
            mainStoryNumber += 1;
            
            if (mainStoryNumber === currentStoryArray.length){
                document.getElementById("continueStory").style.display = "none";
                currentStoryTextNumberfunction(currentStoryTextNumber);
                mainStoryNumber = 0;
                
            
            }



        }
    
        function currentStoryTextNumberfunction(){
            if(currentStoryTextNumber===1){
                enableChildHood();
                 
        }
            if(currentStoryTextNumber===0){
                    enableSmile();
                    currentStoryTextNumber = 1;
                    currentStoryArray = mainStoryArray[1];

            }
         


        }
        
        
    
        function enableSmile() {

            document.getElementById("add1ps").style.display="block";


        }



        function enableChildHood(){


            document.getElementById("activitiesContainer").style.display = "block";
            document.getElementById("goals").innerHTML = "Goal: Reach 10 Fireflies."



        }
        function once(fn, context) { 
            var result;
            return function() { 
                if (fn) {
                    result = fn.apply(context || this, arguments);
                    fn = null;
                }
                return result;
            };
        }

 
        if (ff > 10) {
            document.getElementById("continueStory").style.display = "block";
             // Add a Table with 4 buttons childhood activities. 
            

                 }
      