from django.shortcuts import render
from django.views.generic.base import TemplateView
from .models import Post
from django.http import JsonResponse
# Create your views here.

class PostTemplateView(TemplateView):
    template_name = 'posts/main.html'

def post_json(request):
    data = list(Post.objects.values())
    return JsonResponse(data,safe=False)
    