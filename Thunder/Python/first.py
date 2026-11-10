with open("Number.txt", "r", encoding="latin-1") as file:
    for line in file:
        line = line.strip()
        if line:
            print(line)