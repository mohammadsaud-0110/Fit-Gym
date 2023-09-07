const nutritionData=[
  {
    "name": "Full Body Workout",
    "image": "https://www.ironmanmagazine.com/wp-content/uploads/01workout-1000x600.png",
    "goal": "Weight Loss", // Replace with the actual goal for this plan
    "duration": 12, // Replace with the actual duration in weeks
    "guideline": "Follow this nutrition plan for the best results.", // Replace with actual guidelines
    "trainerId": "1", // Replace with the actual trainer ID from async storage
    "workoutPlanId": "456", // Replace with the actual workout plan ID from async storage
    "foodItems": [
      {
        "name": "Grilled Chicken Breast",
        "image": "https://www.thecookierookie.com/wp-content/uploads/2023/06/Garlic-Herb-Grilled-Chicken-1-edited.jpg",
        "calories": 165,
        "protein": 31,
        "carbs": 0,
        "fats": 3.6,
        "description": "Lean protein source that aids in muscle repair and growth, without excess fat or carbs."
      },
      {
        "name": "Quinoa",
        "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2015/12/quinoa-upma-recipe-1a.jpg",
        "calories": 222,
        "protein": 8,
        "carbs": 39,
        "fats": 3.6,
        "description": "Complex carbohydrates provide sustained energy for workouts and essential amino acids for recovery."
      },
      {
        "name": "Salmon",
        "image": "https://www.onceuponachef.com/images/2018/02/pan-seared-salmon-.jpg",
        "calories": 206,
        "protein": 22,
        "carbs": 0,
        "fats": 13,
        "description": "Rich in omega-3 fatty acids, supports joint health and reduces inflammation."
      },
      {
        "name": "Greek Yogurt",
        "image": "https://www.liveeatlearn.com/wp-content/uploads/2015/11/how-to-make-greek-yogurt-social.jpg",
        "calories": 130,
        "protein": 13,
        "carbs": 9,
        "fats": 6,
        "description": "Probiotics aid digestion and protein content supports muscle repair and growth."
      },
      {
        "name": "Mixed Nuts",
        "image": "https://satvikk.com/wp-content/uploads/2022/08/mixedbuts.jpg",
        "calories": 173,
        "protein": 5,
        "carbs": 6,
        "fats": 16,
        "description": "Healthy fats and protein provide energy and support overall health."
      }
    ]
  },
  {
    "name": "Arm Beginner Workout",
    "image": "https://musclemaker.com.au/wp-content/uploads/2020/03/training-arms-for-the-strength-athlete-header-830x467-1.jpg",
    "goal": "Muscle Gain", 
    "duration": 8, 
    "guideline": "Follow this nutrition plan for better arm muscle development.", 
    "trainerId": "1", 
    "workoutPlanId": "101", 
    "foodItems": [
      {
        "name": "Eggs",
        "image": "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
        "calories": 72,
        "protein": 6,
        "carbs": 0.6,
        "fats": 4.8,
        "description": "High-quality protein for muscle recovery and growth."
      },
      {
        "name": "Sweet Potatoes",
        "image": "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/sweet-potatoes_ssbonnietaylorbarry.jpg?itok=PieGnZiT",
        "calories": 112,
        "protein": 2,
        "carbs": 26,
        "fats": 0.2,
        "description": "Complex carbs for sustained energy and muscle repair."
      },
      {
        "name": "Cottage Cheese",
        "image": "https://www.greendna.in/cdn/shop/products/cotc_784aacce-023e-4c61-b4a0-847e3849ad11_600x.jpg?v=1626803359",
        "calories": 206,
        "protein": 28,
        "carbs": 6,
        "fats": 8,
        "description": "Slow-digesting protein supports muscle building and recovery."
      },
      {
        "name": "Oatmeal",
        "image": "https://hips.hearstapps.com/hmg-prod/images/porridge-with-berries-in-a-bowl-royalty-free-image-1651086873.jpg?crop=0.668xw:1.00xh;0.226xw,0&resize=1200:*",
        "calories": 150,
        "protein": 5,
        "carbs": 27,
        "fats": 2.5,
        "description": "Provides energy and fiber for sustained workouts."
      },
      {
        "name": "Turkey Breast",
        "image": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/10/0/Thanksgiving-2011_BX0105-roasted-herb-turkey_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1384540887960.jpeg",
        "calories": 135,
        "protein": 30,
        "carbs": 0,
        "fats": 1,
        "description": "Lean protein source to aid in arm muscle development."
      }
    ]
  },
  {
    "name": "Abs Beginner Workout",
    "image": "https://leanbodyuk.com/wp-content/uploads/2021/02/Six-%E2%80%93-Pack-Abs-The-Beginners-Guide.jpg",
    "goal": "Balanced Diet", 
    "duration": 10, 
    "guideline": "Follow this nutrition plan for better abs.", 
    "trainerId": "1", 
    "workoutPlanId": "789", 
    "foodItems": [
      {
        "name": "Avocado",
        "image": "https://m.media-amazon.com/images/I/71cs5TNn-LL.AC_UF1000,1000_QL80.jpg",
        "calories": 234,
        "protein": 2.9,
        "carbs": 12,
        "fats": 21,
        "description": "Healthy fats and fiber support overall health and provide energy."
      },
      {
        "name": "Berries (e.g., Blueberries, Strawberries)",
        "image": "https://assets.bonappetit.com/photos/60e75527d5b7346ea0217cf5/16:9/w_2560%2Cc_limit/Basically-Berries.jpg",
        "calories": 50,
        "protein": 1,
        "carbs": 12,
        "fats": 0.4,
        "description": "Antioxidants support recovery and overall health."
      },
      {
        "name": "Spinach",
        "image": "https://freshji.in/wp-content/uploads/2020/09/Spinach-1.jpg",
        "calories": 7,
        "protein": 0.9,
        "carbs": 1.1,
        "fats": 0.1,
        "description": "Rich in nutrients and low in calories to support a lean physique."
      },
      {
        "name": "Chia Seeds",
        "image": "https://www.sharmispassions.com/wp-content/uploads/2018/08/Howtobloomchiaseeds4-475x270.jpg",
        "calories": 58,
        "protein": 2,
        "carbs": 6,
        "fats": 4,
        "description": "High in omega-3 fatty acids and fiber for sustained energy."
      },
      {
        "name": "Lean Beef",
        "image": "https://bbqchamps.com/wp-content/uploads/2021/08/lean-beef-options-Tenderloin-Roast.png",
        "calories": 184,
        "protein": 22,
        "carbs": 0,
        "fats": 11,
        "description": "Protein and iron support muscle growth and overall health."
      }
    ]
  },
  {
    "name": "Chest Beginner Workout",
    "image": "https://www.healthkart.com/connect/wp-content/uploads/2016/03/banner-7.jpg",
    "goal": "Muscle Gain", 
    "duration": 10, 
    "guideline": "Follow this nutrition plan for better chest muscle development.", 
    "trainerId": "1", 
    "workoutPlanId": "234", 
    "foodItems": [
      {
        "name": "Brown Rice",
        "image": "https://www.marthastewart.com/thmb/R5e-wnZBjNbvQiYmd1CtBQTFcVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/924877_master-recipe-brown-rice-05-13126d75658249b48e7c9ac32d180ab2.jpg",
        "calories": 215,
        "protein": 5,
        "carbs": 45,
        "fats": 1.8,
        "description": "Complex carbs provide energy for workouts and recovery."
      },
      {
        "name": "Almonds",
        "image": "https://i0.wp.com/post.healthline.com/wp-content/uploads/2023/02/Almonds-Table-Bowl-1296x728-Header.jpg?w=1155&h=1528",
        "calories": 164,
        "protein": 6,
        "carbs": 6,
        "fats": 14,
        "description": "Healthy fats and protein for energy and muscle support."
      },
      {
        "name": "Chicken Thighs",
        "image": "https://natashaskitchen.com/wp-content/uploads/2023/05/20230302-0M8A0646-scaled.jpg",
        "calories": 209,
        "protein": 26,
        "carbs": 0,
        "fats": 11,
        "description": "Protein source for muscle building and maintenance."
      },
      {
        "name": "Broccoli",
        "image": "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg",
        "calories": 55,
        "protein": 3.7,
        "carbs": 11,
        "fats": 0.6,
        "description": "Rich in nutrients to support recovery and overall health."
      },
      {
        "name": "Cauliflower",
        "image": "https://m.media-amazon.com/images/I/91EdPVzD99L.AC_UF1000,1000_QL80.jpg",
        "calories": 25,
        "protein": 2,
        "carbs": 5,
        "fats": 0.3,
        "description": "Low-calorie option with essential nutrients for recovery."
      }
    ]
  }
]

  export default nutritionData
  