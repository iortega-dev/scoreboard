import Scoreboard from '../src/scoreboard';

describe('Scoreboard', () => {
  describe('basic functionality', () => {
    let instance: Scoreboard;

    beforeEach(() => {
      instance = new Scoreboard();
    });

    it('should instance new Scoreboard with no matches', () => {
      expect(instance).toBeInstanceOf(Scoreboard);
      const matches = instance.matches;
      expect(matches).toBeDefined();
      expect(matches[0]).toBeUndefined();
    });

    it('should start 5 matches', () => {
      instance.startGame('Mexico', 'Canada');
      instance.startGame('Spain', 'Brazil');
      instance.startGame('Germany', 'France');
      instance.startGame('Uruguay', 'Italy');
      instance.startGame('Argentina', 'Australia');
      const matches = instance.matches;
      expect(matches).toBeDefined();
      expect(matches.length).toBe(5);
    });

    it('should find a match by Id', () => {
      instance.startGame('Mexico', 'Canada');
      const matchOne = instance.getMatch(1);
      expect(matchOne).toBeDefined();
      expect(matchOne!.totalScore).toBe(0);
    });

    it('should finish a match with given Id', () => {
      instance.startGame('Mexico', 'Canada');
      let matchOne = instance.getMatch(1);
      expect(matchOne).toBeDefined();
      instance.finishGame(1);
      matchOne = instance.getMatch(1);
      expect(matchOne).toBeUndefined();
    });

    it('should update first match score', () => {
      instance.startGame('Mexico', 'Canada');
      let matchOne = instance.getMatch(1);
      expect(matchOne.score).toStrictEqual({ localScore: 0, awayScore: 0 });
      instance.updateScore(1, { localScore: 0, awayScore: 5 });
      expect(matchOne!.totalScore).toBe(5);
    });
  })
  
  describe('summary', () => {
    let instance: Scoreboard;

    beforeEach(() => {
      instance = new Scoreboard();
    });
  
    it('should return matches summary sorted by score & startTime', (done) => {
      instance.startGame('Mexico', 'Canada');
      instance.updateScore(1, { localScore: 0, awayScore: 5 });
  
      setTimeout(() => {
        instance.startGame('Spain', 'Brazil');
        instance.updateScore(2, { localScore: 10, awayScore: 2 });
      }, 10);
      
      setTimeout(() => {
        instance.startGame('Germany', 'France');
        instance.updateScore(3, { localScore: 6, awayScore: 6 });
      }, 20);

      setTimeout(() => {
        const matchesSummary = instance.getSummary();
        expect(matchesSummary[0].totalScore).toBe(matchesSummary[1].totalScore)
        expect(matchesSummary[0].startTime).toBeLessThan(matchesSummary[1].startTime)
        done();
      }, 30)
    });
  })
})
