def sandwich_make(bread_type, *initial_ingredients):
    """
    ფუნქცია, რომელიც ამზადებს ბუტერბროტს პურითა და მომხმარებლის მიერ არჩეული ინგრედიენტებით.

    :param bread_type: პურის ტიპი (str)
    :param initial_ingredients: საწყისი ინგრედიენტები (str)
    :return: მომზადებული ბუტერბროტის აღწერა (str)
    
    """
    ingredients = list(initial_ingredients)

    while True:
        add_more = input("გსურთ რაიმეს დამატება ბუტერბროტში? (დიახ/არა): ").strip().lower()
        if add_more == 'არა':
            break
        elif add_more == 'დიახ':
            new_ingredient = input("რა ინგრედიენტის დამატება გსურთ?: ").strip()
            
            if new_ingredient:
                ingredients.append(new_ingredient)
            else:
                print("ინგრედიენტის სახელი ცარიელი არ უნდა იყოს.")
        else:
            print("გთხოვთ, მიუთითეთ 'დიახ' ან 'არა'.")

    if not ingredients:
        return f"თქვენ აირჩიეთ {bread_type}, მაგრამ ბუტერბროტში ინგრედიენტები არ ჩაგიმატებიათ."
    
    return f"კეთილი , თქვენ ამზადებთ ბუტერბროტს {bread_type} პურით და შემდეგი ინგრედიენტებით: {', '.join(ingredients)}."


print(sandwich_make("თეთრი ", "ყველი", "პომიდორი " , "ტოსტირებული ბეკონი","ლატუკი"  ))

