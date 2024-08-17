$('#save').on('click',() =>{

    var name = $('#stuName').val();
    var city = $('#stuCity').val();
    var email = $('#stuEmail').val();
    var lavel = $('#stuLavel').val();


    console.log(name);
    console.log(city);
    console.log(email);
    console.log(lavel);

    const studentData = {
        name:this.name,
        city:this.city,
        email:this.email,
        lavel:this.lavel
    };

    //create JSON
    const studentJson = JSON.stringify(studentData);
    console.log(studentJson)
    //save the data with AJAX
    const http = new XMLHttpRequest();
    http.onreadystatechange = () => {
        if (http.readyState == 4) {
            if (http.status==200) {
                var jsonTypeResponse = JSON.stringify(http.responseText)
                console.log(jsonTypeResponse)
            } else {
                console.error("Failed")
                console.error("Status code "+http.status)
                console.error("readyState "+http.readyState)
            }
        } else {
            console.error("Processing stage: Stage=",http.readyState)
        }
    }

    http.open("POST","http://localhost:8080/Stumgmt2024/student",true)
    http.setRequestHeader("Content-Type","application/json")
    http.send(studentJson)


});



                                

