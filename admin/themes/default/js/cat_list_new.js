function setDisplayTile() {

    removeIconDesc();

    $(".albumActions").css("display", "flex");
    removeHoverEffect($(".categoryBox"));
    removeHoverEffect($(".categoryBox").children(".albumActions").children("a"));
    $(".categoryBox").children(".albumActions").children("a").hover(function () {
        $(this).css({
            color : "#FFA646"
        })
    }, function () {
        $(this).css({
            color : "#848484"
        })
    })

    $(".categoryBox").css({
        minWidth: "230px",
        maxWidth: "350px",
        flexDirection: "column",
        maxHeight: "200px",
        alignItems: "unset",
        margin: "15px"
    });

    $(".albumInfos").css({
        marginLeft: "0",
        flexDirection: "column"
    });

    $(".albumIcon").css({
        height: "80px"
    });

    $(".albumIcon span").css({
        fontSize: "19px",
        width: "27px",
        padding: "10px"
    });

    $(".albumInfos p").css("margin", "0");
    $(".albumInfos p:last-child").css({
        width: "auto"
    });

    $(".albumTop").css({
        width: "auto",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "baseline",
        height: "75px"
    });

    $(".albumTitle").css("padding", "0 15px");

    $(".addAlbum").css({
        minWidth : "230px",
        maxWidth: "350px",
        flexDirection: "column",
        maxHeight: "200px",
        margin: "15px"
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

    $(".addAlbumHead span").css({
        fontSize:"19px",
        width: "27px",
        height: "27px",
        padding: "10px"
    })

    $(".albumActions").css({
        flexDirection : "row",
        marginTop: "auto",
        width: "100%"
    })

    $(".albumActions a:first-child").css("margin-left", "35px");
    $(".albumActions a:last-child").css("margin-right", "35px");
}

function setDisplayLine() {

    /*********** Hover stuff ***********/

    removeIconDesc();
    $(".albumActions").css("display", "flex");
    removeHoverEffect($(".categoryBox"));

    $(".categoryBox").hover(function () {
        $(this).css("background", "#ffd7ad");
        $(this).children(".albumInfos").css({
            color: "#515151"
        });
        $(this).children(".albumActions").children("a").css({
            color: "#515151",
        });

        $(this).children(".albumTop").children(".albumIcon").children("span").addClass("albumIconLineHover");

    }, function () {
        $(this).css("background", "#fafafa");
        $(this).children(".albumInfos").css({
            color: "#a9a9a9"
        });
        $(this).children(".albumActions").children("a").css({
            color: "#848484"
        });        
        
        $(this).children(".albumTop").children(".albumIcon").children("span").removeClass("albumIconLineHover");
    })

    $(".categoryBox").children(".albumActions").children("a").hover(function () {
        $(this).css({
            color : "#f98100",
            transform: "scale(1.5)"
        });
    }, function () {
        $(this).css({
            color : "#515151",
            transform: "scale(1)"
        });
    });

    /************************************/

    $(".categoryBox").css({
        minWidth: "90%",
        maxWidth: "100%",
        flexDirection: "row",
        maxHeight: "60px",
        alignItems: "unset",
        margin: "5px 15px"
    });

    $(".albumIcon").css({
        height: "60px"
    });

    $(".albumIcon span").css({
        fontSize: "14px",
        width: "20px",
        padding: "8px"
    });
    
    $(".addAlbumHead span").css({
        fontSize:"14px",
        width: "20px",
        height: "20px",
        padding: "8px"
    })

    $(".albumInfos").css({
        marginLeft: "auto",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "auto"
    });

    $(".albumInfos p").css({
        textAlign: "right",
        margin: "0"
    });

    $(".albumInfos p:last-child").css({
        width: "270px"
    });

    $(".albumTop").css({
        width: "25%",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems : "baseline",
        height: "75px"
    });

    $(".albumTitle").css("padding", "0 15px");

    $(".addAlbum").css({
        minWidth: "90%",
        maxWidth: "100%",
        flexDirection: "row",
        maxHeight: "60px",
        margin: "15px 15px 5px 15px"
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

    $(".albumActions").css({
        flexDirection : "row",
        marginTop: "auto",
        width: "300px"
    })

    $(".albumActions a:first-child").css("margin-left", "35px");
    $(".albumActions a:last-child").css("margin-right", "35px");

}

function setDisplayDefault() {

    ShowIconDesc();

    $(".albumActions").css("display", "flex");
    removeHoverEffect($(".categoryBox"));
    removeHoverEffect($(".categoryBox").children(".albumActions").children("a"));
    $(".categoryBox").children(".albumActions").children("a").hover(function () {
        $(this).css({
            color : "#FFA646"
        })
    }, function () {
        $(this).css({
            color : "#848484"
        })
    });

    AddHoverOnAlbumActions();

    $(".categoryBox").css({
        minWidth: "220px",
        maxWidth: "280px",
        flexDirection: "column",
        maxHeight: "300px",
        alignItems: "center",
        margin: "15px"
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

    $(".albumInfos p:last-child").css({
        width: "auto"
    });

    $(".albumIcon").css({
        height: "80px"
    });

    $(".albumIcon span").css({
        fontSize: "19px",
        width: "27px",
        padding: "10px"
    });

    $(".albumTop").css({
        width: "85%",
        flexDirection: "column",
        alignItems: "unset",
        height: "110px",
    });

    $(".albumTitle").css("padding", "0");

    $(".addAlbum").css({
        minWidth: "220px",
        maxWidth: "280px",
        flexDirection: "column",
        maxHeight: "300px",
        margin: "15px"
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

    $(".addAlbumHead span").css({
        fontSize:"19px",
        width: "27px",
        height: "27px",
        padding: "10px"
    })

    $(".albumInfos p").css("margin", "0")

    $(".albumActions a:first-child").css("margin-left", "5px")
    $(".albumActions a:last-child").css("margin-left", "5px")
}


function ShowIconDesc() {
    $(".albumActions span.iconLegend").show();
}

function removeIconDesc() {
    $(".albumActions span.iconLegend").hide();
}

function removeHoverEffect(e) {
    e.unbind('mouseenter').unbind('mouseleave');
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

    if ($("#displayTile").is(":checked")) {
        setDisplayTile();
    };

    if ($("#displayLine").is(":checked")) {
        setDisplayLine();
    };

    if ($("#displayDefault").is(":checked")) {
        setDisplayDefault();
    };

    $("#displayTile").change(function () {
        setDisplayTile();
    })

    $("#displayLine").change(function () {
        setDisplayLine();
    })

    $("#displayDefault").change(function () {
        setDisplayDefault();
    })

})