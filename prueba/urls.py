from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path('', views.mostrar, name='mostrar'),
    path('get_news/', views.filtrar, name='filtrar'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)