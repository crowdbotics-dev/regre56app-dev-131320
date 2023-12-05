from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import supremarketViewSet

router = DefaultRouter()
router.register("supremarket", supremarketViewSet, basename="supremarket")

urlpatterns = [
    path("connectors/", include(router.urls)),
]
