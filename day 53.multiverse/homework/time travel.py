def time_travel():
   
    current_age = int(input("Enter your current age: "))
    current_year = int(input("Enter the current year: "))
    
     
    travel_years = int(input("How many years do you want to time travel? "))
    
    
    direction = input("Do you want to travel to the 'past' or 'future'? ").strip().lower()
    
    
    if direction == 'future':
        new_year = current_year + travel_years
        new_age = current_age + travel_years
    elif direction == 'past':
        new_year = current_year - travel_years
        new_age = current_age - travel_years
    else:
        print("Invalid input for direction. Please enter 'past' or 'future'.")
        return

    
    if new_age < 0:
        print(f"You cannot be {abs(new_age)} years old in the year {new_year} because you weren't born yet!")
    else:
        print(f"In the year {new_year}, you will be {new_age} years old.")


time_travel()