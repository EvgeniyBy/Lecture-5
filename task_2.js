class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume;
    #isStarted;
    #mileage;
    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacturing = yearOfManufacturing;
        this.maxSpeed = maxSpeed;
        this.maxFuelVolume = maxFuelVolume;
        this.fuelConsumption = fuelConsumption;
        this.#currentFuelVolume = 0;
        this.#isStarted = false;
        this.#mileage = 0;
    }

    get brand() {
        return this.#brand;
    }

    set brand(val) {
        if (typeof val == 'string' && val.length >= 1 && val.length <= 50) {
            this.#brand = val;
        } else {
            throw 'Ошибка поля brand';
        }
    }

    get model() {
        return this.#model;
    }

    set model(val) {
        if (typeof val == 'string' && val.length >= 1 && val.length <= 50) {
            this.#model = val;
        } else {
            throw 'Ошибка поля model';
        }

    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(val) {
        if (checkNumber(val) && 1900 <= val && val <= new Date().getFullYear()) {
            this.#yearOfManufacturing = val;
        } else {
            throw 'Неверный год';
        }
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(val) {
        if (checkNumber(val) && 100 <= val && val <= 300) {
            this.#maxSpeed = val;
        } else {
            throw 'Неверная скорость';
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(val) {
        if (checkNumber(val) && 10 <= val && val <= 50) {
            this.#maxFuelVolume = val;
        } else {
            throw 'Неверный литраж';
        }
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(val) {
        if (checkNumber(val)) {
            this.#fuelConsumption = val;
        } else {
            throw 'Неверный расход';
        }
    }

    get currentFuelVolume() {
        return this.#fuelConsumption;
    }

    get isStarted() {
        return this.#isStarted;
    }


    get mileage() {
        return this.#mileage;
    }


    start() {
        if (this.#isStarted) {
            throw 'Машина уже заведена';
        } else {
            this.#isStarted = true;
        }
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw 'Машина ещё не заведена';
        } else {
            this.#isStarted = false;
        }
    }

    fillUpGasTank(gas) {
        if (!isFinite(gas) && (gas <= 0)) throw 'Неверное количество топлива для заправки';
        if ((gas + this.#currentFuelVolume) > this.#maxFuelVolume) {
            throw 'Топливный бак переполнен';
        }
        this.#currentFuelVolume += gas;
    }

    drive(speed, hour) {
        if (!this.#isStarted) throw 'Машина должна быть заведена, чтобы ехать';
        if (!checkNumber(speed) || speed <= 0) throw 'Неверная скорость';
        if (!checkNumber(hour) || hour <= 0) throw 'Неверное количество часов';
        if (speed > this.maxSpeed) throw 'Машина не может ехать так быстро';
        let tempMileage = speed * hour;
        let tempFuelConsumption = tempMileage / 100 * this.#fuelConsumption;
        if (tempFuelConsumption > this.#currentFuelVolume) {
            throw 'Недостаточно топлива';
        }
        this.#currentFuelVolume -= tempFuelConsumption;
        this.#mileage += tempMileage;
    }
}
function checkNumber(val){
    if (!isFinite(val) || typeof val != 'number' || isNaN(val)){
        return false;
    }
    return true;
}