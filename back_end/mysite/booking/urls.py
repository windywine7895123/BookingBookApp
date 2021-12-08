from django.urls import path, include
from rest_framework.routers import DefaultRouter
from booking import views
from django.conf.urls import url

router = DefaultRouter()
router.register(r'books', views.BookViewSet)

urlpatterns = [
    url(r'^book/$',views.bookApi),
    url(r'^book/([0-9]+)$',views.bookApi),
]
