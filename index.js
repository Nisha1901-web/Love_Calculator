
let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
let loveScoreFinal = " Your Love Score is " + "<i style='color:green'>" +loveScore + "%" + "</i>";

    
    function getName(){

        let name1 = document.getElementById("person1").value;
        name1 =name1.toLowerCase();
        let name2 = document.getElementById("person2").value;
        name2 = name2.toLowerCase();


        if(name1.length == 0 || name2.length == 0){

            alert("Enter Names First ...");
           
        }

        else{

          $("img").click(function(){
              
            $(".userNames").text(name1  +" "+  " & " + " " +name2);
            $(".result").html(loveScoreFinal);
            $(".container").slideUp();
            $(".demo").hide();
            $("img").addClass("one");
            $("img").attr('src' , 'https://img.freepik.com/free-photo/world-smile-day-emojis-arrangement_23-2149024495.jpg?w=2000' );
            $("h4").addClass("hidden");
            $("body").css("backgroundColor","#f4eeee");
          });

        }



    }

    

    
    
        
    



    



        
       



   






        
