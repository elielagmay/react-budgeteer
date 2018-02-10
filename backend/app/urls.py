from django.contrib import admin
from django.urls import path, re_path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', views.graphql, name='graphql'),
    path('health-check/', views.health_check, name='health-check'),
    re_path('', views.index, name='index'),
]
