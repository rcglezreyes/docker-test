from django.urls import path
from django.urls.conf import include

urlpatterns = [
    path('api/products/', include('api_products.urls')),
]