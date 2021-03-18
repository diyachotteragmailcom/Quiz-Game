var canva;

function setup(){
  canvas = createCanvas(850,400);

  this.button.mousePressed(()=>{
    this.title.hide();
    this.imput1.hide();
    this.button.hide();
    contestant.name = this.imput1.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);
  });
}


function draw(){
  background("pink");
  

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350,0);

    this.question.html("Question:- What starts and ends with the letter 't', but has only one letter? ");
    this.question.position(150, 80);
    this.option1.html("1: Everyone" );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);

    this.input1.position(150, 230);

    
    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
      fill("Green")
      else
      fill("red")
    }
  }
  
  
  async start(){
    if(gameState == 0){
      contestant = new Contestant():
      var contestCountRef = await database.ref('contestantCount').once("value";
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val():
        contestant.getCount();
      }
      question = new Question();
      question.display();
      
    }
  }
}
