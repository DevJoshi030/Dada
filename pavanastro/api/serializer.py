from rest_framework import serializers
from .models import Contact, Blog, Subscribe


class ContactSerializer(serializers.ModelSerializer):

    class Meta:

        model = Contact
        fields = ('name', 'email', 'phone', 'message')


class AddBlogSerializer(serializers.ModelSerializer):

    class Meta:

        model = Blog
        fields = ('title', 'image', 'content', 'tag', 'description')


class BlogListSeriazlizer(serializers.ModelSerializer):

    class Meta:

        model = Blog
        fields = ('title', 'image', 'tag', 'description', 'created_at', 'slug')


class BlogDetailSerializer(serializers.ModelSerializer):

    class Meta:

        model = Blog
        fields = ('title', 'image', 'tag', 'description',
                  'created_at', 'slug', 'content')


class PageCountSerializer(serializers.ModelSerializer):

    count = serializers.IntegerField()

    class Meta:

        model = Blog
        fields = ('count')


class SubscribeSerializer(serializers.ModelSerializer):

    email = serializers.EmailField()

    class Meta:

        model = Subscribe
        fields = ('email',)


class CategorySerializer(serializers.ModelSerializer):

    count = serializers.IntegerField()

    class Meta:

        model = Blog
        fields = ('tag', 'count')
