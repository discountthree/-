from django.db import models

# Create your models here.

# 轮播图
class Fade(models.Model):
    img_name = models.CharField(max_length=80)

    class Meta:
        db_table = 'fade_wheel'


# 商品展示
class Title(models.Model):
    t_name = models.CharField(max_length=80)
    t_content = models.CharField(max_length=80)
    t_img = models.CharField(max_length=80)
    # t_categoryname = models.CharField(max_length=40)

    class Meta:
        db_table = 'title'


class Category(models.Model):
    category = models.CharField(max_length=80)

    class Meta:
        db_table = 'category'


class Goods(models.Model):
    img = models.CharField(max_length=100)
    capacity = models.CharField(max_length=20)
    word = models.CharField(max_length=40)
    per_price = models.CharField(max_length=20)
    all_price = models.CharField(max_length=20)
    disoff = models.CharField(max_length=20)
    category = models.IntegerField()
    name = models.CharField(max_length=100)

    class Meta:
        db_table = 'goodslist'






