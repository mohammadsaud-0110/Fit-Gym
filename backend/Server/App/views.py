from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
import json
import bcrypt
from django.core import serializers
from .models import CustomUser, Trainer, WorkoutPlan, Exercise, NutritionPlan, Food, Goal, ActivityLog
from .serializers import CustomUserSerializer, TrainerSerializer 
from .serializers import WorkoutPlanSerializer, ExerciseSerializer
from .serializers import NutritionPlanSerializer, FoodSerializer
from .serializers import GoalSerializer, ActivitySerializer
from rest_framework.decorators import api_view


@csrf_exempt
def user_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')

        # Check if a trainer with the same email already exists
        existing_user = CustomUser.objects.filter(email=email).first()

        if existing_user:
            # If a trainer with the same email exists, return an error response
            return JsonResponse({"message": "User with this email already exists"}, status=400)

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
        email = data.get('email')

        # Check if a trainer with the same email already exists
        existing_trainer = Trainer.objects.filter(email=email).first()

        if existing_trainer:
            # If a trainer with the same email exists, return an error response
            return JsonResponse({"message": "Trainer with this email already exists"}, status=400)

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
    serializer = CustomUserSerializer(users, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_trainers(request):
    trainers = Trainer.objects.all()
    serializer = TrainerSerializer(trainers, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
@api_view(['GET'])
def all_workout_plans(request):
    workout_plans = WorkoutPlan.objects.all()
    serializer = WorkoutPlanSerializer(workout_plans, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
@api_view(['GET'])
def all_exercise(request):
    exercise = Exercise.objects.all()
    serializer = ExerciseSerializer(exercise, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
@api_view(['GET'])
def all_nutrition_plans(request):
    nutrition_plans = NutritionPlan.objects.all()
    serializer = NutritionPlanSerializer(nutrition_plans, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
@api_view(['GET'])
def all_food(request):
    food = Food.objects.all()
    serializer = FoodSerializer(food, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def create_workout_plan(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data received from the frontend
            data = json.loads(request.body)

            # Retrieve or create the Trainer instance based on trainerId
            trainer_id = data["trainerId"]
            trainer = Trainer.objects.get(id=trainer_id)

            # Create and save the WorkoutPlan instance
            workout_plan = WorkoutPlan(
                name=data["name"],
                image=data["image"],
                duration=data["duration"],
                description=data["description"],
                trainerId=trainer,
            )
            workout_plan.save()
            # print(f"Newly created WorkoutPlan - ID: {workout_plan.id}, Name: {workout_plan.name}, Image: {workout_plan.image}, Duration: {workout_plan.duration}, Description: {workout_plan.description}")
            # print("#########")

            # Create and save Exercise instances associated with the WorkoutPlan
            for exercise_data in data["excersises"]:
                exercise = Exercise(
                    name=exercise_data["name"],
                    image=exercise_data["image"],
                    sets=exercise_data["sets"],
                    reps=exercise_data["reps"],
                    workoutId=workout_plan,
                )
                exercise.save()
                # print(exercise.id)

            return JsonResponse({"message": "Workout plan created successfully"})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)

@csrf_exempt
def create_nutrition_plan(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data received from the frontend
            data = json.loads(request.body)

            # Retrieve or create the Trainer instance based on trainerId
            trainer_id = data["trainerId"]
            trainer = Trainer.objects.get(id=trainer_id)

            # Create and save the WorkoutPlan instance
            nutrition_plan = NutritionPlan(
                name=data["name"],
                image=data["image"],
                duration=data["duration"],
                guideline=data["guideline"],
                goal=data["goal"],
                trainerId=trainer,
            )
            nutrition_plan.save()
            # print(f"Newly created WorkoutPlan - ID: {workout_plan.id}, Name: {workout_plan.name}, Image: {workout_plan.image}, Duration: {workout_plan.duration}, Description: {workout_plan.description}")
            # print("#########")

            # Create and save Food instances associated with the NutritionPlan
            for food_data in data["foodItems"]:
                food = Food(
                    name=food_data["name"],
                    image=food_data["image"],
                    calories=food_data["calories"],
                    protein=food_data["protein"],
                    carbs=food_data["carbs"],
                    fats=food_data["fats"],
                    description=food_data["description"],
                    nutritionId=nutrition_plan,
                )
                food.save()
                # print(exercise.id)

            return JsonResponse({"message": "Nutrition plan created successfully"})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)

# delete workout plans, exercises, nutrition plans, food
@csrf_exempt
@api_view(['GET'])
def delete_all_data(request):
    WorkoutPlan.objects.all().delete()
    Exercise.objects.all().delete()
    NutritionPlan.objects.all().delete()
    Food.objects.all().delete()
    return JsonResponse({"message":"all data deleted"})


# create new goal
@csrf_exempt
def create_goal(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            # Create and save the Goal instance
            goal_instance = Goal(
                name=data.get('planName'),
                goal=data.get('selectedGoal'),
                duration=data.get('duration'),
                description=data.get('description'),
                completed=False,
                userId_id=data.get('loggedUID')
            )
            goal_instance.save()

            return JsonResponse({ "message": "Goal created successfully" }, status=201)  # Return a JSON response with status code 201 (Created)
        except Exception as e:
            # Handle any exceptions and return an error response
            return JsonResponse({"error": str(e)}, status=400)  # Return an error response with status code 400 (Bad Request)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)  # Return an error response for invalid method

#  update a goal
@csrf_exempt
def update_goal(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        goal_id = data.get('goalId')
        user_id = data.get('userId')

        try:
            goal = Goal.objects.get(id=goal_id, userId_id=user_id)
            goal.completed = True
            goal.save()
            return JsonResponse({"message": "Goal marked as completed"})
        except Goal.DoesNotExist:
            return JsonResponse({"message": "Goal not found"}, status=404)

@csrf_exempt
def all_goal(request):
    allgoal = Goal.objects.all()
    serializer = GoalSerializer(allgoal, many=True)
    return JsonResponse(serializer.data, safe=False)

# users activity log
@csrf_exempt
def log_activity(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        
        logged_uid = data.get('loggedUID')
        user = CustomUser.objects.get(id=logged_uid)

        workout = data.get('workout')
        calories = data.get('calories')
        minutes = data.get('minutes')
        completed = data.get('completed', [])  # Default to an empty list if not provided
        
        # Create and save the ActivityLog instance
        activity_log = ActivityLog(
            userId=user,
            workout=workout,
            calories=calories,
            minutes=minutes,
        )
        
        # Set the completed data using the set_completed method
        activity_log.set_completed(completed)
        
        activity_log.save()
        
        return JsonResponse({"message": "Activity log created successfully"})
    else:
        return JsonResponse({"message": "Invalid request method"}, status=400)


@csrf_exempt
def all_activity(request):
    allactivity = ActivityLog.objects.all()
    serializer = ActivitySerializer(allactivity, many=True)
    return JsonResponse(serializer.data, safe=False)


#  delete all activity and goals
@csrf_exempt
@api_view(['GET'])
def delete_log_activity_data(request):
    Goal.objects.all().delete()
    ActivityLog.objects.all().delete()
    return JsonResponse({"message":"all activity and goals deleted"})

