$(function() {
    var $tt = $("#b"), degree = 0, timer;
    rotate();
    function rotate() {
        
        $tt.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $tt.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        },20);
    }
    
    $("input").toggle(function() {
        clearTimeout(timer);
    }, function() {
        rotate();
    });
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
    
    $("input").toggle(function() {
        clearTimeout(timer);
    }, function() {
        rotate();
    });
}); 