document.getElementById("tocke").style.display = "none";
	document.getElementById("cas").style.display = "none";
	document.getElementById("lives").style.display = "none";
	document.getElementById("canvas").style.display = "none";
	document.getElementById("restart").style.display = "none";
	document.getElementById("button4").style.display = "none";
	document.getElementById("restart2").style.display = "none";
	document.getElementById("livest").style.display = "none";
	document.getElementById("livesl").style.display = "none";
	function restart(){
		location.reload()
	}
	
	function drawIt() {
	
	
	document.getElementById("tocke").style.background = "#000";
	document.getElementById("tocke").style.background.opacity = "0.1";
	document.getElementById("cas").style.background = "#000";
	document.getElementById("cas").style.background.opacity = "0.1";
		    document.addEventListener('keydown', onKeyDown);
	document.addEventListener('keyup', onKeyUp);
	
	
	var count=0;
    var x = 550;
    var y = 300;
    var dx = 1;
    var dy = 2;
    var width = 1500;
    var height = 500;
	var tocke = 0;
	var sek;
	var sekI;
	var min;
	var Timer;
	var izpisTimer;
	var start=true;
	var intt;
	var lives=3;
	var run=true;
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
	var paddlex = 600;
	var paddleh = 6;
	var paddlew = 120;
	var rightDown = false;
	var leftDown = false;
	var minX = canvas.offsetLeft;
	var rows = 4;
	var coll = 6;
    var bwidth = (width/coll) - 1;
    var bheight = 10;
    var padding = 2;
	
	var count0=0;
    var bricks = new Array(rows);
	var image = new Image(10,10);
	image.src = "slike/smash.png"
  for (i=0; i < rows; i++) {
    bricks[i] = new Array(coll);
    for (j=0; j < coll; j++) {
      bricks[i][j] = 1;
    }
  }
	
	
	
	
    document.getElementById("button").onclick = function init() {
					document.getElementById("canvas").style.display = "block";
					document.getElementById("poz").style.display = "none";
                    document.getElementById("button").style.display = "none";
                    document.getElementById("livesl").style.display = "block";
					document.getElementById("livest").style.display = "block";

                    document.getElementById("tocke").innerHTML = tocke;
                    sek = 0;
                    izpisTimer = "00:00";
					
					document.getElementById("cas").style.display = "block";
					document.getElementById("lives").style.display = "block";
                    function timer() {
					if(start==true){
                        sek++;

                        sekI = ((sekI = (sek % 60)) > 9) ? sekI : "0" + sekI;
                        min = ((min = Math.floor(sek / 60)) > 9) ? min : "0" + min;
                        izpisTimer = min + ":" + sekI;

                        document.getElementById("cas").innerHTML = izpisTimer;
						}
						else{
						if(lives>0){
							var img = document.getElementById("srcek1");
							lives--; 
							start=true; 

							switch (lives) {
								case 1:
									document.getElementById("srcek2").style.display = "none";
									break;
								case 2:
									document.getElementById("srcek3").style.display = "none";
									break;
								default: 
									
									break;
							}
						}							
						if(lives<1){clearInterval(intt);
							document.getElementById("canvas").style.display = "none";
							document.getElementById("restart").style.display = "block";
							document.getElementById("tocke2").innerHTML = tocke;
							document.getElementById("cas2").innerHTML = izpisTimer;
							document.getElementById("tocke2").style.background = "#000";
							document.getElementById("tocke2").style.background.opacity = "0.1";
							document.getElementById("cas2").style.background = "#000";
							document.getElementById("cas2").style.background.opacity = "0.1";
							document.getElementById("button4").style.display = "block";
							document.getElementById("srcek1").style.display = "none";
							document.getElementById("lives").style.display = "none";
					document.getElementById("livesl").style.display = "none";
					document.getElementById("livest").style.display = "none";
							clearInterval(Timer);
							start=false;
							
							
							document.getElementById("cas").style.display = "none";
							document.getElementById("lives").style.display = "none";
							document.getElementById("tocke").style.display = "none";
							
					sek=0;
					
					document.getElementById("cas").innerHTML = izpisTimer;}
					}
                    }
                    Timer = setInterval(timer, 1000);
					
						intt=setInterval(draw, 5);
						return intt;
						
						
                }

		

	
	
		
		
        
		
 
	
	function onKeyDown(evt) {
		
		  if (evt.keyCode == 39)rightDown = true;
		  else if (evt.keyCode == 37) leftDown = true;
		
	}

	function onKeyUp(evt) {
		  if (evt.keyCode == 39) rightDown = false;
		  else if (evt.keyCode == 37) leftDown = false;
		}

		
    function draw() {
		document.getElementById("tocke").style.display = "block";
        ctx.clearRect( 0, 0, 1500, 500);
        ctx.beginPath();
        ctx.drawImage(image, x, y);
		ctx.fillStyle = "#FFF";
		ctx.fill();
		
        ctx.closePath();
		
		
		
		
		if (rightDown&&paddlex<width-paddlew) 
			paddlex += 5;
		else if (leftDown&&paddlex>1) 
				paddlex -= 5;
		ctx.beginPath();
		ctx.rect(paddlex, height-paddleh-20, paddlew, paddleh);
		ctx.closePath();
		ctx.fillStyle = "#800080";
        ctx.fill();
        if (x + dx > width-5|| x + dx < 6)
            dx = -1; 
        if (x + dx < 6)
            dx = 1; 
        if (y + dy > height-10){
			dy = -2; start=false;
			if(lives<1){
				
				clearInterval(Timer);}
			console.log(y);
			
			
		}
        if (y + dy < 5)
            dy = 2;
		if(x+dx>paddlex-10&&x+dx<paddlex+paddlew&&y+dy>height-paddleh-37) {
			dx = 4 * ((x-(paddlex+paddlew/2))/paddlew);
			dy = -dy;
			}
		
		
        x += dx;
        y += dy;
		
					
					count0=0;
		for (i=0; i < rows; i++) {
			for (j=0; j < coll; j++) {
				if (bricks[i][j] == 1) {
					ctx.beginPath();
					ctx.rect((j * (bwidth + padding)) + padding-2,
							(i * (bheight + padding)) + padding,
							bwidth, bheight);
					ctx.fillStyle = "#4682B4";
					ctx.fill();
					ctx.closePath();

				}
				if(bricks[i][j]==0){
					count0++;
					
				}
				
				var rowheight = bheight + padding ; 
				var colwidth = bwidth + padding ;
				var row = Math.floor(y/rowheight);
				var col = Math.floor(x/colwidth);
				
				if (y < rows * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
					dy = -dy; bricks[row][col] = 0;
					tocke += 10; 
					document.getElementById("tocke").innerHTML = tocke;	
					
				}
			
				
			
			}
		}
		
		if(count0==(rows*coll)){
			clearInterval(Timer);
			clearInterval(draw);
			
			document.getElementById("cas3").innerHTML = izpisTimer;
			document.getElementById("cas").style.display = "block";
			document.getElementById("tocke2").style.display = "block";
			document.getElementById("tocke3").innerHTML = tocke;
			document.getElementById("tocke3").style.background = "black";
			document.getElementById("tocke3").style.background.opacity = "0.1";
			document.getElementById("restart2").style.display = "block";
			document.getElementById("canvas").style.display = "none";
		document.getElementById("tocke").style.display = "none";
		document.getElementById("livest").style.display = "none";
		document.getElementById("lives").style.display = "none";
			
							
							
							
							document.getElementById("button4").style.display = "block";
							document.getElementById("srcek1").style.display = "none";
							
							start=false;
							
							
							
							document.getElementById("livesl").style.display = "none";
							
		}

		
		
		
		
		
		
			
			


    }

   
}