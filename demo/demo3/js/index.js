
let w = document.body.offsetWidth || document.body.clientWidth,
    h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    _ = function (select) { return document.querySelector(select) },
    _$ = function (select) { return document.querySelectorAll(select)},
    clickEvent = (function() {
        if ('ontouchstart' in document.documentElement === true){
            return 'touchstart';
        }else{
            return 'click';
        }
    })(),
    active = function(node,active){
        return node.classList.add(active); 
    },
    inactive = function(node,active){ 
        return node.classList.remove(active);
    };

(()=>{
    if(_('.AppMobile')){
        let domer = _('.AppMobile');
        var dompt = getComputedStyle(domer,null).paddingTop.replace(/px/g, "");
        var domh = getComputedStyle(domer,null).height.replace(/px/g, "");
        let scrollh = Number(dompt) - ((window.innerHeight - domh) / 2);
        window.scrollTo({ 
            top: scrollh, 
            behavior: "smooth" 
        }); 
    }
})();

window.onload = function(){
    
};

window.addEventListener('scroll',function(){

});
window.addEventListener('resize',function () {
    w = document.body.offsetWidth || document.body.clientWidth;
    h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;    
});

