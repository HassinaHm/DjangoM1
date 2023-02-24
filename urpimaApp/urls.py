from django.urls import path
from urpimaApp import views


urlpatterns = [
    path('hello/', views.index, name='index'),
    path('chercheur/', views.ReactView.as_view()),
    path('journals/', views.JournalView.as_view()),
    path('livres/', views.LivreView.as_view()),
    path('theses/', views.TheseView.as_view()),
    path('projets/', views.ProjetView.as_view()),
    path('all/', views.GetallView.as_view()),
    path('journals/<int:pk>/', views.JournalDetailView.as_view(), name='journal-detail'),

]