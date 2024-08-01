# შევქმნათ პროგრამა ,რომელსაც გადავცემთ მოსწავლეების სახელებს შემდეგ კი მოსწავლეების სახელებს რენდომულად გავანაწილებთ
# თითოეულ ჯგუფში.


import random

all_group = ["ანდრია ჯ" ,"" ,"" ,""]
group = []



while group19_students != []:
    random_student = random.choice(group19_students)
    group.append(random_student)
    group19_students.remove(random_student)

    if len(group)==3:
        all_group.append(group)
        group = []


for i in range(3):
    print(all_group(i))         



print(group)



# choise არჩევა
















