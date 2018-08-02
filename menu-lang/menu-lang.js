$("#menu-lang").on("mousedown","[data-lang]",function(){
   $(this).closest("#menu-lang").find("[data-lang]").removeClass("active");
   $(this).addClass("active");
   let langCode=$(this).attr("data-lang");
   setTimeout(function(){
       $("body").trigger("CHANGE_LANG",[langCode]);
   },500);

});