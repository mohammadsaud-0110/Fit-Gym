from django.db import models

class CustomUser(models.Model):
    class Meta:
        db_table = "users_table"

    name = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    height = models.FloatField()
    weight = models.FloatField()
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=20)
    password = models.CharField(max_length=128)

class Trainer(models.Model):
    class Meta:
        db_table = "trainer_table"

    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10)
    specialization = models.CharField(max_length=255)
    experience = models.PositiveIntegerField()
    email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=20)
    password = models.CharField(max_length=128)

class WorkoutPlan(models.Model):
    class Meta:
        db_table = "workoutplan_table"

    trainerId = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    image = models.TextField(default='')
    duration = models.PositiveIntegerField()
    description = models.TextField(default='')

class Exercise(models.Model):
    class Meta:
        db_table = "exercise_table"

    name = models.CharField(max_length=255)
    image = models.TextField(default='')
    sets = models.PositiveIntegerField()
    reps = models.PositiveIntegerField()
    workoutId = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE)

# class NutritionPlan(models.Model):
#     trainer = models.ForeignKey(Trainer, on_delete=models.CASCADE)
#     plan_name = models.CharField(max_length=255)
#     goal = models.CharField(max_length=255)
#     duration = models.PositiveIntegerField()
#     guidelines = models.TextField()


# {
#     'name' : 'nutrition plan name',
#     'image' : 'nutrition plan image url',
#     'goal' : 'Drop down : Weight Loss, Muscle Gain, Balanced Diet, etc.',
#     'duration' : 'number of weeks',
#     'guideline' : 'text',
#     'trainerId' : 'from async storage',
#     'workoutPlanId' : 'from async storage',
#     'foodItems' : [
#         {
#             'name' : 'food 1 name',
#             'image' : 'food 1 image url ',
#             'calories': 'number',
#             'protein' : 'number',
#             'carbs' : 'number',
#             'fats' : 'number',
#            'description': 'text'
#         },
#         {
#             'name' : 'food 2 name',
#             'image' : 'food 2 image url ',
#             'calories': 'number',
#             'protein' : 'number',
#             'carbs' : 'number',
#             'fats' : 'number',
#            'description': 'text'
#         },
#         {
#             'name' : 'food 3 name',
#             'image' : 'food 3 image url ',
#             'calories': 'number',
#             'protein' : 'number',
#             'carbs' : 'number',
#             'fats' : 'number',
#            'description': 'text'
#         },
#     ]
# }