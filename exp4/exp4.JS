function changeProduct() {

    
    document.getElementById("img1").style.display = "none";

    
    document.getElementById("img2").style.display = "block";

    document.getElementById("productName").innerHTML = "Wireless Bluetooth Headphones";
    document.getElementById("price").innerHTML = "Price: ₹3500";

    document.getElementById("body").style.backgroundColor = "#e6f2ff";
}


$(document).ready(function(){

    $("#hideBtn").click(function(){
        $("img:visible").hide();
    });

    $("#showBtn").click(function(){
        $("img").show();
    });

    $("#toggleBtn").click(function(){
        $("img").toggle();
    });

    $("#animateBtn").click(function(){
        $("img:visible").animate({
            width: "300px",
            height: "300px",
            opacity: 0.5
        });
    });

});