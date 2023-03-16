function drawSet(ctx, S) {
    const draw_arc = false
    const draw_tree = true
    if (draw_arc) {
        ctx.beginPath()
        ctx.arc(S.x, S.y, S.r, 0, 2 * Math.PI)
        ctx.stroke()
    }    
    if (S.r < 0.005) return
    for (const child of S.refine()) {
        if (draw_tree) {
            ctx.beginPath()
            ctx.moveTo(S.x, S.y)
            ctx.lineTo(child.x, child.y)
            ctx.stroke()
        }    
        drawSet(ctx, child)
    }
}

function draw(canvas) {
    const ctx = canvas.getContext('2d')
    const S = new SteinerSet(0.55)
    ctx.translate(canvas.width/2, canvas.height/2)
    const s = 0.2*Math.min(canvas.width, canvas.height)
    ctx.scale(s,s)
    ctx.lineWidth /= s
    drawSet(ctx, S)
}