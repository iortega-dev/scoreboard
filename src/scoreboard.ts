export type Score = {
	localScore: number
	awayScore: number
}

export type Team = {
	name: string
	score: number
}

export class Match {
	matchId: number
	localTeam: Team
	awayTeam: Team
	startTime: number
	totalScore: number;

	constructor ( matchId: number, localTeamName: string, awayTeamName: string, startTime: number ) {
		this.matchId = matchId
		this.localTeam = { name: localTeamName, score: 0 }
		this.awayTeam ={ name: awayTeamName, score: 0 }
		this.startTime = startTime
		this.totalScore = 0;
	}

	get score(): Score {
		return {localScore: this.localTeam.score, awayScore: this.awayTeam.score}
	}

	setScore = (score: Score) => {
		this.localTeam.score = score.localScore
		this.awayTeam.score = score.awayScore
		this.totalScore = score.awayScore + score.localScore
	}
}

export default class ScoreBoard {
  private _matches: Match[] = []

  get matches(): Match[] {
    return this._matches;
}

  getMatch = (matchId: number) => {
    return this.matches.find((match) => match.matchId === matchId)
  }

  //1. Start a game. When a game starts, it should capture (being initial score 0 – 0):
  startGame() {}

  //2. Finish game. It will remove a match from the scoreboard.
  finishGame(matchId: number) {}
  
  //3. Update score. Receiving the pair score; home team score and away team score updates a game score.
  updateScore(matchId: number) {}
  
  //4. Get a summary of games by total score. Those games with the same total score will be returned ordered by the most recently added to our system.
	getSummary = () => {}

}