# api/serializers.py

from rest_framework import serializers
from .models import CustomUser, Trainer, Goal, ActivityLog
from .models import WorkoutPlan, Exercise
from .models import NutritionPlan, Food

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'

class WorkoutPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutPlan
        fields = '__all__'

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'

class NutritionPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = NutritionPlan
        fields = '__all__'

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = '__all__'

class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityLog
        fields = '__all__'

