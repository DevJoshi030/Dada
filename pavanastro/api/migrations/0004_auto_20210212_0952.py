# Generated by Django 3.1.6 on 2021-02-12 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210212_0920'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.CharField(max_length=2000),
        ),
    ]
