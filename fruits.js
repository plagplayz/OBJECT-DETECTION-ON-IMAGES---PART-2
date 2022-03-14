img = "";

function preload()
{
    img = loadImage('download.jpg');
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
    text("Pineapple", 35, 113);
    noFill();
    stroke("#FF0000")
    rect(30, 100, 450, 190);

    fill('#FF0000');
    text("Banana", 550, 93);
    noFill();
    stroke("#FF0000")
    rect(294.5, 80, 300, 205);

    fill('#FF0000');
    text("Berries", 160, 194);
    noFill();
    stroke("#FF0000")
    rect(150, 180, 280, 150);
}

function gotomainscreen()
{
    window.location.replace("index.html");
}