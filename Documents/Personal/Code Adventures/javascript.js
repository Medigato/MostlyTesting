    //variables to be used in script 

            //currencies
            var ff = 0;

           //factories 

           var smile = 0;
           var totalSmileOutput = 0;


           //story stuff

           var mainStoryText;
           var mainStoryArray = ["Your world is dizziness and confusion.","The warmth, welcoming darkness you had been used to appeared to be over, you breathe your first breath.","Then immediately start bawling your heart out. ","The first months are chaos, but after many moons pass, you recognize something in the shadows. ",
           "You extend your hand and grab your first fiber of understanding. The face amongst the blurriness is looking directly at you. ",
          "And they're smiling.",
         "Suddenly, you feel an irrestible urge."];
           var mainStoryNumber = 0;
       

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

            if (ff > 15) {
                
                document.getElementById("childhoodActivities").style.display = "inline";
                

            }

            if (ff > 10) {
                document.getElementById("continueStory").style.display = "inline";
                mainStoryArray = ["It is the face of your mother, so unearthly among the shadows. ","Her lips are rose pink and her eyes are piercing hazel.", "Consciousness forms fast like a thunder storm.", "What would you do with your time?"];
                // Add a Table with 4 buttons childhood activities. 
                        
                

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
              
                        
            document.getElementById("mainStoryText").innerHTML = mainStoryArray[mainStoryNumber];
            mainStoryNumber += 1;
            
            if (mainStoryNumber === mainStoryArray.length){
            document.getElementById("continueStory").style.display = "none";
            enableSmile();
            mainStoryNumber = 0;
            document.getElementById("goals").innerHTML = "Goal: Reach 10 Fireflies." 
            
            }



        }

        function enableSmile() {

            document.getElementById("add1ps").style.display="block";


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
            mainStoryArray = ["It is the face of your mother, so unearthly among the shadows. ","Her lips are rose pink and her eyes are piercing hazel.", "Consciousness forms fast like a thunder storm.", "What would you do with your time?"];
            // Add a Table with 4 buttons childhood activities. 
            

                 }
      