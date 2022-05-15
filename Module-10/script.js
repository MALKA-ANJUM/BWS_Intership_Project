console.log("hello");


$(document).ready(function(){
    $("button").on("click", function() {
        const randomNumber = Math.ceil(Math.random() * 88)
        $.get(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`,
            function(data){
            //console.log(data.name);
            $("#id").text(data.id)
            $("#name").text(data.name)
            $("#gender").text(data.gender)
            $("#born").text(data.born)
            $("#homeWorld").text(data.homeworld)
            $("#image").attr("src", data.image)
           
        })
    })
})

