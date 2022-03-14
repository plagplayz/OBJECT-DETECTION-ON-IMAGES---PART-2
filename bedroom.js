img = "";

function preload()
{
    img = loadImage('eliteone800.png');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded()
{
    console.log("Model is loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);    
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill('#FF0000');
    text("Monitor", 105, 50);
    noFill();
    stroke("#FF0000")
    rect(100, 35, 400, 250);

    fill('#FF0000');
    text("Mouse", 470, 327);
    noFill();
    stroke("#FF0000")
    rect(465, 315, 85, 65);

    fill('#FF0000');
    text("Keyboard", 135, 327);
    noFill();
    stroke("#FF0000")
    rect(130, 315, 330, 65);
}

function gotomainscreen()
{
    window.location.replace("index.html");
}