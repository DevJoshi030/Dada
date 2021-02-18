from ..models import Contact, Blog, Subscribe


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..serializer import BlogDetailSerializer, CategorySerializer, \
    ContactSerializer, \
    AddBlogSerializer, BlogListSeriazlizer, PageCountSerializer, \
    SubscribeSerializer

# Create your views here.


class ContactView(APIView):

    serializer_class = ContactSerializer

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)

        if not serializer.is_valid():

            return Response({"Error": "Invalid Data"},
                            status=status.HTTP_400_BAD_REQUEST)

        name = serializer.data.get("name")
        email = serializer.data.get("email")
        phone = serializer.data.get("phone")
        message = serializer.data.get("message")

        new_contact = Contact(name=name, email=email,
                              phone=phone, message=message)

        new_contact.save()

        return Response({"Success": "Contact Added"},
                        status=status.HTTP_200_OK)


class SubscribeView(APIView):

    serializer_class = SubscribeSerializer
    model = Subscribe
    EXPIRY_TIME = 15552000

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)

        if not serializer.is_valid():
            return Response({'Error': 'Invalid Data'},
                            status=status.HTTP_400_BAD_REQUEST)

        email = serializer.data.get('email')

        queryset = Subscribe.objects.filter(email=email)

        if queryset.exists():

            if not self.request.session.exists(
                    self.request.session.session_key):
                self.request.session.create()

            self.request.session.set_expiry(self.EXPIRY_TIME)

            return Response({"Success Already": "Subscriber Already Added"},
                            status=status.HTTP_202_ACCEPTED)

        new_subscribe = Subscribe(email=email)

        new_subscribe.save()

        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        self.request.session.set_expiry(self.EXPIRY_TIME)

        return Response({"Success": "Subscriber Added"},
                        status=status.HTTP_200_OK)


class GetSubscribe(APIView):
    serializer_class = SubscribeSerializer
    model = Subscribe

    def get(self, request, format=None):

        if not self.request.session.exists(self.request.session.session_key):
            return Response({'Error': 'Not Subscribed'},
                            status=status.HTTP_400_BAD_REQUEST)

        return Response({"Success": "Subscribed Already"},
                        status=status.HTTP_200_OK)
