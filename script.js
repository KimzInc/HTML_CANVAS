let animationRunning = false;

const canvas = document.getElementById("ransome");
const ctx = canvas.getContext("2d");

 // Array of shapes to represent each shape
    let shapes = [
        { x: 50, y: 50, width: 90, height: 100, color: 'pink', letter: 'g', dx:1, dy:1},
        { x: 150, y: 50, width: 80, height: 100, color: 'green', letter: 'r', dx:-1, dy:1},
        { x: 250, y: 50, width: 100, height: 100, color: 'wheat', letter: 'a', dx:1, dy:-1 },
        { x: 50, y: 175, width: 90, height: 90, color: 'blue', letter: 'N', dx:-1, dy:1},
        { x: 150, y: 175, width: 80, height: 90, color: 'wheat', letter: 'd',dx:1, dy:-1 },
        { x: 250, y: 175, width: 80, height: 80, color: 'orange', letter: 'c', dx:-1, dy:1},
        { x: 120, y: 275, width: 60, height: 100, color: 'pink', letter: 'h', dx:1, dy:-1},
        { x: 200, y: 275, width: 60, height: 100, color: 'green', letter: 'I',dx:-1, dy:1 },
        { x: 50, y: 275, width: 60, height: 100, color: 'blue', letter: 'I',dx:1, dy:-1},
        { x: 275, y: 275, width: 50, height: 100, color: 'purple', letter: 'd',dx:-1, dy:1},      
        { x: 335, y: 275, width: 80, height: 100, color: 'blue', letter: 'a',dx:1, dy:-1}
        
    ];


    //we'll use this function to trigger animation 
    function startAnimation() {
        if (!animationRunning) {
          animationRunning = true;
          animate();
        }
    }
    

    //
    function animate() {
      //clear canvas
      ctx.clearRect(0,0,canvas.width, canvas.height);

    
    // Loop through the shapes array and draw each shape
    shapes.forEach(function(shape) {

      //begin by moving the shape
      shape.x += shape.dx;
      shape.y += shape.dy;


      if (shape.x + shape.width > canvas.width || shape.y < 0) {
        shape.dy *= -1; // here, we are reversing the direction 
      }

      if (shape.y + shape.height > canvas.height || shape.y<0) {
        shape.dy *= -1; //also reverse the direction
      }
        // Set fill color
        ctx.fillStyle = shape.color;

        // Draw the shape
        ctx.fillRect(shape.x, shape.y, shape.width, shape.height);

        // Set font, color of a letter inside the shape
        ctx.font = 'bold 80px Arial';
        //use of if statement because of different
        //colors of letters inside the shapes
        if (shape.color == 'blue' || shape.color == 'purple') {
          ctx.fillStyle = 'white';
        } else {
          ctx.fillStyle = 'black';
        }
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Draw the letter inside the shape
        ctx.fillText(shape.letter, shape.x + shape.width / 2, shape.y + shape.height / 2);
    });
    if (animationRunning) {
      requestAnimationFrame(animate);
    }
  }


  //we'll use mouse to trigger animation
  canvas.addEventListener('click',startAnimation);