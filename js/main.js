$("document").ready(function () {
    console.log("js working...");
    var fieldWidth=$(window).width()-40;
    var fieldHeight=$(window).height()-40;
    console.log("field Width:", fieldWidth);
    console.log("field Height:", fieldHeight);
    $("#ball").click(
        function clickhandler(event) {
        console.log("x of ball center", $("#ballcenter").offset().left);
        console.log("y of ball center", $("#ballcenter").offset().top);
        console.log("x of click",event.pageX);
        console.log("y of click",event.pageY);
        var dX= $("#ballcenter").offset().left-event.pageX;
        var dY= $("#ballcenter").offset().top-event.pageY;
        var tg= (dY/dX);
        console.log("dX is : ", dX);
        console.log("dY is : ", dY);
        console.log("tg is : ", tg);
        var X1=event.pageX;
        var X2=$("#ballcenter").offset().left;
        var Y1=event.pageY;
        var Y2=$("#ballcenter").offset().top;
        if(dX<0 && dY>0 && tg<0 ) {
            console.log("first case");
            $("#ball").animate({left: 0,top: fieldHeight }, 1000, function () {
                //animation continue...
                $("#ball").animate({left: 0,top: fieldHeight-50 }, 250, function () {
                        //animation continue...
                    $("#ball").animate({left: 0,top: fieldHeight }, 200, function () {
                            //animation continue...
                        $("#ball").animate({left: 0,top: fieldHeight-25 }, 150, function () {
                                //animation continue...
                            $("#ball").animate({left: 0,top: fieldHeight }, 100, function () {
                                    //animation continue...
                                }
                            );
                            }
                        );
                        }
                    );
                    }
                );
                }
            );
        }
            else if( dX>0 && dY>0 && tg>0 ){
            console.log("second case");
            $("#ball").animate({left: fieldWidth,top: fieldHeight }, 1000, function () {
                //animation continue...
                $("#ball").animate({left: fieldWidth,top: fieldHeight-50 }, 250, function () {
                        //animation continue...
                    $("#ball").animate({left: fieldWidth,top: fieldHeight }, 200, function () {
                            //animation continue...
                        $("#ball").animate({left: fieldWidth,top: fieldHeight-25 }, 150, function () {
                                //animation continue...
                            $("#ball").animate({left: fieldWidth,top: fieldHeight }, 100, function () {
                                    //animation continue...
                                }
                            );
                            }
                        );
                        }
                    );
                    }
                );
                }
            );
        }
        else if( dX>0 && dY<0 && tg<0 ){
            console.log("third case");

            $("#ball").animate({left: fieldWidth, top: 0 }, 1000, function () {
                //animation continue...
                $("#ball").animate({left: fieldWidth, top: fieldHeight }, 250, function () {
                        //animation continue...
                    $("#ball").animate({left: fieldWidth, top: fieldHeight-50 }, 200, function () {
                            //animation continue...
                        $("#ball").animate({left: fieldWidth, top: fieldHeight }, 150, function () {
                                //animation continue...
                            $("#ball").animate({left: fieldWidth, top: fieldHeight-25 }, 100, function () {
                                    //animation continue...
                                $("#ball").animate({left: fieldWidth, top: fieldHeight }, 50, function () {
                                        //animation continue...
                                    }
                                );
                                }
                            );
                            }
                        );
                        }
                    );
                    }
                );
                }
            );
        }
        else if( dX<0 && dY<0 && tg>0 ){
            console.log("fourth case");
            $("#ball").animate({left: 0,top: 0 }, 1000, function () {
                //animation continue...
                $("#ball").animate({left: 0, top: fieldHeight}, 250, function () {
                        //animation continue...
                    $("#ball").animate({left: 0, top: fieldHeight-50}, 200, function () {
                            //animation continue...
                        $("#ball").animate({left: 0, top: fieldHeight}, 150, function () {
                                //animation continue...
                            $("#ball").animate({left: 0, top: fieldHeight-25}, 100, function () {
                                    //animation continue...
                                $("#ball").animate({left: 0, top: fieldHeight}, 50, function () {
                                        //animation continue...
                                    }
                                );
                                }
                            );
                            }
                        );
                        }
                    );
                    }
                );
                }
            );
        }

    }


    );








});
