window.onload = function() {
    const mainTitle = document.getElementById("mainTitle");
    const subtitle = document.getElementById("subtitle");

    // Set the main title and subtitle text
    mainTitle.textContent = "Chef's Companion: AI Recipe Assistant";

    const R_EATING = "I don't like eating anything because I'm a bot obviously!";
    const R_ADVICE = "If I were you, I would go to the internet and type exactly what you wrote there!";
    
    // [Keep all your RECIPES and R_RECIPES arrays here...]
    const R_RECIPES = [
        "Here’s a simple recipe for spaghetti: Boil some water, cook spaghetti noodles for 8-10 minutes, and then mix with tomato sauce or your favorite toppings!",
        "How about a classic pancake recipe? Mix 1 cup flour, 1 egg, 1 cup milk, and 2 tbsp sugar, then cook on a pan until golden brown.",
        "Try a simple smoothie: Blend 1 banana, 1/2 cup yogurt, 1/2 cup milk, and ice. Enjoy!",
        "For a quick salad, chop some lettuce, cucumber, and tomatoes. Add olive oil, lemon, salt, and pepper for a light dressing!",
        "Make a delicious omelet: Whisk 2 eggs, salt, and pepper, and cook in a pan with butter. Add cheese, veggies, or ham as toppings!",
        "Prepare a healthy avocado toast: Mash 1 ripe avocado on a toasted slice of bread. Top with salt, pepper, and chili flakes.",
        "A quick grilled cheese sandwich: Butter two slices of bread, place cheese between, and grill on a pan until golden brown.",
        "For a refreshing fruit salad: Chop your favorite fruits like apples, bananas, and berries. Mix them and top with a drizzle of honey.",
        "How about a chicken stir-fry? Sauté chopped chicken, bell peppers, and onions in a pan. Add soy sauce and serve with rice!",
        "Make a classic BLT sandwich: Layer bacon, lettuce, and tomato between two slices of bread, and spread mayo for extra flavor."
    ];

    // Define specific recipes
    const RECIPES = {
        "spaghetti": "Make a delicious spaghetti carbonara: Cook pasta, and mix with cooked bacon, egg yolks, and grated parmesan cheese.",
        "salad": "Try a quick salad: Chop some lettuce, cucumber, and tomatoes. Add olive oil, lemon, salt, and pepper for a light dressing!",
        "pizza": "To make a simple pizza: Spread tomato sauce on a pizza base, add cheese and your favorite toppings, then bake in the oven at 200°C for 10-12 minutes.",
        "omelet": "Make a delicious omelet: Whisk 2 eggs, salt, and pepper, and cook in a pan with butter. Add cheese, veggies, or ham as toppings!",
        "smoothie": "Try a simple smoothie: Blend 1 banana, 1/2 cup yogurt, 1/2 cup milk, and ice. Enjoy!",
        "chicken stir-fry": "How about a chicken stir-fry? Sauté chopped chicken, bell peppers, and onions in a pan. Add soy sauce and serve with rice!",
        "avocado toast": "Prepare a healthy avocado toast: Mash 1 ripe avocado on a toasted slice of bread. Top with salt, pepper, and chili flakes.",
        "pancakes": "Make fluffy pancakes: Whisk 1 cup flour, 1 egg, 1 cup milk, and 2 tbsp sugar. Cook on a hot griddle until golden brown.",
        "lasagna": "Try a hearty lasagna: Layer cooked pasta sheets with ricotta cheese, marinara sauce, and mozzarella. Bake at 180°C for 45 minutes.",
        "burger": "Make a classic burger: Grill or pan-fry a beef patty, then assemble it in a bun with lettuce, tomato, cheese, and your favorite condiments.",
        "tacos": "Make quick tacos: Fill soft tortillas with seasoned ground beef or chicken, add lettuce, cheese, salsa, and sour cream.",
        "pasta salad": "Prepare a refreshing pasta salad: Cook pasta, then mix with diced veggies, olives, cheese, and a vinaigrette dressing.",
        "fish and chips": "Make crispy fish and chips: Coat fish fillets in batter and fry until golden. Serve with crispy fried potato wedges.",
        "chocolate cake": "Make a simple chocolate cake: Mix 1 cup flour, 1 cup sugar, 1/2 cup cocoa powder, 2 eggs, and 1 cup milk. Bake at 180°C for 30 minutes.",
        "rice pudding": "Enjoy creamy rice pudding: Cook rice with milk, sugar, and cinnamon until soft and creamy. Top with raisins.",
        "sushi": "Make sushi rolls: Spread cooked rice on a nori sheet, add your favorite fillings like fish or vegetables, then roll and slice.",
        "fried rice": "Prepare fried rice: Stir-fry cooked rice with vegetables, eggs, and soy sauce in a hot pan.",
        "chicken curry": "Make a spicy chicken curry: Cook chicken pieces in a mix of curry spices, coconut milk, and tomatoes. Serve with rice.",
        "muffins": "Bake delicious muffins: Mix 1 1/2 cups flour, 1/2 cup sugar, 1/2 cup milk, and 1/4 cup melted butter. Bake at 180°C for 20 minutes.",
        "crepes": "Make thin, delicate crepes: Mix 1 cup flour, 2 eggs, 1/2 cup milk, and cook in a hot non-stick pan. Fill with fruit, chocolate, or jam.",
        "vegetable stir-fry": "Make a veggie stir-fry: Sauté vegetables like broccoli, carrots, and bell peppers in a wok with soy sauce and garlic.",
        "guacamole": "Prepare a tasty guacamole: Mash 2 ripe avocados, then add lime juice, cilantro, tomato, and salt. Serve with tortilla chips.",
        "pasta bolognese": "Make pasta bolognese: Cook ground beef with onions, garlic, and tomato sauce. Serve with your favorite pasta.",
        "meatballs": "Prepare meatballs: Mix ground beef with breadcrumbs, egg, and seasoning. Roll into balls and fry until golden brown.",
        "quiche": "Make a savory quiche: Fill a pie crust with a mixture of eggs, cream, cheese, and vegetables or meat. Bake at 180°C for 30-40 minutes.",
        "chicken nuggets": "Make crispy chicken nuggets: Coat chicken pieces in breadcrumbs and fry or bake until golden.",
        "grilled cheese": "Make a grilled cheese sandwich: Butter two slices of bread, add cheese, and cook on a skillet until golden brown on both sides.",
        "cheese fondue": "Make a cheesy fondue: Melt a mixture of Gruyère and Emmental cheese with white wine. Serve with bread cubes for dipping.",
        "egg salad": "Prepare an egg salad: Boil eggs, chop them up, and mix with mayo, mustard, salt, and pepper.",
        "caesar salad": "Make a classic Caesar salad: Toss romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
        "shakshuka": "Make shakshuka: Cook eggs in a spicy tomato sauce with onions, peppers, and spices.",
        "chocolate chip cookies": "Make delicious chocolate chip cookies: Mix flour, butter, sugar, and chocolate chips, and bake at 180°C for 10-12 minutes.",
        "samosas": "Make crispy samosas: Fill pastry with spiced potatoes, peas, and meat, then fry until golden.",
        "apple pie": "Make a classic apple pie: Fill a pie crust with spiced apples and bake at 180°C for 45-50 minutes.",
        "pita bread": "Make homemade pita bread: Mix flour, water, yeast, and salt. Let the dough rise, then bake at a high temperature until puffed.",
        "hummus": "Prepare creamy hummus: Blend chickpeas, tahini, garlic, lemon juice, and olive oil until smooth.",
        "banana bread": "Make banana bread: Mix ripe bananas with flour, sugar, eggs, and baking powder. Bake at 170°C for 50-60 minutes.",
        "chicken fajitas": "Make chicken fajitas: Cook chicken with bell peppers and onions, then serve in tortillas with salsa and sour cream.",
        "potato wedges": "Make crispy potato wedges: Cut potatoes into wedges, season with olive oil and spices, then bake at 200°C for 25-30 minutes.",
        "tomato soup": "Make a comforting tomato soup: Cook tomatoes with onions and garlic, blend, and serve with a grilled cheese sandwich.",
        "bruschetta": "Prepare bruschetta: Toast slices of bread, then top with a mix of diced tomatoes, basil, garlic, and olive oil.",
        "vegetarian chili": "Make a vegetarian chili: Cook beans, tomatoes, and spices, then simmer until thick and flavorful."
    };

    function unknown() {
        return "Sorry, I didn't quite understand that. Can you try asking for a recipe or greeting me?";
    }

    function get_recipe(query) {
            // Convert query to lowercase to handle case-insensitivity
            const lowerCaseQuery = query.toLowerCase();
        
            // Check for friendly greetings
            const greetings = ["hey", "hello", "hi", "howdy", "hey there", "hi there"];
            if (greetings.some(greeting => lowerCaseQuery.includes(greeting))) {
                return "Hey there! I'm here to chat and share some great recipes!";
            }
        
            // Check for specific recipe names in the query
            for (const recipe in RECIPES) {
                if (lowerCaseQuery.includes(recipe)) {
                    return RECIPES[recipe]; // Return the specific recipe with detailed instructions
                }
            }
        
            // If no specific recipe is found, check for general recipe-related keywords
            const recipe_keywords = [
                "recipe", "cook", "food", "meal", "how to make", "what to cook", "suggest", 
                "eat", "eat something", "new recipe", "unique recipe", "another recipe", 
                "ideas for dinner", "what's for dinner", "what to eat", "cooking instructions", 
                "meal ideas", "help me cook", "make something", "give me a recipe", 
                "recommend a recipe", "something to cook", "how to prepare", "cooking tips", 
                "food suggestions", "recipe suggestion"
            ];
        
            if (recipe_keywords.some(keyword => lowerCaseQuery.includes(keyword))) {
                return "Here's a random recipe suggestion: " + Object.values(RECIPES)[Math.floor(Math.random() * Object.values(RECIPES).length)];
            } else {
                return "Sorry, I couldn't find a recipe for that. Please try something else!"; // Return unknown response if not recipe-related
            }
        }

    function handle_greetings(message) {
        // [Keep your existing handle_greetings function implementation...]
        const greetings_keywords = ['hello', 'hi', 'hey', 'hi there', 'howdy', 'greetings', 'what\'s up'];
        const greeting_responses = [
            'Hey! I\'m here to help you! Ask me for some recipes or anything you need!',
            'Hi! How can I assist you today?',
            'Hey there! I\'m here to chat and share some great recipes!'
        ];
    }

    function message_probability(user_message, recognised_words, single_response = false, required_words = []) {
        // [Keep your existing message_probability function implementation...]
        let message_certainty = 0;
        let has_required_words = true;

        // Ensure that the user message is broken into words
        const words_in_message = user_message.split(" ").map(word => word.toLowerCase());

        // Counts how many words are present in each predefined message
        for (let word of words_in_message) {
            if (recognised_words.includes(word)) {
                message_certainty++;
            }
        }

        // Calculates the percent of recognised words in a user message
        const percentage = message_certainty / recognised_words.length;

        // Checks that the required words are in the string
        for (let word of required_words) {
            if (!user_message.toLowerCase().includes(word)) {
                has_required_words = false;
                break;
            }
        }

        return (has_required_words || single_response) ? Math.round(percentage * 100) : 0;
    }

    function check_all_messages(message) {
        // [Keep your existing check_all_messages function implementation...]
        let highest_prob_list = {};

        // Check for recipes and return a recipe if the message contains recipe-related keywords
        const recipe_response = get_recipe(message);
        if (recipe_response !== unknown()) {
            return recipe_response;
        }

        // Check for greetings and return a greeting if the message contains greeting-related keywords
        const greeting_response = handle_greetings(message);
        if (greeting_response !== unknown()) {
            return greeting_response;
        }

        // Default response if no recipe or greeting is found
        return unknown();
    }

    // Function to add a message to the chat
    function addMessage(text, sender) {
        const chat = document.getElementById("chat");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender + "Message");
        
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `<p>${text}</p><span class="message-time">${timeString}</span>`;
        chat.appendChild(messageDiv);
        
        // Scroll to the bottom of the chat
        chat.scrollTop = chat.scrollHeight;
    }

    // Function to handle sending messages
    function sendMessage() {
        const userInput = document.getElementById("userInput");
        const message = userInput.value.trim();
        
        if (message) {
            // Add user message to chat
            addMessage(message, 'user');
            
            // Clear input field
            userInput.value = '';
            
            // Show typing indicator
            const chat = document.getElementById("chat");
            const typingDiv = document.createElement("div");
            typingDiv.classList.add("message", "botMessage");
            typingDiv.innerHTML = '<div class="typing"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>';
            chat.appendChild(typingDiv);
            chat.scrollTop = chat.scrollHeight;
            
            // Simulate bot thinking and respond
            setTimeout(() => {
                // Remove typing indicator
                chat.removeChild(typingDiv);
                
                // Get bot response
                const botResponse = check_all_messages(message);
                addMessage(botResponse, 'bot');
            }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
        }
    }

    // Event listener for Enter key
    document.getElementById("userInput").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission
            sendMessage();
        }
    });

    // Event listener for send button
    document.querySelector("#chatbotContainer button").addEventListener("click", sendMessage);

    // Enable/disable send button based on input
    document.getElementById("userInput").addEventListener("input", function() {
        const sendButton = document.querySelector("#chatbotContainer button");
        sendButton.disabled = this.value.trim() === '';
    });
};
