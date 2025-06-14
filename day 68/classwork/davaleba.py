def split_words(sentence):
    words = sentence.split('$')  
    return words

sentence = "join$Goa$bacome$a$chad"
word_list = split_words(sentence)

print(word_list)