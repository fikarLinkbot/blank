Page({
  onLoad() {
    this.renderCharts();
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
    let xPos = 20; // Posisi awal pada sumbu X
    barChart.setFontSize(12);

    barData.forEach((value, index) => {
      // Menggambar bar
      barChart.setFillStyle('#4CAF50'); // Warna bar
      barChart.fillRect(xPos, 300 - value, barWidth, value); // (x, y, width, height)

      // Menambahkan nilai di atas bar
      barChart.setFillStyle('#000000'); // Warna teks
      barChart.fillText(value, xPos + 10, 300 - value - 10); // (text, x, y)

      // Menambahkan label di bawah bar
      barChart.fillText(barLabels[index], xPos + 5, 320); // (text, x, y)

      // Pindah ke posisi bar berikutnya
      xPos += barWidth + barGap;
    });
    barChart.draw();

    // Data untuk Pie Chart
    const pieData = [50, 30, 20]; // Nilai dalam persentase
    const pieColors = ['#FF6384', '#36A2EB', '#FFCE56'];
    const pieLabels = ['Product A', 'Product B', 'Product C'];

    // Render Pie Chart
    let startAngle = 0;
    pieData.forEach((value, index) => {
      // Hitung sudut slice
      const sliceAngle = (value / 100) * 2 * Math.PI;

      // Menggambar slice
      pieChart.beginPath();
      pieChart.moveTo(150, 100); // Titik pusat lingkaran
      pieChart.arc(150, 100, 80, startAngle, startAngle + sliceAngle); // (x, y, radius, startAngle, endAngle)
      pieChart.closePath();
      pieChart.setFillStyle(pieColors[index]);
      pieChart.fill();

      // Menambahkan persentase di tengah slice
      const labelX = 150 + 50 * Math.cos(startAngle + sliceAngle / 2); // X label
      const labelY = 100 + 50 * Math.sin(startAngle + sliceAngle / 2); // Y label
      pieChart.setFillStyle('#ffffff'); // Warna teks
      pieChart.setFontSize(14);
      pieChart.fillText(`${value}%`, labelX - 10, labelY + 5); // (text, x, y)

      // Perbarui sudut awal
      startAngle += sliceAngle;
    });

    // Menambahkan legenda di bawah chart
    pieLabels.forEach((label, index) => {
      const legendX = 10;
      const legendY = 220 + index * 20;

      // Kotak warna legenda
      pieChart.setFillStyle(pieColors[index]);
      pieChart.fillRect(legendX, legendY, 10, 10);

      // Label legenda
      pieChart.setFillStyle('#000000');
      pieChart.setFontSize(12);
      pieChart.fillText(label, legendX + 20, legendY + 10);
    });

    pieChart.draw();
  }
});
