class Renderer {

    renderSavedCities(citiesArray) {
        
       $('#content-container').empty()
       const source = $('#saved-results-template').html();
       const template = Handlebars.compile(source);
       const newHTML = template({ result: citiesArray });
       $('#content-container').append(newHTML);
    }
    
    renderUnsavedCities(citiesArray) {
        $('#unsaved-content').empty()
        const source = $('#unsaved-results-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({ result: citiesArray });
        $('#content-container').append(newHTML);
    }

  
 
 }