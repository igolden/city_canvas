function init() {
  var stage = new createjs.Stage("liveCity");
  stage.canvas.width = 1440;
  stage.canvas.height = 600;

  // sun is a javascript declared element
  // replaced it with solar
  var solar = new createjs.Shape();

  // Get time and set location of sun
  var hours = 8
  var minutes = moment().minutes();
  if (hours > 18) {
    var current_hours = hours - 18;
    var current_time = (current_hours*60) + minutes;
    var twelve_hours = (12*60);
    var fraction = (current_time/twelve_hours);
    // Make the moon for night
    solar.graphics.beginFill("White").drawCircle(0, 0, 50);
    stage.addChild(solar);
    document.getElementById("cityHolder").style.background = "#000";

  } else {
    var current_hours = hours - 6;
    var current_time = (current_hours*60) + minutes;
    var twelve_hours = (12*60);
    var fraction = (current_time / twelve_hours);
    // Sun for day
    solar.graphics.beginFill("Yellow").drawCircle(0, 0, 50);
    stage.addChild(solar);
    document.getElementById("cityHolder").style.background = "#ddfffe";
  }

  if (fraction > .5) {
    var solar_height = fraction - .5;
    solar_y = solar_height / .5
  } else {
    var solar_height = .5 - fraction;
  }
    solar_y = solar_height / .5

  alert(solar_y);
  // Place the sun
  solar.x = fraction * stage.canvas.width
  solar.y = solar_y * stage.canvas.height + 50
  stage.update();
  alert(solar.y);

  // Cloud object
  var circle = new createjs.Shape();
  circle.graphics.beginFill("white").drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  stage.addChild(circle);



  var city = new createjs.Bitmap('skyline.png');
  city.y = 144;
  stage.addChild(city);
  stage.update();

  function clouds() {
    circle.x += 10;
    if (circle.x > stage.canvas.width) { circle.x = 0; }
    stage.update();
  }


  createjs.Ticker.addEventListener("tick", clouds);
}
