from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from kaola.models import Title, Fade, Category, Goods


def index(request):

    wheels = Fade.objects.all()
    titles = Title.objects.all()
    categorys = Category.objects.all()[0:5]
    # goods = Goods.objects.all()
    goods1 = Goods.objects.filter(category=1)
    goods2 = Goods.objects.filter(category=2)
    goods3 = Goods.objects.filter(category=3)
    goods4 = Goods.objects.filter(category=4)
    goods5 = Goods.objects.filter(category=5)
    goods = [goods2,goods3,goods4,goods5]
    # for i in [1,2,3,4,5]:
    # category = Goods.objects.filter('category')
    #     goods = Goods.objects.filter(category=i)


    data = {
        'wheels': wheels,
        'titles': titles,
        'categorys': categorys,
        'goods': goods,
        'goods1': goods1,
    }

    return render(request,'index/index.html',context=data)


def goodsdisplay(request):

    category = Goods.objects.all().get('category')
    goods = Goods.objects.filter(category=category)

    return


def login(request):
    return render(request,'index/kaolaLogin.html')


def register(request):
    return render(request,'index/kaolaRegister.html')