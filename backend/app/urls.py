from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', views.graphql, name='graphql'),
    path('health-check/', views.health_check, name='health-check'),
    path('', views.index, name='index'),
    path('budgets', views.index),
    path('transactions', views.index),
    path('reports', views.index),
    path('account/<int:id>', views.index),
]
