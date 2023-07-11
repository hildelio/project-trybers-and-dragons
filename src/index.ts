import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';

// Criação dos objetos Character
const player1 = new Character('DELETEsemWHERE');
const player2 = new Character('ReturnJSON');
const player3 = new Character('NotFounded');

// Execução do método levelUp em player1
player1.levelUp();
player1.levelUp();
player1.levelUp();

// Exportação dos objetos Character
export { player1, player2, player3 };

// Criação dos objetos Monster
const monster1 = new Monster();
const monster2 = new Dragon();

// Exportação dos objetos Monster
export { monster1, monster2 };

// Criação do objeto PVP
const pvp = new PVP(player2, player3);

// Exportação do objeto PVP
export { pvp };

// Criação do objeto PVE
const pve = new PVE(player1, [monster1, monster2]);

// Exportação do objeto PVE
export { pve };

// Função runBattles
function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    battle.fight();
  });
}

// Exportação da função runBattles
export { runBattles };
