// конструктор студента

function Student(name, surName, bday) {
    this.name = name,
    this.surName = surName,
    this.bdaye = bday,

    this.arrayPresence = new Array(30),
    this.arrayMark = new Array(30)
};

// методы конструктора

Student.prototype = {

    getAge() {
        return (new Date).getFullYear() - this.bday;
    },
    present() {
        const indexPresent = this.arrayPresence.findIndex(item => item === undefined);
        return this.arrayPresence[indexPresent] = true;
    },
    absent() {
        const indexPresent = this.arrayPresence.findIndex(item => item === undefined);
        return this.arrayPresence[indexPresent] = false;
    },
    mark(value) {
        if(0 <= value || value >= 10){
        const indexMark = this.arrayMark.findIndex(item => item === undefined);
        return this.arrayMark[indexMark] = value;
        }
    },
    midleMark(){
        const sumMark = this.arrayMark.reduce(function(acc, item) {
            if(item !==undefined){
                return acc += item;
            }
        },);
        
        const lengthMark = this.arrayMark.filter(item => item !== undefined)
        return Math.floor(sumMark / lengthMark.length)
    },
    midlePresent(){
        const sumPresent = this.arrayPresence.reduce(function(acc, item) {
            if(item !==undefined){
                return acc += item;
            }
        },);
        
        const lengthPresent = this.arrayPresence.filter(item => item !== undefined)
        return Math.floor(sumPresent / lengthPresent.length)
    },
    summary() {
        let midleMarkValue = midleMark();
        let midlePresentValue = midlePresent();
        if( (midleMarkValue >= 9) && (midlePresentValue >= 0.9) ) {
            return alert('Ути какой молодчинка!')
        }else if( (midleMarkValue <= 9) && (midlePresentValue <= 0.9) ) {
            return alert('Редиска!')
        }else {
            return alert('Норм, но можно лучше.')
        }
    }
}


// вывод результатов
const dana = new Student('dana','wait', 1985)
console.log(dana);
dana.present();
dana.absent();

dana.mark(5);
dana.mark(4);
dana.mark(8);

console.log(dana.midleMark());
console.log(dana.arrayPresence);