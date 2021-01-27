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
  })
  
  describe('summary', () => {
    
  })
})
