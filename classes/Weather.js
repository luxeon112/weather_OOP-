class Weather{
    constructor(city) {
        this.city = city;
        this.key = '25df10e0f35664b5c6c1b7b1018597ca' ;
    }

    async getWeather(){
        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }
    changeCity(city){
        this.city = city
    }
}