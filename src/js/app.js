export function getHealthStatus(health) {
    if (health > 50) {
        return 'healthy';
    }
    if (health >= 15 && health <= 50) {
        return 'wounded';
    }
    return 'critical';
}

export function sortHeroesByHealth(heroes) {
    return heroes.sort((a, b) => b.health - a.health);
}

import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
