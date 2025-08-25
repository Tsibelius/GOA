#დავალება 1

# 0-იდან 20-ის ჩათვლით გამოიტანეთ რიცხვები.

# for chad in range(0,20)
#     print(chad)


#დავალება 2

# მომხმარებელს შემოატანინეთ ორი რიცხვი და მათ შორის არსებულები გამოიტანეთ.

#number_1=int(input ("Enter Your Name :"))
#number_2=int(input("Enter Your number :"))

#for chad in range(number_1,number_2):
#    print(chad)
        


#დავალება 3

# 50-იდან 100-ის ჩათვლით გამოიტანეთ რიცხვები.

#for chad in range(50,101):
#    print(chad)




#დავალება 4

# დაიწყეთ 100-დან და 50-ის ჩათვლით გამოიტანეთ რიცხვები. (ჩათვალეთ დავალება 3-ის საპირისპირო) 

#for chad in range(100,49,-1):
#    print(chad)



#დავალება 5

# 0-იდან 50-ის ჩათვლით გამოიტანეთ რიცხვები და ბოლოს მათი ჯამი.

#number_1=0
#for chad in range(0,51):
#    number_1 += chad



#დავალება 6

# მომხმარებელს შეეკითხეთ რომ შემოიტანოს მთელი რიცხვი. შემდეგ 0-დან ამ რიცხვამდე გამოიტანეთ ყველა მთელი რიცხვი.

#number_1=int(input("Enter Your number :"))

#for chad in range(0,number_1):
#    print(chad)



#დავალება 7

# მომხმარებელს შეეკითხეთ ასაკი. შექმენით ცვლადი, სადაც შენახული იქნება 10 წლის შემდეგ მომხმარებლის ასაკი. საბოლოოდ დაპრინტეთ მომხმარებლის ასაკსა და 10 წლის შემდეგ წლოვანებას შორის არსებული მთელი რიცხვები. 

#number_1=int(input('Enter your age :'))
#number_2 = number_1 + 10
#for chad in range(number_1 , number_2):
#    print(chad) 


#დავალება 8

# შექმენით პროგრამა სადაც მომხმარებელი შემოიტანს 5 რციხვს, ხოლო ამ 5 რიცხვს შორის გამოიყენეთ ყველა არითმეტიკული ოპერაცია (+,-,*,/,%,//), საბოლოოდ დაბეჭდეთ შედეგები ტერმინალში + ახსენით თითოეული ნაწილი კოდის რატომ დაწერეთ კონკრეტული ხაზი და რას აკეთებს.

#number_1=int(input("Enter Your number :"))
#number_2=int(input("Enter Your number :"))
#print(number_1 - number_2)
#print(number_1 % number_2)
#print(number_1 * number_2)
#print(number_1 + number_2)
#print(number_1 // number_2)


#დავალება 9

# შემოატანინეთ მომხარებელს ასაკი და შეამოწმეთ არის თუ არა 18 წელზე მეტის და 20 წელზე ნაკლების მიღებული შედეგი დაპრინტეთ

#number_1 = int(input("Enter Your age :"))
#if number_1 > 18:
#    print("You are welcome")
#else:
#    print("you must be 18+")



#დავალება 10

# ჩამოწერეთ ხუთ-ხუთი მაგალითი ყველა ლოგიკურ ოპერატორზე > ,<, <=, >=, !=, ==

#print(25 > 21) # true
#print(78 <= 45) # true
#print(44 > 43) # false
#print(55 == 55) # true
#print(54 > 22) # true
#print(45 < 72) # true
#print(72 > 10) # true
#print(10 <= 99) # true



#დავალება 11

# მომხმარებელს პირველ ინფუთში მთელი რიცხვი, ხოლო მეორე ინფუთში ათწილადი შემოატანინეთ. საბოლოოდ შეადარეთ ცვლადების მნიშვნელობების მონაცემთა ტიპები

#whole_number = int(input("Enter a whole number: "))

#decimal_number = float(input("Enter a decimal number: "))


#print(f"Data type of 'whole_number': {type(whole_number)}")
#print(f"Data type of 'decimal_number': {type(decimal_number)}")  



#დავალება 12

# შექმენით რამოდენიმე სხვადასხვა ტიპის ცვლადი და დაბეჭდეთ მათი მონაცემთა ტიპები
# მომხმარებელს შემოატანინეთ 1 დან 7-ის ჩათვლით რომელიმე რიცხვი ამის შემდეგ კი გამოიყენეთ if elif else რომ შეუსაბამოდ კვირის დღე 1 ორშაბათისთვის 2 სამშაბათისთვის 3 ოთხშაბათისთვის და ასე შემდეგ




#integer_var = 10                
#float_var = 10.5              
#string_var = "Hello, World!"   
#list_var = [1, 2, 3, 4]         
#dict_var = {"name": "John", "age": 30}  
#bool_var = True                 


#print(f"Type of integer_var: {type(integer_var)}")
#print(f"Type of float_var: {type(float_var)}")
#print(f"Type of string_var: {type(string_var)}")
#print(f"Type of list_var: {type(list_var)}")
#print(f"Type of dict_var: {type(dict_var)}")
#print(f"Type of bool_var: {type(bool_var)}")


#user_input = int(input("Enter a number from 1 to 7: "))

#if user_input == 1:
#    print("Monday")
#elif user_input == 2:
#    print("Tuesday")
#elif user_input == 3:
#    print("Wednesday")
#elif user_input == 4:
#    print("Thursday")
#elif user_input == 5:
#    print("Friday")
#elif user_input == 6:
#   print("Saturday")
#elif user_input == 7:
#    print("Sunday")
#else:
#    print("Invalid number! Please enter a number between 1 and 7.")



#დავალება 13

# შექმენით ისეთი while ციკლი რომელიც 0 დან 10 ის ჩათვლ;ით დაბეჭდავს ყველა რიცხვს და if else  გამოყენებით გაიგეთ არის თუ არა ლუწი ან კენტი დასერჩეთ how to know if number is even or odd in python

#number = 0

#while number <= 10:
#    if number % 2 == 0:
#        print(f"{number} is even")
#    else:
#        print(f"{number} is odd")
#    number += 1



#დავალება 14

# მომხმარებელს შემოატანინეთ თავისი ასაკი და შეამოწმეთ თუ მომხმარებლის ასაკი მეტია 5 ზე და ნაკლები 12 ზე დაუბეჭდეთ რომ არის ბავშვი , სხვა შემთხვევაში თუ მომხმარებლის ასაკი არის 12 ზე მეტი და 18 ზე ნაკლები დაუბეჭდეთ რომ არის თინეიჯერი და თუ არის 18 ზე მეტი დაუბეჭდეთ რომ არის ზრდასრული

#age = int(input("Enter your age: "))
#if 5 < age < 12:
#        print("Child")
#elif 12 < age < 18:
#        print("Teenager")
#elif age > 18:
#        print("Adult")
#else:
#        print("Age does not fall into any of the specified categories.")



#დავალება 15

#

#customer_budget = float(input("Enter your budget: $"))


#item_price = float(input("Enter the price of the item: $"))


#if customer_budget >= item_price:
#    print("Can buy")
#else:
#    print("Cannot buy")