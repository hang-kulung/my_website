from django.urls import path
from .views import ContactListCreate, ContactDetail, contact_view

urlpatterns = [
    path('', contact_view, name='contact'),
    # path('', ContactListCreate.as_view(), name='contact-list-create'),
    path('<int:pk>/', ContactDetail.as_view(), name='contact-detail'),
]
