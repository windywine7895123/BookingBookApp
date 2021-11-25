from django.urls import path, include
from rest_framework.routers import DefaultRouter
from booking import views

router = DefaultRouter()
router.register(r'books', views.BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
