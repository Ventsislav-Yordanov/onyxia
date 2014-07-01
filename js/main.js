var Index = function() {

    function menubarHover() {
        navigationUl = document.getElementsByClassName("navbar-nav");
        var naligationLi = navigationUl[0].childNodes;
        for (var i = 0; i < naligationLi.length; i += 1) {
            naligationLi[i].addEventListener('mouseover', onMouseover);
            naligationLi[i].addEventListener('mouseout', onMouseout);
        }
        function onMouseover(ev) {
            this.style.background = '#c7c7c7';
        }

        function onMouseout(ev) {
            this.style.background = '';
        }
    }
    ;
    menubarHover();

    function buttonTeamSelect() {
        var divs = document.getElementsByClassName("thumb");
        var submenu = document.getElementsByClassName("submenu");
        for (var i = 0; i < divs.length; i += 1) {
            divs[i].addEventListener('click', onClick);
        }

        function onClick(ev) {
            var previousIndex;
            for (var i = 0; i < submenu.length; i += 1) {
                if (submenu[i].style.display === 'block') {
                    previousIndex = i;
                }
                submenu[i].style.display = 'none';
            }

            var index = this.getAttribute("tabIndex");
            if (previousIndex != index) {
                submenu[index].style.display = 'block';
            }
            else {
                submenu[index].style.display = 'none';
            }
        }
    }
    ;
    buttonTeamSelect();

    return {
        //Revolution Slider
        initRevolutionSlider: function() {
            var api;

            //setTimeout("", 1000);
            //jQuery('#revolutionul').show();

            api = jQuery('.fullwidthabnner').revolution(
                    {
                        delay: 2000,
                        startheight: 380,
                        startwidth: 1150,
                        hideThumbs: 10,
                        thumbWidth: 100, // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                        thumbHeight: 50,
                        thumbAmount: 5,
                        navigationType: "bullet", // bullet, thumb, none
                        navigationArrows: "solo", // nexttobullets, solo (old name verticalcentered), none

                        navigationStyle: "round", // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


                        navigationHAlign: "center", // Vertical Align top,center,bottom
                        navigationVAlign: "bottom", // Horizontal Align left,center,right
                        navigationHOffset: 0,
                        navigationVOffset: 20,
                        soloArrowLeftHalign: "left",
                        soloArrowLeftValign: "center",
                        soloArrowLeftHOffset: 20,
                        soloArrowLeftVOffset: 0,
                        soloArrowRightHalign: "right",
                        soloArrowRightValign: "center",
                        soloArrowRightHOffset: 20,
                        soloArrowRightVOffset: 0,
                        touchenabled: "on", // Enable Swipe Function : on/off
                        onHoverStop: "on", // Stop Banner Timet at Hover on Slide on/off

                        stopAtSlide: -1,
                        stopAfterLoops: -1,
                        hideCaptionAtLimit: 0, // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
                        hideAllCaptionAtLilmit: 0, // Hide all The Captions if Width of Browser is less then this value
                        hideSliderAtLimit: 0, // Hide the whole slider, and stop also functions if Width of Browser is less than this value

                        shadow: 1, //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
                        fullWidth: "on"                          // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
                    });
        }

    };
}();


function initialize() {
    var map_canvas = document.getElementById('map_canvas');
    var map_options = {
        center: new google.maps.LatLng(42.709714, 23.356242),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map_canvas, map_options);
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(42.709714, 23.356242),
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);









