/**
 * Passa a responsabilidade de criação de objetos para suas subclasses
 */
abstract class MazeFactory {
  abstract makeWall(): Wall ;
  abstract makeDoor(): Door;

  createMaze() {
    const door = this.makeDoor();
    const wall = this.makeWall();

    console.log(typeof door, typeof wall);
  }
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

interface Wall {
  width: number;
  height: number
}

interface Door {
  color: string;
}

class EnchantedWall implements Wall {
  constructor(width: number, height: number, enchantment: string) {
    this.width = width;
    this.height = height;
    this.enchantment = enchantment;
  }

  width: number;
  height: number;
  enchantment: string;
}

class EnchantedDoor implements Door {
  constructor(color: string, enchantment: string) {
    this.color = color;
    this.enchantment = enchantment;
  }

  color: string;
  enchantment: string;
}

