class Model {

    constructor() {
        this.savedCities = []
        this.input = ''
        this.unsavedCities = []
    }

    deleteCity(cityName) {

        return $.ajax({
            url: `delete/${cityName}`,
            type: 'DELETE',
            success: function (result) {
                return
            }
        });


    }

    deleteCityFromCitiesArray(cityName, citiesArray) {
        for (let city of citiesArray) {
            if (city.name == cityName) {
                let index = citiesArray.indexOf(city)
                citiesArray.splice(index, 1)
            }
        }
    }

    getCityFromCitiesArray(cityName, citiesArray) {
        for (let city of citiesArray) {
            if (city.name == cityName) {
                return city
            }
        }
    }


    getSavedCities() {
        const self = this
        return $.get(`savedCities`).then(result => {
            this.savedCities = result
            return this.savedCities
        })

    }



    getCityData(cityName) {

        return $.get(`search/${cityName}`, (cityWeatherData) => {
            this.unsavedCities.push(cityWeatherData)
            return this.unsavedCities
        })
    }

    saveCity(cityName) {
        let cityObject = this.getCityFromCitiesArray(cityName, this.unsavedCities)
        return $.ajax({
            url: "add",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(cityObject),
            success:  (result) => {
                return this.deleteCityFromCitiesArray(cityName, this.unsavedCities)
                

            }
        });

    }


}

