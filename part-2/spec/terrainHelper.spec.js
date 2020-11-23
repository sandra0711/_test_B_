describe('TerrainHelper', () => {
    let helper;

    beforeEach(() => {
        helper = new TerrainHelper();
    });

    describe('score difficulty / оценка сложности', () => {
        it('scores how hard terrain is / оценивает, насколько сложна местность', () => {
            expect(helper.scoreDifficulty('water')).toEqual(50);
            expect(helper.scoreDifficulty('plains')).toEqual(1);
        });

        it('raises an exception if it can\'t recognize the terrain / выдает ошибку, если не может распознать местность', () => {
            expect(function () { helper.scoreDifficulty('clouds'); })
                .toThrow(new Error(`I can't recognize this terrain type: clouds (must be water, plains, forest, lava, or mountains)`));
        });
    });

    describe('convering letters to terrain / преобразует буквы в местности', () => {
        it('converts a letter to a terrain symbol / преобразует букву в символ местности', () => {
            expect(helper.letterToTerrain('W')).toEqual('water');
            expect(helper.letterToTerrain('M')).toEqual('mountains');
        });

        it('raises an exception if it can\'t recognize the terrain / выдает ошибку, если не может распознать местность', () => {
            expect(function () { helper.letterToTerrain('C'); })
                .toThrow(new Error("I can\'t recognize this terrain letter: C (must be 'W', 'P', 'F', 'L' or 'M')"));
        });
    });
});
