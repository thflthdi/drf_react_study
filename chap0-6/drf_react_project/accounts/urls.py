
from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView

from . import views
from .forms import LoginForm

urlpatterns = [
    path('login/', LoginView.as_view(template_name='accounts/login_form.html',
                                     form_class=LoginForm), name='login'),
    path('profile/', views.profile, name='profile'),
    path('profile/edit/', views.profile_edit, name='profile_edit'),
    path('signup/', views.signup, name='signup'),
    path('logout', LogoutView.as_view(next_page='login'), name='logout'),
]