describe("main", () => {
    let filmProject;
    let director;
    let actor1;
    let actor2;
    let actors;

    describe('attributes', () => {
        beforeEach(() => {
            // Подготовка переменных.

            director = new Director();
            actor1 = new Actor({
                salary: 100
            });
            actor2 = new Actor({
                salary: 100
            });
            actors = [actor1, actor2];
            
            filmProject = new FilmProject({
                title: 'Movie 1',
                director: director,
                cast: actors,
                castingBudget: 3500000,
            });
        });

        it('У FilmProject есть `title`', () => {
            expect(filmProject.title).toEqual('Movie 1');
        });
        it('Свойство `title` можно изменять', () => {
            filmProject.title = 'Movie 2'
            expect(filmProject.title).toEqual('Movie 2');
        });
        it('У FilmProject есть `director`', () => {
            expect(filmProject.director).toEqual(director);
        });

        it('Свойство `director` можно изменять', () => {
            const newDirector = new Director();
            expect(filmProject.director).toEqual(director);

            filmProject.director = newDirector;
            expect(filmProject.director).toEqual(newDirector);
        });
        it('У FilmProject есть `cast`(Актёрский состав)', () => {
            expect(filmProject.cast).toBe(actors);
        });
        it('У FilmProject есть `castingBudget`', () => {
            expect(filmProject.castingBudget).toEqual(3500000);
        });
    });

    describe('Взаимодействие с `cast`', () => {
        describe('Оставшийся бюджет', () => {
            beforeEach(() => {

                actor1 = new Actor({
                    salary: 1000000
                });
                actor2 = new Actor({
                    salary: 1250000
                });
                filmProject = new FilmProject({
                    cast: [actor1, actor2],
                    castingBudget: 2500000,
                });
            });
            it('Подсчитывает оставшийся бюджет после выплаты зарплат актерам(`cast`)', () => {
                expect(filmProject.remainingBudget()).toEqual(250000);
            });
            it('castingBudget не изменяется после выплат', () => {
                expect(filmProject.castingBudget).toEqual(2500000);
                filmProject.remainingBudget()
                expect(filmProject.castingBudget).toEqual(2500000);
            });
        });
    });

    describe('Добавление актера', () => {
        let castActor;
        let affordableActor;
        let unaffordableActor;
        let filmProject;

        beforeEach(() => {
            castActor = new Actor({
                salary: 0,
            });
            affordableActor = new Actor({
                salary: 1000000,
            });
            unaffordableActor = new Actor({
                salary: 999999999999,
            })
            filmProject = new FilmProject({
                cast: [castActor],
                castingBudget: 1000000,
            });
        })

        it('Добавляет актера в свойство `cast` (массив)', () => {
            expect(filmProject.cast).toEqual([castActor]);
            filmProject.addActor(affordableActor);
            expect(filmProject.cast).toEqual([castActor, affordableActor]);
        });
        it('addActor возвращает true', () => {
            expect(filmProject.addActor(affordableActor)).toBeTruthy();
        });
        it('Слишком дорогой актер не будет добавлен в `cast`', () => {
            expect(filmProject.cast).toEqual([castActor]);
            filmProject.addActor(unaffordableActor);
            expect(filmProject.cast).toEqual([castActor]);
        });
        it('addActor возвращает false', () => {
            expect(filmProject.addActor(unaffordableActor)).toBeFalsy();
        });
    });

    describe('Топ актёров', () => {
        it('Возвращает актёров из актерского состава, рейтинг популярности которых >8', () => {
            const headliner1 = new Actor({
                popularityRating: 10,
            });
            const headliner2 = new Actor({
                popularityRating: 9,
            });
            const almostHeadliner = new Actor({
                popularityRating: 8,
            });
            const unpopularActor = new Actor({
                popularityRating: 2,
            });
            const filmProject = new FilmProject({
                cast: [
                    almostHeadliner,
                    headliner1,
                    unpopularActor,
                    headliner2,
                ],
            });

            expect(filmProject.headliners()).toEqual([
                headliner1,
                headliner2,
            ]);
        });
    });

});
