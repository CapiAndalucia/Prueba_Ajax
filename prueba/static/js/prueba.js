$(document).ready(function () {

    $.ajax({
            url: '',
            success: function(data) {
                for(let i of data.context){
                    console.log(i)
                    $("#filter").append("<option value='" + i.titular + "'>" +  i.titular + "</option>")
                }
            },
            error: (error) => {
                console.log(error);
            }
        });

    $("#muestra").click(function () {
        $("div").remove("#texto");
        $('body > p').remove();

        $.ajax({
            type: "GET",
            url: '',
            success: function(data) {
                    $("body").append("<div id='texto'>" + "</div>")
                for(let i of data.context){

                    $("#texto").append("<p> Titular: " + i.titular + ", Resumen: " +i.resumen + ", descripcion: " + i.descripcion + "</p>")
                }
            },
            error: (error) => {
                console.log(error);
            }
        });
    })

    $("#buscar").click(function () {
        $("div").remove("#texto");
            $('body > p').remove();
          var filter = $('#filter').val();
          $.ajax({
            url: 'get_news/',
            success: function(data){
                window.location == "{% 'filtrar' %}"
                for(let i of data.context){
                    if (!filter || i.titular == filter) {
                        $("body").append("<p> Titular: " + i.titular + ", Resumen: " + i.resumen + ", descripcion: " + i.descripcion + "</p>")
                    }
                }
            },
            error: (error) => {
              console.log(error);
            }
          });
    })

});
