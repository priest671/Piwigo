function setDisplayTuile() {

    removeIconDesc();

    $(".categoryBox").css({
        minWidth: "22%",
        flexDirection: "column",
        maxHeight: "200px"
    });

    $(".addAlbum").css({
        minWidth : "22%",
        flexDirection: "column",
        maxHeight: "200px"
    });

     $(".addAlbumHead").css({
         flexDirection: "column",
         transform: "translateY(75px)",
         alignItems: "center",
         marginTop: "-10px",
         transition: "0.4s ease"
    });

    $(".albumInfos").css({
        marginLeft: "0",
        flexDirection: "column"
    });

    $(".albumTop").css({
        width: "auto",
        justifyContent: "center"
    })

    $(".addAlbum form").css("flex-direction", "column");
    $(".addAlbum form input").css("margin", "0px 10px 0px 10px");
    $(".addAlbum form button").css("margin", "10px auto 0 auto");

    $(".albumInfos p").css("margin", "0")

    $(".addAlbumHead p").css("margin-left", "0");
    $(".albumActions").css("width", "100%");

}

function setDisplayLine() {

    removeIconDesc();

    $(".categoryBox").css({
        minWidth: "90%",
        flexDirection: "row",
        maxHeight: "75px"
    });

    $(".addAlbum").css({
        minWidth : "90%",
        flexDirection: "row",
        maxHeight: "75px"
    });

    $(".addAlbumHead").css({
        flexDirection: "row",
        transform: "translateY(0)",
        alignItems: "center",
        marginTop: "0",
        transform: "translateX(200px)"
    });

    $(".albumInfos").css({
        marginLeft: "auto",
        flexDirection: "row"
    });

    $(".albumTop").css({
        width: "30%",
        justifyContent: "flex-start"
    })

    $(".addAlbum form").css("flex-direction", "row");
    $(".addAlbum form").css("align-items", "center");
    $(".addAlbum form button").css("margin", "0px 20px");

    $(".albumInfos p").css("margin", "0 20px")

    $(".addAlbumHead p").css("margin-left", "15px");
    $(".albumActions").css("width", "300px");
 
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
        setDisplayTuile()
    })

    $("#displayLine").change(function () {
        setDisplayLine()
    })

    $("#displayAutre").change(function () {
        console.log("I'm autre-ed");
    })

})