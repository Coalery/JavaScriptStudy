interface ClockConstructor {
  new (hour: number, minute: number);
}

interface ClockInterface {
  tick(): void;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  private hour: number;
  private minute: number;

  constructor(hour: number, minute: number) {
    this.hour = hour;
    this.minute = minute;
  }

  tick() {
    console.log(`Beep Beep! Current Time is ${this.hour}:${this.minute}`);
  }
}

class AnalogClock implements ClockInterface {
  private hour: number;
  private minute: number;

  constructor(hour: number, minute: number) {
    this.hour = hour;
    this.minute = minute;
  }

  tick() {
    console.log(`Tick Tock! Current Time is ${this.hour}:${this.minute}`);
  }
}

let digitalClock = createClock(DigitalClock, 12, 13) as DigitalClock;
let analogClock = createClock(AnalogClock, 15, 37) as AnalogClock;

digitalClock.tick();
analogClock.tick();
