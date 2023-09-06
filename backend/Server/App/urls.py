# api/urls.py

from django.urls import path
from .views import user_signup, trainer_signup, user_login, get_users, get_trainers
from .views import create_workout_plan, all_workout_plans, all_exercise
from .views import create_nutrition_plan, all_nutrition_plans, all_food
from .views import create_goal, update_goal, all_goal
from .views import all_activity, log_activity
from .views import delete_all_data, delete_log_activity_data

urlpatterns = [
    # user / trainer signup
    path('user/signup/', user_signup, name='user-signup'),
    path('trainer/signup/', trainer_signup, name='trainer-signup'),

    # user + trainer login
    path('user/login/', user_login, name='user-login'),

    path('all/users/', get_users, name='get-users'),
    path('all/trainers/', get_trainers, name='get-trainers'),

    # workout plan
    path('create/workout/', create_workout_plan, name='create-workout-plans'),
    path('all/workoutplans/', all_workout_plans, name='all-workout-plans'),
    path('all/exercise/', all_exercise, name='all_exercise'),

    # nutrition plan
    path('create/nutrition/', create_nutrition_plan, name='create_nutrition_plan'),
    path('all/nutritionplans/', all_nutrition_plans, name='all_nutrition_plans'),
    path('all/food/', all_food, name='all_food'),

    # delete all data : workout plan + nutrition plan
    path('delete/data/', delete_all_data, name='delete_data'),

    # goal
    path('goal/create/', create_goal, name='create_goal'),
    path('goal/update/', update_goal, name='update_goal'),
    path('all/goal/', all_goal, name='all_goal'),

    # activity
    path('all/activity/', all_activity, name='all_activity'),
    path('activity/create/', log_activity, name='log_activity'),

    # delete all data : goal + activity
    path('delete/loggoal/', delete_log_activity_data, name='delete_log_activity_data'),
]
