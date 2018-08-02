window.$=document.$ = window.jQuery = require("jquery");
require("./aeropostale-assets.less");
require("./menu-lang/menu-lang");

$("body").on("CHANGE_LANG",function(event,langCode){
    console.log("Changement de langue...",langCode);
    //gérer ici ce qui se passe quand on change de langue
});
