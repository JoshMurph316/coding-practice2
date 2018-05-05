function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}
Vehicle.prototype.turnOn = () => this.isRunning = true;
Vehicle.prototype.turnOff = () => this.isRunning = false;
Vehicle.prototype.honk = () => {
    if (this.isRunning) {
        return 'beep';
    }
};

function Person(first, last, color, number) {
    this.firstname = first;
    this.lastname = last;
    this.favoriteColor = color;
    this.favoriteNumber = number;
    this.family = [];
}

Person.prototype.fullName = () => `${this.firstname} ${this.lastname}`;
Person.prototype.addToFamily = function(ele) {
    if (ele instanceof Person && !this.family.includes(ele)) {
        this.family.push(ele);
    }
    return this.family.length;
};

const person_one = new Person('josh', 'murph', 'blue', 10);
const person_two = new Person('nik', 'murph', 'green', 12);

person_one.addToFamily(person_two);