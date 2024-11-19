Page({
  onLoad() {
    this.renderCharts();
  },

  onItemClick(e) {
    tt.showToast({
      title: "Fitur sedang dikembangkan!",
      icon: "none"
    });
  },

  renderCharts() {
    const barChart = tt.createCanvasContext('barChart');
    const pieChart = tt.createCanvasContext('pieChart');

    // Data untuk Bar Chart
    const barData = [100, 200, 150, 250, 300];
    const barLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

    // Render Bar Chart
    const barWidth = 40;
    const barGap = 20;
    let xPos = 20; // Mulai dari posisi X
    barChart.setFontSize(12);

    barData.forEach((value, index) => {
      barChart.setFillStyle('#4CAF50');
      barChart.fillRect(xPos, 300 - value, barWidth, value); // Bar
      barChart.setFillStyle('#000000');
      barChart.fillText(barLabels[index], xPos + 5, 320); // Label
      xPos += barWidth + barGap;
    });
    barChart.draw();

    // Data untuk Pie Chart
    const pieData = [50, 30, 20];
    const pieColors = ['#FF6384', '#36A2EB', '#FFCE56'];
    const pieLabels = ['Product A', 'Product B', 'Product C'];

    // Render Pie Chart
    let startAngle = 0;
    pieData.forEach((value, index) => {
      const sliceAngle = (value / 100) * 2 * Math.PI;
      pieChart.beginPath();
      pieChart.moveTo(150, 100);
      pieChart.arc(150, 100, 80, startAngle, startAngle + sliceAngle);
      pieChart.closePath();
      pieChart.setFillStyle(pieColors[index]);
      pieChart.fill();
      startAngle += sliceAngle;

      // Menambahkan Label
      const labelX = 150 + 100 * Math.cos(startAngle - sliceAngle / 2);
      const labelY = 100 + 100 * Math.sin(startAngle - sliceAngle / 2);
      pieChart.setFillStyle('#000000');
      pieChart.setFontSize(12);
      pieChart.fillText(pieLabels[index], labelX - 15, labelY);
    });
    pieChart.draw();
  }
});
