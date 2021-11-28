function changeImage(obj){

    var imageLinks = ["images/soccer.jpg","images/volleycourt.jpg", "images/tenniscourt.jpg" ]
    var descArray = 
    ["We teach soccer for girls/women and boys/men. Also, any other person above 17 years old can reserve our courts. We have 4 courts and many teachers and hours for the classes. Two courts are indoor."
    ,"We teach voleyball for girls/women and boys/men. Also, any other person above 17 years old can reserve our courts. We have 6 courts, the courts are indoor or outdoor."
    ,"We teach tennis for girls/women and boys/men. Also, any other person above 17 years old can reserve our courts. We have 10 courts, 4 courts are indoor and 6 outdoor."]
    var target = document.getElementById("image_target");
    var paraDesc = document.getElementById("description");

    if(obj.value=="soccer"){
        target.src = imageLinks[0];
        paraDesc.innerText = descArray[0];
    }
   else if(obj.value=="volly"){
        target.src = imageLinks[1];
        paraDesc.innerText = descArray[1];
    }
    else if(obj.value=="tennis"){
        target.src = imageLinks[2];
        paraDesc.innerText = descArray[2];
    }


    //target.src = obj.value;

    var target2 = document.getElementById("description");
    
}

