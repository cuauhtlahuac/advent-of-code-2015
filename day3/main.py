from delivery import Delivery

with open('input.txt') as f:
    lines = f.readlines()
    inputText = lines[0]

    santa = Delivery('santa')
    robot = Delivery('robot')

    final_matrix = {}
    turn = 1
    for char in inputText:
        if turn % 2 == 0:
            robot.move_position(char)
        else:
            santa.move_position(char)
        turn += 1

    for matrix in santa.matrix:
        final_matrix[matrix] = matrix
    for matrix in robot.matrix:
        final_matrix[matrix] = matrix

    print(len(final_matrix))
