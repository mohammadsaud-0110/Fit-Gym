from django.db import models

class CustomUser(models.Model):
    name = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    height = models.FloatField()
    weight = models.FloatField()
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=20)
    password = models.CharField(max_length=128)

class Trainer(models.Model):
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    specialization = models.CharField(max_length=255)
    experience = models.PositiveIntegerField()
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=20)
    password = models.CharField(max_length=128)

class WorkoutPlan(models.Model):
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    plan_name = models.CharField(max_length=255)
    goal = models.CharField(max_length=255)
    duration = models.PositiveIntegerField()
    description = models.TextField()

class NutritionPlan(models.Model):
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    plan_name = models.CharField(max_length=255)
    goal = models.CharField(max_length=255)
    duration = models.PositiveIntegerField()
    guidelines = models.TextField()
