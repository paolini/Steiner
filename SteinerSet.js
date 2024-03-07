function SteinerSet(lambda) {
    return {
        x: 0,
        y: 0,
//        r: 1/(1-lambda),
        R: Math.sqrt(1+lambda+lambda*lambda),
        refine: () => {
            return [
                SteinerBranch(0, 0, 1, 0, lambda),
                SteinerBranch(0, 0, 1, 2*Math.PI/3, lambda),
                SteinerBranch(0, 0, 1, 4*Math.PI/3, lambda)
            ]
        }
    }
}

function SteinerBranch(x, y, length, alpha, lambda) {
        // the leafs of the branch starting from point 
        // (x, y) with two sticks in direction alpha +/- pi/3
        // which recursively split into two sticks of length
        // lambda*length
        return {
            x,
            y,
            r: length/(1-lambda),
            refine: () => {
                function branch(sign) {
                    return SteinerBranch(
                        x + length*Math.cos(alpha + sign*Math.PI/3),
                        y + length*Math.sin(alpha + sign*Math.PI/3),
                        lambda*length,
                        alpha + sign*Math.PI/3,
                        lambda
                    )
                }
                return [branch(1), branch(-1)]
            }
        }
    }
