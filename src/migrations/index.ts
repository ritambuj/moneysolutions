import * as migration_20260603_114605_initial from './20260603_114605_initial';

export const migrations = [
  {
    up: migration_20260603_114605_initial.up,
    down: migration_20260603_114605_initial.down,
    name: '20260603_114605_initial'
  },
];
