(() => {

    function getFace(){

    function drawAll() {
        g.drawImage(require("Storage").read("call1.img"),25,30);
    }
        
    function onSecond() {}

    return {init:drawAll, tick:onSecond};
 }

return getFace;

})();
