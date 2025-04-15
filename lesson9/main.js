class Gadget {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
    get year() {
        return this._year
    }

    set year(value) {
        if (value < 2000) {
            console.log("Помилка: некоректний рік")
            return
        }
        this._year = value
    }

    getInfo() {
        console.log(`Gadget brand: ${this.brand}, model: ${this.model}, year: ${this.year}`)
    }

    static getOldestGadget(gadgetsArray) {
        let oldDevice = gadgetsArray[0]

        gadgetsArray.forEach(key => {
            if (key._year < oldDevice._year) {
                oldDevice = key
            }
        })

        return oldDevice

    }
}

class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year)
        this.operatingSystem = operatingSystem
    }

    get operatingSystem() {
        return this._operatingSystem
    }

    set operatingSystem(value) {
        if (value == 'Android' || value == 'iOS' || value == "HarmonyOS") {
            this._operatingSystem = value
        } else {
            console.log("Помилка: недоступна операційна система")
            return
        }
    }

    getInfo() {
        console.log(`Gadget brand: ${this.brand}, model: ${this.model}, year: ${this.year}, operating system: ${this.operatingSystem}`)
    }

}

const gadget1 = new Gadget("HTC", "Wildfire S", 2010)
gadget1.getInfo()

const gadget2 = new Smartphone("Apple", "iPhone X", 2017, "iOS")
gadget2.getInfo()

const gadget3 = new Smartphone("Huawei", "Nova 5t", 2019, "HarmonyOS")
gadget3.getInfo()

console.log(Gadget.getOldestGadget([gadget3, gadget1, gadget2]))