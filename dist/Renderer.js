class Renderer {

    renderSavedCities(citiesArray) {
        
       $('#saved-content').empty()
       const source = $('#saved-results-template').html();
       const template = Handlebars.compile(source);
       const newHTML = template({ result: citiesArray });
       $('#saved-content').append(newHTML);
    }
    
    renderUnsavedCities(citiesArray) {
        $('#unsaved-content').empty()
        const source = $('#unsaved-results-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ result: citiesArray });
        $('#unsaved-content').append(newHTML);
    }

  
 
 }