const canvas = Crafty.init(1000,700, document.getElementById('game'));



var bg = Crafty.background('#006400')

var box_left = Crafty.e('2D, Canvas, Color')
.attr({x: -60, y: -60, w: 10, h: 100})
.color('#006400');

var box_right = Crafty.e('2D, Canvas, Color')
.attr({x: 600, y: -60, w: 10, h: 100})
.color('#006400');

var box_top = Crafty.e('2D, Canvas, Color')
.attr({x: 230, y: -60, w: 100, h: 10})
.color('#006400');

var food1 = Crafty.e('2D, Canvas, Color, Collision, Food')
.attr({x: -300, y: 100, w: 30, h: 30})
.color('red');

var player = Crafty.e('2D, Canvas, Color, Fourway, Collision')
.attr({x: 255, y: 0, w: 50, h: 50})
.color('green')
.fourway(200, 200)
.checkHits('Food') // check for collisions with entities that have the Food component in each frame
.bind("HitOn", function(hitData) {
    console.log('Added 1 score!')
    food1.color('#006400');
})
.bind("HitOff", function(comp) {
    
});

Crafty.viewport.clampToEntities = true;
Crafty.viewport.scale(1);
Crafty.one("CameraAnimationDone", function() {
    Crafty.viewport.follow(player, 0, 0);
});
Crafty.viewport.centerOn(player, 1);
