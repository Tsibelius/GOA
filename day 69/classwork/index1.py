<<<<<<< HEAD
def capitalize_words(sentence):
    words = sentence.split()
    capitalized_words = []

    for word in words:
        if word:
            capitalized_word = word[0].upper() + word[1:]
            capitalized_words.append(capitalized_word)

    new_sentence = ' '.join(capitalized_words)
    return new_sentence


sentence = input("შეიყვანე წინადადება: ")
result = capitalize_words(sentence)
print("შედეგი:", result)
=======
def capitalize_words(sentence):
    words = sentence.split()
    capitalized_words = []

    for word in words:
        if word:
            capitalized_word = word[0].upper() + word[1:]
            capitalized_words.append(capitalized_word)

    new_sentence = ' '.join(capitalized_words)
    return new_sentence


sentence = input("შეიყვანე წინადადება: ")
result = capitalize_words(sentence)
print("შედეგი:", result)
>>>>>>> b6d6a2770e87d5f8f81ed64f7e5054b4298611ac
