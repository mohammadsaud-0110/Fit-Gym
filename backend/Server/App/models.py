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
    trainerId = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    image = models.TextField(default='')
    duration = models.PositiveIntegerField()
    description = models.TextField(default='')

class Exercise(models.Model):
    name = models.CharField(max_length=255)
    image = models.TextField(default='')
    sets = models.PositiveIntegerField()
    reps = models.PositiveIntegerField()
    workoutId = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE)

class NutritionPlan(models.Model):
    trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    plan_name = models.CharField(max_length=255)
    goal = models.CharField(max_length=255)
    duration = models.PositiveIntegerField()
    guidelines = models.TextField()


# {
#     'name' : 'workout plan name',
#     'image' : 'workout plan image url',
#     'duration' : 'number of weeks',
#     'description' : 'text',
#     'trainerId' : 'from async storage',
#     'exercise' : [
#         {
#             'name' : 'exercise 1 name',
#             'image' : 'exercise 1 image url / gif url',
#             'sets': 'number',
#             'reps' : 'number'
#         },
#         {
#             'name' : 'exercise 2 name',
#             'image' : 'exercise 2 image url / gif url',
#             'sets': 'number',
#             'reps' : 'number'
#         },
#         {
#             'name' : 'exercise 3 name',
#             'image' : 'exercise 3 image url / gif url',
#             'sets': 'number',
#             'reps' : 'number'
#         }
#     ]
# }