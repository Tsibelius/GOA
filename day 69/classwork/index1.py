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
