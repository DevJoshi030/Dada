from django.urls import path

from .views import index

urlpatterns = [
    path('', index, name='home'),
    path('contact/', index, name='contact'),
    path('about/', index, name='about'),
    path('services/', index, name='services'),
    path('portfolio/', index, name='portfolio'),
    # path('portfoliodetail/', index, name='portfoliodetail'),
    path('blogs/<int:page>/', index, name='blogs'),
    path('blog/<str:slug>/', index, name="blog-detail"),
    path('blogs/<str:category>/<int:page>/', index, name="blog-category-list"),

]
