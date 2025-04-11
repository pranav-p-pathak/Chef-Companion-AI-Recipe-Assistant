import random
import re
from collections import defaultdict

class RecipeBot:
    def __init__(self):
        self.setup_responses()
        self.setup_recipes()
        self.conversation_context = defaultdict(str)
        
    def setup_responses(self):
        self.R_EATING = "I don't eat, but I can suggest delicious recipes for you to try!"
        self.R_ADVICE = "Here's my advice: Google is your friend! But seriously, I'd recommend researching online and checking multiple sources."
        self.R_GREETINGS = [
            "Hello! I'm your recipe assistant. What would you like to cook today?",
            "Hi there! Ready to explore some delicious recipes?",
            "Greetings! I'm here to help with all your cooking questions."
        ]
        self.R_GOODBYES = [
            "Goodbye! Happy cooking!",
            "See you later! Don't forget to try one of those recipes!",
            "Bye! Come back if you need more culinary inspiration."
        ]
        self.R_THANKS = [
            "You're very welcome!",
            "My pleasure to help!",
            "No problem! Let me know if you need anything else."
        ]
        self.R_DEFAULT = [
            "I'm not sure I understand. Could you rephrase that?",
            "I'm a recipe bot, so I might not get everything. Try asking about cooking!",
            "Hmm, I'm better with food questions. Want a recipe suggestion?",
            "Could you ask that differently? I specialize in cooking topics.",
            "I didn't quite catch that. Maybe ask me about recipes or cooking techniques?"
        ]
        
    def setup_recipes(self):
        self.recipe_categories = {
            'breakfast': [
                "Classic Pancakes: Mix 1 cup flour, 1 egg, 1 cup milk, and 2 tbsp sugar, then cook on a pan until golden brown.",
                "Avocado Toast: Mash 1 ripe avocado on toasted bread. Top with salt, pepper, and chili flakes.",
                "French Toast: Dip bread slices in an egg-milk mixture, fry in butter, and top with syrup."
            ],
            'lunch': [
                "BLT Sandwich: Layer bacon, lettuce, and tomato between bread slices with mayo.",
                "Chicken Caesar Salad: Toss romaine lettuce with grilled chicken, dressing, and croutons.",
                "Veggie Wrap: Spread hummus on a tortilla, add lettuce, cucumbers, and carrots."
            ],
            'dinner': [
                "Spaghetti Carbonara: Cook pasta, mix with bacon, egg yolks, and parmesan cheese.",
                "Chicken Stir-Fry: Sauté chicken with bell peppers and onions, add soy sauce.",
                "Baked Salmon: Season salmon with lemon and dill, then bake for 15-20 minutes."
            ],
            'dessert': [
                "Chocolate Chip Cookies: Mix butter, sugar, eggs, and chocolate chips, then bake.",
                "Apple Pie: Layer pie crust with spiced apple slices and bake until golden.",
                "Chocolate Mousse: Whip cream and mix with melted chocolate, then chill."
            ],
            'quick': [
                "Scrambled Eggs: Whisk eggs with salt and pepper, cook in butter for 2-3 minutes.",
                "Grilled Cheese: Butter bread, add cheese, and grill until golden brown.",
                "Smoothie: Blend banana, yogurt, milk, and ice for a quick healthy drink."
            ],
            'healthy': [
                "Quinoa Bowl: Cook quinoa and top with sautéed vegetables and lemon vinaigrette.",
                "Baked Sweet Potato: Top with black beans, Greek yogurt, and cilantro.",
                "Kale Salad: Massage kale with olive oil, add dried cranberries and almonds."
            ]
        }
        
        self.recipe_keywords = {
            'breakfast': ['breakfast', 'morning', 'pancake', 'waffle', 'toast'],
            'lunch': ['lunch', 'sandwich', 'salad', 'wrap', 'midday'],
            'dinner': ['dinner', 'evening', 'pasta', 'meat', 'main course'],
            'dessert': ['dessert', 'sweet', 'cake', 'cookie', 'pie'],
            'quick': ['quick', 'fast', 'easy', 'simple', 'minutes'],
            'healthy': ['healthy', 'light', 'low-calorie', 'nutritious', 'diet']
        }
        
    def get_recipe(self, query):
        # Check for specific recipe requests first
        query_lower = query.lower()
        
        # Handle category requests
        for category, keywords in self.recipe_keywords.items():
            if any(keyword in query_lower for keyword in keywords):
                return random.choice(self.recipe_categories[category])
        
        # General recipe request
        recipe_triggers = [
            'recipe', 'cook', 'food', 'meal', 'make', 'prepare', 
            'suggest', 'eat', 'dish', 'cooking', 'what to cook'
        ]
        
        if any(trigger in query_lower for trigger in recipe_triggers):
            # Use context if available
            if 'last_category' in self.conversation_context:
                category = self.conversation_context['last_category']
                return random.choice(self.recipe_categories[category])
            
            # Otherwise pick a random category
            category = random.choice(list(self.recipe_categories.keys()))
            self.conversation_context['last_category'] = category
            return random.choice(self.recipe_categories[category])
            
        return None
    
    def handle_greeting(self):
        return random.choice(self.R_GREETINGS)
    
    def handle_goodbye(self):
        return random.choice(self.R_GOODBYES)
    
    def handle_thanks(self):
        return random.choice(self.R_THANKS)
    
    def handle_advice(self):
        return self.R_ADVICE
    
    def handle_eating(self):
        return self.R_EATING
    
    def handle_default(self):
        # Try to gently guide conversation toward cooking topics
        prompts = [
            "I specialize in recipes. Would you like a cooking suggestion?",
            "I'm best with food questions. Can I suggest a recipe?",
            "Want to hear about a delicious recipe instead?"
        ]
        return random.choice(prompts)
    
    def process_message(self, message):
        # Clean and tokenize the message
        message = re.sub(r'[^\w\s]', '', message.lower())
        words = message.split()
        
        # Check for greetings
        if any(word in words for word in ['hello', 'hi', 'hey', 'greetings']):
            return self.handle_greeting()
            
        # Check for goodbyes
        if any(word in words for word in ['bye', 'goodbye', 'see you', 'later']):
            return self.handle_goodbye()
            
        # Check for thanks
        if any(word in words for word in ['thank', 'thanks', 'appreciate']):
            return self.handle_thanks()
            
        # Check for advice requests
        if 'advice' in words:
            return self.handle_advice()
            
        # Check for eating questions
        if ('you' in words and 'eat' in words) or ('diet' in words):
            return self.handle_eating()
            
        # Check for recipe requests
        recipe_response = self.get_recipe(message)
        if recipe_response:
            return recipe_response
            
        # Fallback to default
        return self.handle_default()

# Main interaction loop
if __name__ == "__main__":
    bot = RecipeBot()
    print("Recipe Bot: Hi! I'm your recipe assistant. Type 'quit' to exit.")
    
    while True:
        user_input = input("You: ").strip()
        
        if user_input.lower() in ['quit', 'exit', 'stop']:
            print("Recipe Bot: Goodbye! Happy cooking!")
            break
            
        if not user_input:
            print("Recipe Bot: I didn't hear anything. Try again?")
            continue
            
        response = bot.process_message(user_input)
        print(f"Recipe Bot: {response}")