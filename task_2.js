class Car {
    constructor() {
        this._currentFuelVolume = 0;
        this._isStarted = false;
        this._mileage = 0;
    }

    get brand() {
        return this._brand;
    }

    set brand(val) {
        this._brand = val;
    }

    get model() {
        return this._model;
    }

    set model(val) {
        this._model = val;
    }

    get yearOfManufacturing() {
        return this._yearOfManufacturing;
    }

    set yearOfManufacturing(val) {
        let res = parseInt(val);
        if (isFinite(res) && 1900 <= res && res <= new Date().getFullYear()) {
            this._yearOfManufacturing = res;
        } else {
            throw 'Неверный год';
        }
    }

    get maxSpeed() {
        return this._maxSpeed;
    }

    set maxSpeed(val) {
        let res = parseInt(val);
        if (isFinite(res) && 100 <= res && res <= 300) {
            this._maxSpeed = res;
        } else {
            throw 'Неверная скорость';
        }
    }

    get maxFuelVolume() {
        return this._maxFuelVolume;
    }

    set maxFuelVolume(val) {
        let res = parseInt(val);
        if (isFinite(res) && 10 <= res && res <= 50) {
            this._maxFuelVolume = res;
        } else {
            throw 'Неверный литраж';
        }
    }

    get fuelConsumption() {
        return this._fuelConsumption;
    }

    set fuelConsumption(val) {
        let res = parseFloat(val);
        if (isFinite(res)) {
            this._fuelConsumption = res;
        } else {
            throw 'Неверный расход';
        }
    }

    get currentFuelVolume() {
        return this._fuelConsumption;
    }

    get isStarted() {
        return this._isStarted;
    }


    get mileage() {
        return this._mileage;
    }


    start() {
        if (this._isStarted) {
            throw 'Машина уже заведена';
        } else {
            this._isStarted = true;
        }
    }

    shutDownEngine() {
        if (!this._isStarted) {
            throw 'Машина ещё не заведена';
        } else {
            this._isStarted = false;
        }
    }

    fillUpGasTank(gas) {
        if (!isFinite(gas)) throw 'Неверное количество топлива для заправки';
        if (gas <= 0) throw 'Неверное количество топлива для заправки';
        if ((gas + this._currentFuelVolume) > this.maxFuelVolume) {
            throw 'Топливный бак переполнен';
        }
        this._currentFuelVolume += gas;
    }

    drive(speed, hour) {
        if (!this._isStarted) throw 'Машина должна быть заведена, чтобы ехать';
        if (!isFinite(speed) || speed <= 0) throw 'Неверная скорость';
        if (!isFinite(hour) || hour <= 0) throw 'Неверное количество часов';
        if (speed > this.maxSpeed) throw 'Машина не может ехать так быстро';
        let tempMileage = speed * hour;
        let tempFuelConsumption = tempMileage / 100 * this.fuelConsumption;
        if (tempFuelConsumption > this._currentFuelVolume) {
            throw 'Недостаточно топлива';
        }
        this._currentFuelVolume -= tempFuelConsumption;
        this._mileage += tempMileage;
    }
}