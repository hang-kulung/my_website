from django.urls import path
from .views import ProjectListCreate, ProjectDetail

urlpatterns = [
    path('', ProjectListCreate.as_view(), name='project-list-create'),
    path('<int:pk>/', ProjectDetail.as_view(), name='project-detail'),
]
