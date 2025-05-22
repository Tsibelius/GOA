def split_and_merge(sentence, sep):
    words = sentence.split()
    merged_words = [sep.join(word) for word in words]
    return " ".join(merged_words)
