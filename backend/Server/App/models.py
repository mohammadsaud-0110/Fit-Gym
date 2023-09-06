from django.db import models
import json

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

class NutritionPlan(models.Model):
    class Meta:
        db_table = "nutritionplan_table"

    trainerId = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    image = models.TextField(default='')
    goal = models.CharField(max_length=255)
    duration = models.PositiveIntegerField()
    guideline = models.TextField()

class Food(models.Model):
    class Meta:
        db_table = "food_table"

    name = models.CharField(max_length=255)
    image = models.TextField(default='')
    calories = models.PositiveIntegerField()
    protein = models.FloatField()
    carbs = models.FloatField()
    fats = models.FloatField()
    description = models.TextField(default='')
    nutritionId = models.ForeignKey(NutritionPlan, on_delete=models.CASCADE)

class Goal(models.Model):
    class Meta:
        db_table = "goal_table"

    name = models.CharField(max_length=255)
    goal = models.TextField(default='')
    duration = models.PositiveIntegerField()
    description = models.TextField(default='')
    completed = models.BooleanField(default=False)
    userId = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

class ActivityLog(models.Model):
    class Meta:
        db_table = "activity_table"

    workout = models.PositiveIntegerField()
    calories = models.PositiveIntegerField()
    minutes = models.PositiveIntegerField()
    completed = models.TextField(blank=True, null=True)  # Use TextField for JSON data
    userId = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def set_completed(self, completed_data):
        self.completed = json.dumps(completed_data)

    def get_completed(self):
        if self.completed:
            return json.loads(self.completed)
        return []


# {
#     'name' : 'nutrition plan name',
#     'image' : 'nutrition plan image url',
#     'goal' : 'Drop down : Weight Loss, Muscle Gain, Balanced Diet, etc.',
#     'duration' : 'number of weeks',
#     'guideline' : 'text',
#     'trainerId' : 'from async storage',
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

# goal
# {
#     "name" : "new wrok",
#     "goal" : "mass gain",
#     "duration" : 4,
#     "description" : "eat",
#     "completed" : "True/False",
#     "userId" : 1
# }


# activity
# {
#     "workout" : "Number",
#     "calories" : "Number",
#     "minutes" : "Number",
#     "completed" : "Array of Strings",
#     "userId" : "Number"
# }

# update a goal
# {
#     "goalId" : 1,
#     "userId" : 1
# }

# {
#     "loggedUID" : 2,
#     "workout" : 3,
#     "calories" : 18.9,
#     "minutes" : 7.5,
#     "completed" : ['JUMPING JACKS', 'INCLINE PUSH-UPS', 'INCLINED PUSH-UPS']
# }