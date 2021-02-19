from django.urls import path

from .views.common_views import ContactView, SubscribeView,\
    GetSubscribe

from .views.blog_views import BlogCategoryList, BlogDetailView, AddBlog, \
    BlogList,\
    BlogTwoList, GetCategory, PageCount

from .views.comment_views import AddComment, GetComments


urlpatterns = [
    path('add-contact/', ContactView.as_view(), name="add-contact"),
    path('add-blog/', AddBlog.as_view(), name="add-blog"),
    path('bloglist/<int:page>/', BlogList.as_view(), name="bloglist"),
    path('pagecount/<str:category>/', PageCount.as_view(), name="pagecount"),
    path('blog-two-list/', BlogTwoList.as_view(), name="blog-two-list"),
    path('subscribe/', SubscribeView.as_view(), name="subscribe"),
    path('get-subscribe/', GetSubscribe.as_view(), name="get-subscribe"),
    path('get-blog/<str:slug>/', BlogDetailView.as_view(), name="get-blog"),
    path('get-categories/', GetCategory.as_view(), name="get-categories"),
    path('blog-list-category/<str:category>/<int:page>/',
         BlogCategoryList.as_view(), name="blog-list-category"),
    path('add-comment/', AddComment.as_view(), name="add-comment"),
    path('get-comments/<str:slug>/',
         GetComments.as_view(), name="get-comments"),
]
