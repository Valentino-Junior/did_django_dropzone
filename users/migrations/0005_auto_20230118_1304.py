# Generated by Django 3.1.7 on 2023-01-18 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_remove_comment_comment'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userimage',
            name='image',
        ),
        migrations.AddField(
            model_name='comment',
            name='image',
            field=models.FileField(default=1, upload_to='user_images', verbose_name='User image'),
            preserve_default=False,
        ),
    ]
