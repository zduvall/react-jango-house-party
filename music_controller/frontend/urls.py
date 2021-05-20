from django.urls import path
from .views import index

# render index template whenever we have the home path
urlpatterns = [path("", index)]
