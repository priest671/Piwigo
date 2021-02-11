function setDisplayTuile() {

    removeIconDesc();

    /**
     * Regrouper les changement css dans des objets
     */

    $(".categoryBox").css("min-width", "22%");
    $(".categoryBox").css("flex-direction", "column");
    $(".categoryBox").css("max-height", "200px");


    $(".addAlbum").css("min-width", "22%");
    $(".addAlbum").css("flex-direction", "column");
    $(".addAlbum").css("max-height", "200px");

    $(".addAlbumHead").css("flex-direction", "column");
    $(".addAlbumHead p").css("margin-left", "0");
    $(".addAlbumHead").css("align-items", "center");
    $(".addAlbumHead").css("margin-top", "-10px");

    $(".addAlbum form").css("flex-direction", "column")
    $(".addAlbum form input").css("margin", "0px 10px 0px 10px")
    $(".addAlbum form button").css("margin", "10px auto 0 auto")

    $(".addAlbumHead").css("transform", "translateY(75px)")
    $(".addAlbumHead").css("transition", "0.4s ease")

    $(".albumActions").css("width", "100%");

    $(".albumTop").css("width", "auto");

    $(".albumInfos").css("margin-left", "0");
    $(".albumInfos").css("flex-direction", "column");


    // if ($(".addAlbum").hasClass("input-mode")) {
    //     $(".addAlbum p").hide(300);
    // }

     
}

function setDisplayLine() {

    /**
     * Regrouper les changement css dans des objets
     */
    
    removeIconDesc();

    

    $(".categoryBox").css({
        minWidth: "90%",
        flexDirection: "row",
        maxHeight: "75px"
    })   

    $(".addAlbum").css({
        minWidth : "90%",
        flexDirection: "row",
        maxHeight: "75px"
    })

    $(".addAlbumHead").css("flex-direction", "row");
    $(".addAlbumHead p").css("margin-left", "15px");
    $(".addAlbumHead").css("align-items", "baseline");
    $(".addAlbumHead").css("margin-top", "0");

    $(".addAlbum form").css("flex-direction", "row")
    $(".addAlbum form").css("align-items", "center")

    // $(".addAlbum form input").css("margin", "0px 10px 0px 10px")
    $(".addAlbum form button").css("margin", "0px 20px")


    $(".addAlbumHead").css("padding", "0")
    $(".addAlbumHead").css("transform", "translateY(0)")

    $(".addAlbumHead").css("transform", "translateX(75px)")

    $(".albumActions").css("width", "300px");

    $(".albumTop").css("width", "30%");

    $(".albumInfos").css("margin-left", "auto");
    $(".albumInfos").css("flex-direction", "row");
}


function gotIconDesc() {
    $(".albumActions span.iconLegend").show();
}

function removeIconDesc() {
    $(".albumActions span.iconLegend").hide();
}


$(document).ready(function () {
    console.log("hello world");

    $(".addAlbumHead").on("click", function () {
        $(".addAlbum").addClass('input-mode');
        $(".addAlbum p").hide(300); 
    })

    $(".cancelAddAlbum").on("click", function () {
        $('.addAlbum').removeClass('input-mode');
        $(".addAlbum p").show(800);
    })

    if ($("#displayTuile").is(":checked")) {
        setDisplayTuile();
    };

    if ($("#displayLine").is(":checked")) {
        setDisplayLine();
    };

    $("#displayTuile").change(function () {
        console.log("I'm tuiled");
        setDisplayTuile()
    })

    $("#displayLine").change(function () {
        console.log("I'm lined");
        setDisplayLine()
    })

    $("#displayAutre").change(function () {
        console.log("I'm autre-ed");
    })

})