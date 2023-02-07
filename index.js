function drawSet(ctx, S) {
    ctx.beginPath()
    ctx.arc(S.x, S.y, S.r, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(S.x, S.y)
    
    if (S.r < 0.01) return
    for (const child of S.refine()) {
        drawSet(ctx, child)
    }
}

function draw(canvas) {
    const ctx = canvas.getContext('2d')
    const S = new SteinerSet(0.2)
    ctx.translate(canvas.width/2, canvas.height/2)
    const s = 0.4*Math.min(canvas.width, canvas.height)
    ctx.scale(s,s)
    ctx.lineWidth /= s
    drawSet(ctx, S)
}