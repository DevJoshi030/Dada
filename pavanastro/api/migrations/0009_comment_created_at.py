# Generated by Django 3.1.6 on 2021-02-18 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_comment_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='created_at',
            field=models.DateField(auto_now=True),
        ),
    ]