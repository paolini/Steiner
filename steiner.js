const lambda=0.5
const alpha=0.1

function S(n) {
    let l = []
    let d = 1.0
    for (let i = 0; i < n; i++) {
        l.push([d, 0.0])
        l.push([d*Math.cos(alpha), d*Math.sin(alpha)])
        d *= lambda
    }
    l.push([d,0])
    return l
}

function main() {
    let l = S()
}
