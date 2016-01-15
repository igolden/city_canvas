function init() {
  var stage = new createjs.Stage("liveCity");
  stage.canvas.width = 1440;
  stage.canvas.height = 600;

  // sun is a javascript declared element
  // replaced it with solar
  var solar = new createjs.Shape();
  solar.graphics.beginFill("Yellow").drawCircle(0, 0, 50);
  stage.addChild(solar);

  // Get time and set location of sun
  var hours = moment().hour();
  var minutes = moment().minutes();
  if (hours > 18) {
    var current_hours = hours - 18;
    var current_time = (current_hours*60) + minutes;
    var twelve_hours = (12*60);
    var fraction = (current_time/twelve_hours);
  } else {
    var current_hours = hours - 6;
    var current_time = (current_hours*60) + minutes;
    var twelve_hours = (12*60);
    var fraction = (current_time / twelve_hours);
  }

  solar.x = fraction * stage.canvas.width
  solar.y = fraction * (stage.canvas.height + 144)
  stage.update();

  alert(current_hours + ' hours');
  alert (minutes + ' minutes');
  alert (current_time + ' current time');
  alert(fraction + ' ratio');
  alert(solar.x);
  alert(solar.y);

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
