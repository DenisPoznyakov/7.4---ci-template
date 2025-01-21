import { getHealthStatus, sortHeroesByHealth } from '../app.js';

test.each([
    ['healthy', 100],
    ['healthy', 51],
    ['wounded', 50],
    ['wounded', 15],
    ['critical', 14],
    ['critical', 0]
])('testing health status %s this %i HP', (status, health) => {
    const result = getHealthStatus(health);
    expect(result).toBe(status)
});

test('sorting heroes by health', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
  
    const sortedHeroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
  
    expect(sortHeroesByHealth(heroes)).toEqual(sortedHeroes);
  });