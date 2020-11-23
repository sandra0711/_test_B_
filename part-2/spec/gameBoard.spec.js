describe("GameBoard", () => {
    let myHelper;
    let myTerrainList;
    let boardSize;
    let myGameBoard;

    beforeEach(() => {
        myHelper = new TerrainHelper();
        myTerrainList = ["W", "W", "P", "P", "F", "M", "L", "L", "L"];
        boardSize = 3;
        myGameBoard = new GameBoard(myHelper, myTerrainList, boardSize);
    });

    it(' У myGameBoard есть helper', () => {
        expect(myGameBoard.terrainHelper).toBe(myHelper);
    });

    it(' У myGameBoard есть list', () => {
        expect(myGameBoard.terrainList).toEqual(myTerrainList);
    });

    it(' У myGameBoard есть size', () => {
        expect(myGameBoard.size).toEqual(boardSize);
    });

    describe('Функция terrainMap', () => {
        it('выдает 2D карту местности', () => {
            expect(myGameBoard.terrainMap()).toEqual([
                ['water', 'water', 'plains'],
                ['plains', 'forest', 'mountains'],
                ['lava', 'lava', 'lava']
            ]);
        });

        it('отвечает на размер платы', () => {
            let smallSize = 2;
            let shortTerrainList = ["W", "P", "P", "W"];
            let smallBoard = new GameBoard(myHelper, shortTerrainList, smallSize);
            expect(smallBoard.terrainMap()).toEqual([
                ['water', 'plains'],
                ['plains', 'water']
            ])
        });
    });

    describe('difficultyOfJourney', () => {
        it('totals the difficulty of a journey // Сумма сложности путешествия', () => {
            let journey = [[0, 0], [0, 1], [1, 1], [1, 2], [2, 2]];
            expect(myGameBoard.difficultyOfJourney(journey)).toEqual(225);
        });
    });
});
