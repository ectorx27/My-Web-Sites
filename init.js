function init() {
        var stage = new createjs.Stage("demoCanvas");
        
        var background = new createjs.Shape();
        var newGame = new createjs.Shape();
	    var LoadGame = new createjs.Shape();  
		var Logo = new createjs.Shape();  
		var Settings = new createjs.Shape();  
		var HighScore = new createjs.Shape();   
		var txt = new createjs.Text("New Game", "30px Arial", "#FFF");
		var txt1= new createjs.Text("Load Game","30px Arial","White");
		var txt2= new createjs.Text("Settings","20px Arial","White");
		var txt3 = new createjs.Text("High Score","20px Arial","White");
		txt.textAlign='center';
		txt.textBaseline='middle';
		txt.x=500;
		txt.y=350;
		txt1.textAlign='center';
		txt1.textBaseline='middle';

		txt1.x=500;
		txt1.y=500;
				
		txt2.textAlign='center';
		txt2.textBaseline='middle';
		
		txt2.x=350;
		txt2.y=925;
		
		txt3.textAlign='center';
		txt3.textBaseline='middle';
		
		txt3.x= 650;
		txt3.y= 925;




	
		background.graphics.beginFill("DeepSkyBlue").drawRect(0,0,1000,1000);
		background
        newGame.graphics.beginFill("ForestGreen").drawRect(350,300,300,75);
        LoadGame.graphics.beginFill("ForestGreen").drawRect(350,450,300,75);
		Settings.graphics.beginFill("ForestGreen").drawRect(300,900,100,50);
		
		HighScore.graphics.beginFill("ForestGreen").drawRect(600,900,100,50);
		 
		 
         stage.addChild(background); 
         
         stage.addChild(newGame);
         stage.addChild(txt);
         stage.addChild(LoadGame);
         stage.addChild(txt1);
         
         stage.addChild(Settings);
         stage.addChild(txt2);
         stage.addChild(HighScore);
         stage.addChild(txt3);
                
             
         stage.update();
       
         
	         
      }

