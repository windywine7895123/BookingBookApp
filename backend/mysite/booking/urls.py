from django.urls import path, include
from rest_framework import routers, urlpatterns
from rest_framework.routers import DefaultRouter
from booking import views
from django.conf.urls import url

router = DefaultRouter()
router.register(r'booking', views.BookViewSet)


urlpatterns = [
    path('', include(router.urls)),
    url(r'^book/$',views.bookApi),
    url(r'^book/([0-9]+)$',views.bookApi),
]