# api/urls.py

from django.urls import path
from .views import user_signup, trainer_signup, user_login, get_users, get_trainers
from .views import logout_view
from .views import get_workout_plans, create_workout_plan

urlpatterns = [
    path('user/signup/', user_signup, name='user-signup'),
    path('trainer/signup/', trainer_signup, name='trainer-signup'),
    path('user/login/', user_login, name='user-login'),
    path('users/', get_users, name='get-users'),
    path('trainers/', get_trainers, name='get-trainers'),
    path('logout/', logout_view, name='logout'),
    path('workout-plans/', get_workout_plans, name='get-workout-plans'),
    # path('nutrition-plans/', get_nutrition_plans, name='get-nutrition-plans'),
    path('create/workout/', create_workout_plan, name='create-workout-plans'),
]
