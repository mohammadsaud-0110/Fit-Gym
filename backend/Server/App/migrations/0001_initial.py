# Generated by Django 4.2.4 on 2023-08-30 21:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('age', models.PositiveIntegerField()),
                ('gender', models.CharField(max_length=10)),
                ('height', models.FloatField()),
                ('weight', models.FloatField()),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('contact_number', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='Trainer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('gender', models.CharField(max_length=10)),
                ('specialization', models.CharField(max_length=255)),
                ('experience', models.PositiveIntegerField()),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('contact_number', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='WorkoutPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plan_name', models.CharField(max_length=255)),
                ('goal', models.CharField(max_length=255)),
                ('duration', models.PositiveIntegerField()),
                ('description', models.TextField()),
                ('trainer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='App.trainer')),
            ],
        ),
        migrations.CreateModel(
            name='NutritionPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plan_name', models.CharField(max_length=255)),
                ('goal', models.CharField(max_length=255)),
                ('duration', models.PositiveIntegerField()),
                ('guidelines', models.TextField()),
                ('trainer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='App.trainer')),
            ],
        ),
    ]
