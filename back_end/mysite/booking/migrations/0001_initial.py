# Generated by Django 3.2.9 on 2021-11-25 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('pub_date', models.CharField(max_length=100)),
                ('category', models.CharField(choices=[('FIC', 'fiction'), ('NFC', 'non-fiction')], max_length=100)),
            ],
        ),
    ]
