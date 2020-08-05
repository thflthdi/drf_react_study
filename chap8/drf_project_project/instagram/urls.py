from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('post', views.PostViewSet)
#router.urls


urlpatterns = [
    # path('public/', views.public_post_list, name='public'),
    path('mypost/<int:pk>/', views.PostDetailAPIView.as_view()),
    path('', include(router.urls)),
]
