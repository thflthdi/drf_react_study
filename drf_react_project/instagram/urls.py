from django.urls import path
from . import views

app_name = 'instagram'

urlpatterns = [
    path('', views.search_list, name='search_list'),
    path('<int:pk>/', views.post_detail),
]
