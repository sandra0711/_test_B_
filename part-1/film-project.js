// const {}

class FilmProject {
  constructor(args = {}) {
    this.title = args.title;
    this.director = args.director;
    this.cast = args.cast;
    this.castingBudget = args.castingBudget;
  }
  remainingBudget() {
    let salaryTotal = this.cast.reduce((remain, el) => { return remain + el.salary }, 0);
    return this.castingBudget - salaryTotal ;
  }
  addActor(actor) {
    if (actor.salary > 3000000) {
      return false;
    } else {
      this.cast.push(actor);
      return true;
    }
  }
  headliners() {
    return this.cast.filter(el => el.popularityRating > 8);
  }
}



module.exports = { FilmProject }
