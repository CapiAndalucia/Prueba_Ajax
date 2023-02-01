from django.shortcuts import render
import json
from django.http import HttpResponseBadRequest, JsonResponse
from prueba.models import *

# Create your views here.
def registro(request):
    if(request.headers.get('X-Requested-With') == 'XMLHttpRequest'):

        if request.method == 'GET':
            personas = [{'titular': "Noticia 1",
                         'resumen': "Resumen de la noticia 1",
                         'descripcion': "Esta es la noticia 1"},
                        {'titular': "Noticia 2",
                         'resumen': "Resumen de la noticia 2",
                         'descripcion': "Esta es la noticia 2"},
                        {'titular': "Noticia 3",
                         'resumen': "Resumen de la noticia 3",
                         'descripcion': "Esta es la noticia 3"}];

            return JsonResponse({'context': personas})

    else:
        return render(request, 'prueba/index.html', {})
