import Scoreboard from '../src/scoreboard';

describe('Scoreboard', () => {
  describe('basic functionality', () => {
    let instance: Scoreboard;

    beforeAll(() => {
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
  })
  
  describe('summary', () => {
    
  })
})
