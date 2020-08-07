class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "High School";
    }
}

const student1 = new Student(12, "Oliver");
const student2 = new Student(22, "green");

console.log(student1, student2);