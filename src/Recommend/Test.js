import React, { Component } from 'react';
import upload from '../Images/upload.png'; 
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      redHistogram: Array(256).fill(0),
      greenHistogram: Array(256).fill(0),
      blueHistogram: Array(256).fill(0),
    };
  }

  componentDidMount() {
    // 이미지를 로드하고 상태에 설정하세요.
    // 'yourImagePath'를 실제 이미지 경로로 대체하세요.
    const image = new Image();
    image.src = upload;
    image.onload = () => {
      this.setState({ image }, () => this.calculateHistogram());
    };
  }

  calculateHistogram = () => {
    const { image } = this.state;
    if (!image) {
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height);

    const imageData = ctx.getImageData(0, 0, image.width, image.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const redValue = data[i];
      const greenValue = data[i + 1];
      const blueValue = data[i + 2];

      this.setState((prevState) => {
        const newRedHistogram = [...prevState.redHistogram];
        newRedHistogram[redValue]++;
        const newGreenHistogram = [...prevState.greenHistogram];
        newGreenHistogram[greenValue]++;
        const newBlueHistogram = [...prevState.blueHistogram];
        newBlueHistogram[blueValue]++;

        return {
          redHistogram: newRedHistogram,
          greenHistogram: newGreenHistogram,
          blueHistogram: newBlueHistogram,
        };
      });
    }
  };

  render() {
    const { redHistogram, greenHistogram, blueHistogram } = this.state;

    return (
      <div>
        <div id="Hist">
          <div>
            <h2>Red Histogram</h2>
            <pre>{JSON.stringify(redHistogram, null, 2)}</pre>
          </div>
          <div>
            <h2>Green Histogram</h2>
            <pre>{JSON.stringify(greenHistogram, null, 2)}</pre>
          </div>
          <div>
            <h2>Blue Histogram</h2>
            <pre>{JSON.stringify(blueHistogram, null, 2)}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
