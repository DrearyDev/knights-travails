'use strict';
/* Board:

[7,0] [7,1] [7,2] [7,3] [7,4] [7,5] [7,6] [7,7]

[6,0] [6,1] [6,2] [6,3] [6,4] [6,5] [6,6] [6,7]

[5,0] [5,1] [5,2] [5,3] [5,4] [5,5] [5,6] [5,7]

[4,0] [4,1] [4,2] [4,3] [4,4] [4,5] [4,6] [4,7]

[3,0] [3,1] [3,2] [3,3] [3,4] [3,5] [3,6] [3,7]

[2,0] [2,1] [2,2] [2,3] [2,4] [2,5] [2,6] [2,7]

[1,0] [1,1] [1,2] [1,3] [1,4] [1,5] [1,6] [1,7]

[0,0] [0,1] [0,2] [0,3] [0,4] [0,5] [0,6] [0,7]

-------------------------------*/

/* ---
pass in a coordinate and will return all possible moves assuming a knight
is on that spot. --- */
function calcPossibleMoves(origin) {
    let moves = [
        [origin[0] + 2, origin[1] + 1],
        [origin[0] + 2, origin[1] - 1],
        [origin[0] - 2, origin[1] + 1],
        [origin[0] - 2, origin[1] - 1],
        [origin[0] + 1, origin[1] + 2],
        [origin[0] + 1, origin[1] - 2],
        [origin[0] - 1, origin[1] + 2],
        [origin[0] - 1, origin[1] - 2]
    ];

    moves = moves.filter((point) => {
        if ((point[0] >= 0 && point[1] >= 0) &&
            (point[0] <= 7 && point[1] <= 7)) {
            return point;
        };
    });

    return moves;
};

function knightMoves(start, end) {
    
    console.log(calcPossibleMoves(start));

};
knightMoves([0,0], [7,7]);

/*

- must start at start coordinate and end at end coordinate

- must only move in the knights 'L' shape

- return array of coordinates including start and end ones

- must be shortest possible path

*/