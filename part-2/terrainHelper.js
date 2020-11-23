class TerrainHelper {
    scoreDifficulty(terrainType) {
        switch (terrainType) {
            case 'water':
                return 50;
            case 'plains':
                return 1;
            case 'forest':
                return 5;
            case 'lava':
                return 100;
            case 'mountains':
                return 20;
            default:
                throw new Error(`I can't recognize this terrain type: ${terrainType} (must be water, plains, forest, lava, or mountains)`);
        }
    }

    letterToTerrain(terrainLetter) {
        switch (terrainLetter) {
            case 'W':
                return 'water';
            case 'P':
                return 'plains';
            case 'F':
                return 'forest';
            case 'L':
                return 'lava';
            case 'M':
                return 'mountains';
            default:
                throw new Error(`I can't recognize this terrain letter: ${terrainLetter} (must be 'W', 'P', 'F', 'L' or 'M')`)
        }
    }
};

