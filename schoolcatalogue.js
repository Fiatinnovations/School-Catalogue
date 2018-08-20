class School {
	constructor(name, numberOfStudents){
		this._name = name;
		this._level = ['primary', 'middle', 'high'];
		this._numberOfStudents = numberOfStudents;
	}

	get name(){
		return this._name;
	}

	get level(){
		return this._level;
	}

	get numberOfStudents(){
		return this._numberOfStudents;
	}

	set numberOfStudents(numberOfStudents){
		const TotalStudents = this._numberOfStudents;
		if(typeof TotalStudents === 'string'){
      return 'Invalid input: numberOfStudents must be set to a Number.';		
		}else{
			TotalStudents = numberOfStudents;
		} 
		
	}

	quickFacts(){
		return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`

	}

	static pickSubstituteTeacher(substituteTeachers){
		substituteTeachers = [];
		const i = Math.floor(Math.random() * substituteTeachers.length );
		return substituteTeachers[i];

	}
}

class PrimarySchool extends School {
	constructor(name, numberOfStudents, pickUpPolicy){
		super(name, 'primary', numberOfStudents);
		this._pickUpPolicy = pickUpPolicy;
    this._level = 'primary';
   this._numberOfStudents = numberOfStudents;
	}

	get pickUpPolicy(){
		return this._pickUpPolicy;
	}
}

class Middle extends School{
	constructor(name){
		super(name);
	}
}

class HighSchool extends School{
	constructor(name,numberOfStudents,sportTeams){
		super(name, 'high', numberOfStudents);
		this._sportTeams = [];

	}

	get sportTeams(){
		return this.sportTeams;
	}
}

const LorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
console.log(LorraineHansbury.quickFacts());
console.log(typeof(LorraineHansbury.quickFacts().numberOfStudents));
const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
const subTeacher = School.pickSubstituteTeachers(substituteTeachers);
console.log(subTeacher);