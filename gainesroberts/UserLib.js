$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Div');
        comp_comp1.code = '<section id="home" class="bg-parallax fullscreen parallax-light" data-jarallax-video="https://www.youtube.com/watch?v=K6vwCKAjcgs" data-jarallax-orignal-styles="null">\
    <div class="content-table">\
        <div class="content-middle pt80 ">\
            <div class="container">\
                <div class="row">\
                    <div class="col-md-8 offset-md-2 text-center">\
                        <h2 class="font300 display-4 text-capitalize " cms-site-name>Creative digital agency for smart solutions</h2>\
                        <p class="lead" cms-site-desc>\
                                    Most customizable template on the market </p>\
                        <div class="circle-button">\
                            <a href="#about" data-scroll class="btn btn-outline-primary" wp-href="wpurl">Learn More</a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <!--hero inner-->\
    </div>\
    <!--parallax hero-->\
    <div class="mouse-down">\
        <a data-scroll href="#about" wp-href="url"><i class="fa fa-angle-down fa-3x"></i></a>\
    </div>\
</section>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});