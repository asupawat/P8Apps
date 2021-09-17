(() => {

    function getFace(){

    facename = "call";

    function drawAll() {
        g.drawImage(require("Storage").read("call.img"),25,30);
    }
        
    function onSecond() {}

    return {init:drawAll, tick:onSecond};
 }

return getFace;

})();
