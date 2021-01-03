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
        let res = parseInt(val);
        if (isFinite(res) && 1900 <= res && res <= new Date().getFullYear()) {
            this.#yearOfManufacturing = res;
        } else {
            throw 'Неверный год';
        }
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(val) {
        let res = parseInt(val);
        if (isFinite(res) && 100 <= res && res <= 300) {
            this.#maxSpeed = res;
        } else {
            throw 'Неверная скорость';
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(val) {
        let res = parseInt(val);
        if (isFinite(res) && 10 <= res && res <= 50) {
            this.#maxFuelVolume = res;
        } else {
            throw 'Неверный литраж';
        }
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(val) {
        let res = parseFloat(val);
        if (isFinite(res)) {
            this.#fuelConsumption = res;
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
        if (!isFinite(gas)) throw 'Неверное количество топлива для заправки';
        if (gas <= 0) throw 'Неверное количество топлива для заправки';
        if ((gas + this.#currentFuelVolume) > this.maxFuelVolume) {
            throw 'Топливный бак переполнен';
        }
        this.#currentFuelVolume += gas;
    }

    drive(speed, hour) {
        if (!this.#isStarted) throw 'Машина должна быть заведена, чтобы ехать';
        if (!isFinite(speed) || speed <= 0) throw 'Неверная скорость';
        if (!isFinite(hour) || hour <= 0) throw 'Неверное количество часов';
        if (speed > this.maxSpeed) throw 'Машина не может ехать так быстро';
        let tempMileage = speed * hour;
        let tempFuelConsumption = tempMileage / 100 * this.fuelConsumption;
        if (tempFuelConsumption > this.#currentFuelVolume) {
            throw 'Недостаточно топлива';
        }
        this.#currentFuelVolume -= tempFuelConsumption;
        this.#mileage += tempMileage;
    }
}