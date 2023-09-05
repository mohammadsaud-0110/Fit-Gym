# api/urls.py

from django.urls import path
from .views import user_signup, trainer_signup, user_login, get_users, get_trainers
from .views import create_workout_plan, all_workout_plans, all_exercise
from .views import create_nutrition_plan, all_nutrition_plans, all_food

urlpatterns = [
    path('user/signup/', user_signup, name='user-signup'),
    path('trainer/signup/', trainer_signup, name='trainer-signup'),
    path('user/login/', user_login, name='user-login'),
    path('all/users/', get_users, name='get-users'),
    path('all/trainers/', get_trainers, name='get-trainers'),
    path('create/workout/', create_workout_plan, name='create-workout-plans'),
    path('all/workoutplans/', all_workout_plans, name='all-workout-plans'),
    path('all/exercise/', all_exercise, name='all_exercise'),
    path('create/nutrition/', create_nutrition_plan, name='create_nutrition_plan'),
    path('all/nutritionplans/', all_nutrition_plans, name='all_nutrition_plans'),
    path('all/food/', all_food, name='all_food'),
]
