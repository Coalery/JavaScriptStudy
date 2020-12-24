class Person {
    constructor(name, age, gender) {
        this.getName = () => name;
        this.getAge = () => age;
        this.getGender = () => gender;

        this.setName = (_name) => {
            if (typeof _name !== 'string')
                return;
            name = _name;
        };
        this.setAge = (_age) => {
            if (typeof _age !== 'number')
                return;
            age = _age;
        };
        this.setGender = (_gender) => {
            if (typeof _gender !== 'string')
                return;
            gender = _gender;
        };

        this.introduce = () => `${name} 님은 ${age}살이고, 성별은 ${gender}입니다.`;
    }
}

class Student extends Person {
    constructor(name, age, gender, number) {
        super(name, age, gender);

        this.getNumber = () => number;
        this.setNumber = (_number) => {
            if (typeof _number !== 'number')
                return;
            number = _number;
        };
    }
}

let stu1 = new Student('김현우', 19, '남', 30212);
console.log(stu1.getAge());