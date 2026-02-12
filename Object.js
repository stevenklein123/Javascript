const student = {

    name : "Steven",
    grades : [90 , 80 , 75],

    addGrade(grade){
        console.log(`Added grade : ${grade}`);

        this.grades.push(grade);

        console.log(`Current grade : ${this.grades}`);
    },

    calculateAverage(){
        let sum = 0;

        for(let i =0; i < this.grades.length;i++){
            sum+=this.grades[i];
        }

        let result = Number (sum / this.grades.length);

        console.log(result);
    }
};

student.addGrade(85);
student.calculateAverage();
