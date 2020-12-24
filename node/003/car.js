class Car {
    constructor(name, size) {
        this.run = () => console.log(`${size}의 크기를 가진 ${name} 자동차가 달립니다.`);
        this.stop = () => console.log(`${size}의 크기를 가진 ${name} 자동차가 멈췄습니다.`);
    }
}

exports.Car = Car;