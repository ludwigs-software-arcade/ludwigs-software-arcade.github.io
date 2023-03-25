

let Engine = Matter.Engine,
 Render = Matter.Render,
 Runner = Matter.Runner,
 Bodies = Matter.Bodies,
 Composite = Matter.Composite,
 Composites = Matter.Composites,
 Constraint = Matter.Constraint,
 Mouse = Matter.Mouse,
 MouseConstraint = Matter.MouseConstraint,
 Events = Matter.Events;

let engine = Engine.create();

    // create an engine
   
    // create a renderer

let cheight=1000
let cwidth=5000;
let render = Render.create({
    element: document.getElementById("areaToRender"),
    engine: engine,
    options: {
    width:cwidth,
    height:cheight,
    pixelRatio: 1,
    background:'#61fcef',
    wireframes: false // <-- important
    }
    });
   
    // run the renderer
    Render.run(render);
   
    // create runner
    let runner = Runner.create();
   
    // run the engine
    Runner.run(runner, engine);
    // add mouse control
 let mouse = Mouse.create(render.canvas),
 mouseConstraint = MouseConstraint.create(engine, {
 mouse: mouse,
 constraint: {
 stiffness: 0.2,
 render: {
 visible: false
 }
 }
 });
 Composite.add(engine.world, mouseConstraint);

 // keep the mouse in sync with rendering
 render.mouse = mouse;


 
//end of setup
let ground = Bodies.rectangle(cwidth/2, cheight, cwidth, 100, { isStatic: true, render:{fillStyle:'rgb(200,255,100)'} });
Composite.add(engine.world, [ground]);
//menu add
let optionsadd ={
restitution:0,
mass:this.mass,
friction:1,
render:{
    fillStyle: 'red',
    strokeStyle: 'blue',
    lineWidth: 3,
    visible: true
}
};

engine.world.gravity.y=1;
engine.world.gravity.x=0;
engine.world.density=1;
//menu add end

let width_option = document.querySelector(".width");
let height_option = document.querySelector(".height");
let friction_option = document.querySelector(".friction");
let color_option = document.querySelector(".color-option");

let create_button = document.querySelector(".create-object");
create_button.addEventListener('click',function(){
    optionsadd.friction=1;
    if (friction_option.value.length>0){
    if (!isNaN(friction_option.value)){
        if (Number(friction_option.value)>=0 && Number(friction_option.value)<=1){
            optionsadd.friction=Number(friction_option.value);
        }
    }
    }
    if (color_option.value.length>0){
        optionsadd.render.fillStyle=color_option.value;
    }
    Composite.add(engine.world, Bodies.rectangle(200, 200, Number(width_option.value),Number(height_option.value),optionsadd));
    Engine.update(engine);
});

let gravity_y = document.querySelector(".gravity-y");
let world_edit_button = document.querySelector(".world-edit");
world_edit_button.addEventListener('click',function(){
    engine.world.gravity.y=1;
    if (!isNaN(gravity_y.value)){
        engine.world.gravity.y=Number(gravity_y.value);
    };
});
document.addEventListener('keydown', function(event) {
    if (event.key == 'Delete') {
      console.log(MouseConstraint.body);
    }
});