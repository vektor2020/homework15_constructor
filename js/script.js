function Student(name, surName, bday) {
    this.name = name,
    this.surName = surName,
    this.bdaye = bday,

    this.arrayPresence = new Array(30),
    this.arrayMark = new Array(30),

    this.getAge = function() {
        return (new Date).getFullYear() - this.bday;
    },
    this.present = function() {
        const indexPresent = this.arrayPresence.findIndex(item => item === undefined);
        return this.arrayPresence[indexPresent] = true;
    },
    this.absent = function() {
        const indexPresent = this.arrayPresence.findIndex(item => item === undefined);
        return this.arrayPresence[indexPresent] = false;
    },
    this.mark = function(value) {
        const indexMark = this.arrayMark.findIndex(item => item === undefined);
        return this.arrayMark[indexMark] = value;
    },
    this.midleMark = function(){
        const sumMark = this.arrayMark.reduce(function(acc, item) {
            if(item !==undefined){
                return acc += item;
            }
        },);
        
        const lengthMark = this.arrayMark.filter(item => item !== undefined)
        return sumMark / lengthMark.length;
    }
}

const dana = new Student('dana','wait', 1985)
console.log(dana);
dana.present();
dana.absent();

dana.mark(5);
dana.mark(4);
dana.mark(8);

console.log(dana.midleMark());
console.log(dana.arrayPresence);