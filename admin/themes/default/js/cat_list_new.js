function setDisplayTuile() {

    removeIconDesc();
    removeHoverOnAlbumActions();

    $(".categoryBox").css({
        minWidth: "22%",
        flexDirection: "column",
        maxHeight: "200px",
        alignItems: "unset"
    });

    $(".albumInfos").css({
        marginLeft: "0",
        flexDirection: "column"
    });

    $(".albumInfos p").css("margin", "0");

    $(".albumTop").css({
        width: "auto",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "baseline",
        height: "75px"
    });

    $(".albumTitle").css("padding", "0 15px");

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

    $(".addAlbum form").css("flex-direction", "column");
    $(".addAlbum form input").css("margin", "0px 10px 0px 10px");
    $(".addAlbum form button").css("margin", "10px auto 0 auto");

    $(".addAlbumHead p").css("margin-left", "0");

    $(".albumActions").css({
        flexDirection : "row",
        marginTop: "auto",
        width: "100%"
    })

    $(".albumActions a:first-child").css("margin-left", "35px");
    $(".albumActions a:last-child").css("margin-right", "35px");
}

function setDisplayLine() {

    removeIconDesc();
    removeHoverOnAlbumActions();

    $(".categoryBox").css({
        minWidth: "90%",
        flexDirection: "row",
        maxHeight: "75px",
        alignItems: "unset"
    });

    $(".albumInfos").css({
        marginLeft: "auto",
        flexDirection: "row"
    });

    $(".albumTop").css({
        width: "30%",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems : "baseline",
        height: "75px"
    });

    $(".albumTitle").css("padding", "0 15px");

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

    $(".addAlbum form").css("flex-direction", "row");
    $(".addAlbum form").css("align-items", "center");
    $(".addAlbum form button").css("margin", "0px 20px");

    $(".addAlbumHead p").css("margin-left", "15px");

    $(".albumInfos p").css("margin", "0 20px")

    $(".albumActions").css({
        flexDirection : "row",
        marginTop: "auto",
        width: "300px"
    })

    $(".albumActions a:first-child").css("margin-left", "35px");
    $(".albumActions a:last-child").css("margin-right", "35px");
 
}

function setDisplayDefault() {

    gotIconDesc();

    AddHoverOnAlbumActions();

    $(".categoryBox").css({
        minWidth: "220px",
        flexDirection: "column",
        maxHeight: "300px",
        alignItems: "center"
    });

    $(".albumActions").css({
        flexDirection : "column",
        marginTop: "0",
        alignItems: "flex-start",
        width: "100%"
    });

    $(".albumInfos").css({
        marginLeft: "0",
        flexDirection: "column",
    });

    $(".albumTop").css({
        width: "85%",
        flexDirection: "column",
        alignItems: "unset",
        height: "110px",
    });

    $(".albumTitle").css("padding", "0");

    $(".addAlbum").css({
        minWidth : "220px",
        flexDirection: "column",
        maxHeight: "300px"
    });

     $(".addAlbumHead").css({
        flexDirection: "column",
        transform: "translateY(75px)",
        alignItems: "center",
        marginTop: "-10px",
        transition: "0.4s ease"
    });

    $(".addAlbum form").css("flex-direction", "column");
    $(".addAlbum form input").css("margin", "0px 10px 0px 10px");
    $(".addAlbum form button").css("margin", "10px auto 0 auto");

    $(".addAlbumHead p").css("margin-left", "0");

    $(".albumInfos p").css("margin", "0")

    $(".albumActions a:first-child").css("margin-left", "5px")
    $(".albumActions a:last-child").css("margin-left", "5px")
}


function gotIconDesc() {
    $(".albumActions span.iconLegend").show();
}

function removeIconDesc() {
    $(".albumActions span.iconLegend").hide();
}

function removeHoverOnAlbumActions() {
    $(".albumActions").css("display", "flex");
    $(".categoryBox").hover(function () {
        $(this).children(".albumActions").css("display", "flex");
    }, function () {
        $(this).children(".albumActions").css("display", "flex");
    })
}

function AddHoverOnAlbumActions() {
    $(".albumActions").css("display", "none");
    $(".categoryBox").hover(function () {
        $(this).children(".albumActions").css("display", "flex");
    }, function () {
        $(this).children(".albumActions").css("display", "none");
    })
}


$(document).ready(function () {
    console.log("hello world");

    $(".addAlbum").on("click", function (e) {
        if (e.target.className !== "cancelAddAlbum") {
            $(".addAlbum").addClass('input-mode');
            $(".addAlbum p").hide(300);
        };
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
        setDisplayTuile();
    })

    $("#displayLine").change(function () {
        setDisplayLine();
    })

    $("#displayDefault").change(function () {
        console.log("I'm in default mode");
        setDisplayDefault();
    })

})