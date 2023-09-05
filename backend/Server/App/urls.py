# api/urls.py

from django.urls import path
from .views import user_signup, trainer_signup, user_login, get_users, get_trainers
from .views import all_workout_plans, create_workout_plan, all_exercise

urlpatterns = [
    path('user/signup/', user_signup, name='user-signup'),
    path('trainer/signup/', trainer_signup, name='trainer-signup'),
    path('user/login/', user_login, name='user-login'),
    path('all/users/', get_users, name='get-users'),
    path('all/trainers/', get_trainers, name='get-trainers'),
    path('create/workout/', create_workout_plan, name='create-workout-plans'),
    path('all/workoutplans/', all_workout_plans, name='all-workout-plans'),
    path('all/exercise/', all_exercise, name='all_exercise'),
]
