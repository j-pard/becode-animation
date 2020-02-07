$(function() {
    var $tt = $("#b"), degree = 85, timer;
    rotate();
    function rotate() {
        
        $tt.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $tt.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },20);
    }
    var endTimer = setTimeout(function(){ 
        clearTimeout(timer);
    }, 5800);
}); 

$(function() {
    var $tt = $("#a"), degree = 0, timer;
    rotate();
    function rotate() {
        
        $tt.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $tt.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            --degree; rotate();
        },15);
    }
    var endTimer = setTimeout(function(){ 
        clearTimeout(timer);
    }, 5800);
    
}); 