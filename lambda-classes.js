// // CODE here for your Lambda Classes

class Person {
    constructor(Person) {
    this.name = Person.name;
    this.age = Person.age;
    this.location = Person.location;
    this.gender = Person.gender;
    }
    speak () {
        return(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person{
    constructor(instructorAtters) {
        super(instructorAtters);
        this.specialty = instructorAtters.specialty;
        this.favLanguage = instructorAtters.favLanguage;
        this.catchPhrase = instructorAtters.catchPhrase;
    }
    demo (subject) {
        return(`Today we are learning about ${subject}.`)
    }
    grade (sName, subject) {
        return(`${sName.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Person{
    constructor(studentAtters) {
        super(studentAtters);
        this.previousBackground = studentAtters.previousBackground;
        this.className = studentAtters.className;
        this.favSubjects = studentAtters.favSubjects;
    }
    listsSubjects () {
        return(`${this.favSubjects}`)
    }
    PRAssignment () {
        return(`${this.name} has submitted a PR for ${this.favSubjects[0]}.`)
    }
    sprintChallenge() {
        return(`${this.name} has begun sprint challenge on ${this.favSubjects[0]}.`)
    }
}

class ProjectManager extends Instructor{
    constructor(PMAtters) {
        super(PMAtters);
        this.gradClassName = PMAtters.gradClassName;
        this.favInstructor = PMAtters.favInstructor;
    }
    standUp (channel) {
        return(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode (sName, subject) {
        return(`${this.name} debugs ${sName.name}'s code on ${subject}.`)
    }
}

const mike = new Student({
    name: 'Mike',
    location: 'Hot Springs, AR',
    age: 28,
    gender: 'male',
    className: 'FSWPT4',
    favSubjects: ['JavaScript', 'HTML'],
    previousBackground: 'Chef',
  });


  const carlos = new ProjectManager({
    name: 'Carlos',
    location: 'Somewhere in Carolina, maybe?',
    age: 20,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Everything',
    gradClassName: 'OG1',
    favInstructor: 'Josh',
    catchPhrase: `Gotta get some Pizza Rolls.`,
    channel: 'Group-Carlos'
  });


  const josh = new Instructor({
    name: 'Josh',
    location: 'Another Plane of Reality',
    age: 30,
    gender: 'male',
    favLanguage: 'All of them',
    specialty: 'Everything',
    catchPhrase: `I invoke you... Greeting!`
  });

  console.log(mike)
  console.log(mike.sprintChallenge())
  console.log(mike.favSubjects)
  //============================//
  console.log(carlos)
  console.log(carlos.standUp('PM-Group-Carlos'))
  console.log(carlos.debugsCode(mike, 'Javascript'))
  //===========================//
  console.log(josh)
  console.log(josh.demo('JavaScript'))
  console.log(josh.grade(mike, 'JavaScript'))