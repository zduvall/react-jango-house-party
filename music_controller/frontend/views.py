from django.shortcuts import render

# Allows us to rener index.html and then react takes care of the rest
def index(req, *args, **kwargs):
    return render(req, 'frontend/index.html')