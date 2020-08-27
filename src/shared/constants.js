module.exports = Object.freeze({
  PLAYER_RADIUS: 20,
  PLAYER_MAX_HP: 100,
  PLAYER_SPEED: 200,
  PLAYER_FIRE_COOLDOWN: 1,

  BULLET_RADIUS: 6,
  BULLET_SPEED: 400,
  BULLET_DAMAGE: 10,

  SCORE_BULLET_HIT: 1,
  SCORE_PER_SECOND: 0,

  MAP_SIZE: 3000,
  MSG_TYPES: {
    JOIN_GAME: 'join_game',
    GAME_UPDATE: 'update',
    INPUT: 'input',
    GAME_OVER: 'dead',
  },
});
