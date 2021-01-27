export default class ScoreBoard {

  //1. Start a game. When a game starts, it should capture (being initial score 0 – 0):
  startGame() {}

  //2. Finish game. It will remove a match from the scoreboard.
  finishGame(matchId: number) {}
  
  //3. Update score. Receiving the pair score; home team score and away team score updates a game score.
  updateScore(matchId: number) {}
  
  //4. Get a summary of games by total score. Those games with the same total score will be returned ordered by the most recently added to our system.
	getSummary = () => {}

}