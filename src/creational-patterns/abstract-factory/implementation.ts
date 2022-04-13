/**
 * Factories
 */

abstract class MazeFactory {
  abstract makeWall(): Wall;
  abstract makeDoor(): Door;
}

class EnchantedMazeFactory extends MazeFactory {
  makeDoor(): EnchantedDoor {
    const door = new EnchantedDoor('#225566','protego maxima');

    return door;
  }

  makeWall(): EnchantedWall {
    const wall = new EnchantedWall(40, 50, 'protego maxima');

    return wall;
  }
}

/**
 * Object-Products
 */

abstract class Wall {
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  width: number;
  height: number;
}

abstract class Door {
  constructor (color: string) {
    this.color = color;
  }

  color: string;
}

class EnchantedWall extends Wall {
  constructor(width: number, height: number, enchantment: string) {
    super(width, height);
    this.enchantment = enchantment;
  }

  enchantment: string;
}

class EnchantedDoor extends Door {
  constructor(color: string, enchantment: string) {
    super(color);
    this.enchantment = enchantment;
  }

  enchantment: string;
}

type EnchantedMaze = {
  door: EnchantedDoor;
  wall: EnchantedWall;
}

function createMaze(factory: MazeFactory) {
  const door = factory.makeDoor();
  const wall = factory.makeWall();

  return {
    door, wall
  };
}

function main() {
  const maze = <EnchantedMaze> createMaze(new EnchantedMazeFactory());

  console.log('enchanted door? ', maze.door instanceof EnchantedDoor);
  console.log('enchanted wall? ', maze.wall instanceof EnchantedWall);
}