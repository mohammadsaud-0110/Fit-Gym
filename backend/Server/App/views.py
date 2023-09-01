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
        try:
            trainer = CustomUser.objects.get(email=data.get('email'))
            if bcrypt.checkpw(data.get('password').encode('utf-8'), trainer.password.encode('utf-8')):
                return JsonResponse({"message": "User logged in"})
            else:
                return JsonResponse({"message": "Wrong Password"}, status=401)
        except CustomUser.DoesNotExist:
            return JsonResponse({"message": "User not found"}, status=401)

@csrf_exempt
def trainer_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        try:
            trainer = Trainer.objects.get(email=data.get('email'))
            if bcrypt.checkpw(data.get('password').encode('utf-8'), trainer.password.encode('utf-8')):
                return JsonResponse({"message": "Trainer logged in"})
            else:
                return JsonResponse({"message": "Wrong Password"}, status=401)
        except Trainer.DoesNotExist:
            return JsonResponse({"message": "Trainer not found"}, status=401)
        

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