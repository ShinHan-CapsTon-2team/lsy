function calculateAndDrawHistogram(imageData, canvasId, x) {
    const imgBuf = new Uint8Array(x * 3);
    const imgHistResult = new Uint8Array(200 * 320 * 3).fill(255);

    for (let i = 0; i < x; i++) {
        imgBuf[i * 3] = (i * 180) / x;
        imgBuf[i * 3 + 1] = 255;
        imgBuf[i * 3 + 2] = 255;
    }

    const binW = Math.floor(320 / x);

    for (let i = 0; i < x; i++) {
        const setY = Math.floor(imageData[i] * 200 / 255);

        for (let j = 0; j < binW; j++) {
            for (let k = 0; k < 200 - setY; k++) {
                imgHistResult[(k * 320 + i * binW + j) * 3] = imgBuf[i * 3];
                imgHistResult[(k * 320 + i * binW + j) * 3 + 1] = imgBuf[i * 3 + 1];
                imgHistResult[(k * 320 + i * binW + j) * 3 + 2] = imgBuf[i * 3 + 2];
            }
        }
    }

    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    for (let i = 0; i < 200; i++) {
        for (let j = 0; j < 320; j++) {
            const index = (i * 320 + j) * 3;
            ctx.fillStyle = `rgb(${imgHistResult[index]}, ${imgHistResult[index + 1]}, ${imgHistResult[index + 2]})`;
            ctx.fillRect(j, i, 1, 1);
        }
    }
}
