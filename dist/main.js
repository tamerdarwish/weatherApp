
let model = new Model()
let renderer = new Renderer()


window.onload = async function(){
    let savedCities =await model.getSavedCities()
    renderer.renderSavedCities(savedCities)
}

$(document).on('click','.fa-plus', async function(){
    let cityName = $(this).closest(".unsaved-result").find("h1").text()
     await model.saveCity(cityName)
     await window.onload()
    renderer.renderUnsavedCities(model.unsavedCities)
  });


  $(document).on('click','.fa-minus', function(){
    let cityName = $(this).closest(".saved-result").find("h1").text()
    model.deleteCity(cityName)
    window.onload()
    renderer.renderUnsavedCities(model.unsavedCities)
  });



$("#search-button").on("click", async function () {
    let cityName = $("input").val()
    let unSavedCity = await model.getCityData(cityName)
    renderer.renderUnsavedCities([unSavedCity])
})











