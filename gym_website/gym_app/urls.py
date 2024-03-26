from django.contrib import admin
from django.urls import path,include
from .import views

urlpatterns = [
    path("",views.home,name="home"),
    path("about",views.about,name="about"),
    path("facilities",views.facilities,name="facilities"),
    path("contact",views.contact,name="contact"),
    path("trainers",views.trainers,name="trainers"),

]
