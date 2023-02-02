$(document).ready(function () {


    $("#boton").click(function () {

        $.ajax({
            url: '',
            type: "GET",
            dataType: "json",
            data: j_son,
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            },
            success: (data) => {
                console.log(data);
            },
            error: (error) => {
                console.log(error);
            }
        });
    })

        $("#muestra").click(function () {
          $.ajax({
            url: '',
            type: "GET",
            dataType: "json",
            success: (data) => {
                $("body").append("<select></select>")
                $('select').append('data.context')
                for(let i of data.context){
                    console.log(i)
                    $("body").append("<p> Titular: " + i.titular + ", Resumen: " +i.resumen + ", descripcion: " + i.descripcion + "</p>")

                }
            },
            error: (error) => {
              console.log(error);
            }
          });
    })

});
