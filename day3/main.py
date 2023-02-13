coords = {
    '^': 1,
    '>': 2,
    'v': 3,
    '<': 4,
}

houses = 0

with open('input.txt') as f:
    lines = f.readlines()
    inputText = lines[0]
    matrix = {}

    current_x = 0
    current_y = 0

    for char in inputText:
        if char in coords:
            # do a array matrix
            if coords[char] == 1:
                current_y += 1
                matrix[str(current_x) + str(current_y)] = char
            if coords[char] == 2:
                current_x += 1
                matrix[str(current_x) + str(current_y)] = char
            if coords[char] == 3:
                current_y -= 1
                matrix[str(current_x) + str(current_y)] = char
            if coords[char] == 4:
                current_x -= 1
                matrix[str(current_x) + str(current_y)] = char
    print(len(matrix))
