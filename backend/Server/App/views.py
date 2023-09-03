from django.shortcuts import render

# Create your views here.
# api/views.py

from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
import json
import bcrypt
from django.core import serializers
from .models import CustomUser, Trainer, WorkoutPlan, NutritionPlan
from .serializers import WorkoutPlanSerializer, NutritionPlanSerializer
from rest_framework.decorators import api_view

@csrf_exempt
def user_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        password = data.get('password')
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        
        user = CustomUser(
            name=data.get('name'),
            age=data.get('age'),
            gender=data.get('gender'),
            height=data.get('height'),
            weight=data.get('weight'),
            email=data.get('email'),
            contact_number=data.get('contact_number'),
            password=hashed_password
        )
        user.save()
        
        return JsonResponse({"message": "User registered successfully"})

@csrf_exempt
def trainer_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        password = data.get('password')
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        trainer = Trainer(
            name=data.get('name'),
            gender=data.get('gender'),
            specialization=data.get('specialization'),
            experience=data.get('experience'),
            email=data.get('email'),
            contact_number=data.get('contact_number'),
            password=hashed_password
        )
        trainer.save()

        return JsonResponse({"message": "Trainer registered successfully"})

@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        try:
            user = CustomUser.objects.get(email=email)
        except CustomUser.DoesNotExist:
            try:
                trainer = Trainer.objects.get(email=email)
            except Trainer.DoesNotExist:
                return JsonResponse({"message": "User not found"}, status=401)

            if bcrypt.checkpw(password.encode('utf-8'), trainer.password.encode('utf-8')):
                trainerData = {
                    'id' : trainer.id,
                    'name' : trainer.name,
                    'email' : trainer.email
                }
                return JsonResponse({"message": "Trainer logged in", 'account': trainerData, "role" : 'trainer'})
            else:
                return JsonResponse({"message": "Wrong Password"}, status=401)

        if bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
            userData = {
                    'id' : user.id,
                    'name' : user.name,
                    'email' : user.email
                }
            return JsonResponse({"message": "User logged in", 'account' : userData, 'role': 'user'})
        else:
            return JsonResponse({"message": "Wrong Password"}, status=401)

    return JsonResponse({"message": "Invalid request method"}, status=405)
        

@csrf_exempt
def get_users(request):
    users = CustomUser.objects.all()
    users_data = serializers.serialize('json', users)
    return JsonResponse(users_data, safe=False)

@csrf_exempt
def get_trainers(request):
    trainers = Trainer.objects.all()
    trainers_data = serializers.serialize('json', trainers)
    return JsonResponse(trainers_data, safe=False)

@csrf_exempt
def logout_view(request):
    logout(request)
    return JsonResponse({"message": "Logged out successfully"})

@api_view(['GET'])
def get_workout_plans(request):
    workout_plans = WorkoutPlan.objects.all()
    serializer = WorkoutPlanSerializer(workout_plans, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def get_nutrition_plans(request):
    nutrition_plans = NutritionPlan.objects.all()
    serializer = NutritionPlanSerializer(nutrition_plans, many=True)
    return JsonResponse(serializer.data, safe=False)