Page({
  data: {
    // Bar Chart
    barSpec: {
      type: 'bar',
      data: [
        {
          id: 'barData',
          values: [
            { type: 'Autocracies', year: '1930', value: 129 },
            { type: 'Autocracies', year: '1940', value: 133 },
            { type: 'Autocracies', year: '1950', value: 130 },
            { type: 'Autocracies', year: '1960', value: 126 },
            { type: 'Autocracies', year: '1970', value: 117 },
            { type: 'Autocracies', year: '1980', value: 114 },
            { type: 'Autocracies', year: '1990', value: 111 },
            { type: 'Autocracies', year: '2000', value: 89 },
            { type: 'Autocracies', year: '2010', value: 80 },
            { type: 'Autocracies', year: '2018', value: 80 },
            { type: 'Democracies', year: '1930', value: 22 },
            { type: 'Democracies', year: '1940', value: 13 },
            { type: 'Democracies', year: '1950', value: 25 },
            { type: 'Democracies', year: '1960', value: 29 },
            { type: 'Democracies', year: '1970', value: 38 },
            { type: 'Democracies', year: '1980', value: 41 },
            { type: 'Democracies', year: '1990', value: 57 },
            { type: 'Democracies', year: '2000', value: 87 },
            { type: 'Democracies', year: '2010', value: 98 },
            { type: 'Democracies', year: '2018', value: 99 }
          ]
        }
      ],
      xField: ['year', 'type'],
      yField: 'value',
      seriesField: 'type',
      legends: {
        visible: true,
        orient: 'top',
        position: 'start'
      },
    },
    // Line Chart
    lineSpec: {
      type: 'line',
      data: [
        {
          id: 'data1',
          values: [
            { x: 1, y: 10 },
            { x: 2, y: 20 },
            { x: 3, y: 15 },
            { x: 4, y: 25 },
            { x: 5, y: 30 }
          ]
        }
      ],
      xField: 'x',
      yField: 'y',
      axes: [
        { orient: 'bottom', type: 'linear' },
        { orient: 'left', type: 'linear' }
      ],
      tooltip: { visible: true },
      legends: { visible: false }
    },

    // Pie Chart
    pieSpec: {
      type: 'pie',
      data: [
        {
          id: 'data1',
          values: [
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 234, name: 'Affiliate' },
            { value: 135, name: 'Search' },
            { value: 154, name: 'Video' }
          ]
        }
      ],
      outerRadius: 0.6,
      categoryField: 'name',
      valueField: 'value',
      tooltip: { visible: true }
    },

    // Scatter Chart
    scatterSpec: {
      type: 'scatter',
      data: [
        {
          id: 'data1',
          values: [
            { x: 10, y: 20, size: 5 },
            { x: 15, y: 25, size: 10 },
            { x: 20, y: 30, size: 15 },
            { x: 25, y: 35, size: 20 }
          ]
        }
      ],
      xField: 'x',
      yField: 'y',
      sizeField: 'size',
      axes: [
        { orient: 'bottom', type: 'linear' },
        { orient: 'left', type: 'linear' }
      ],
      tooltip: { visible: true }
    },

    // Radar Chart
    radarSpec: {
      type: 'radar',
      data: [
        {
          id: 'data1',
          values: [
            { category: 'Speed', value: 80 },
            { category: 'Power', value: 70 },
            { category: 'Endurance', value: 90 },
            { category: 'Skill', value: 60 }
          ]
        }
      ],
      angleField: 'category',
      radiusField: 'value',
      tooltip: { visible: true },
      legends: { visible: false }
    }
  },

  onChartInit(event) {
    try {
      console.log('Chart initialization event triggered.');
      console.log('Event details:', event);
    } catch (error) {
      console.error('Error in onChartInit:', error);
    }
  },

  onChartReady(event) {
    console.log('Chart ready:', event);
  },

  onLoad() {
    console.log("Chart Specs Loaded:");
    console.log("Bar:", this.data.barSpec);
    console.log("Line:", this.data.lineSpec);
    console.log("Pie:", this.data.pieSpec);
    console.log("Scatter:", this.data.scatterSpec);
    console.log("Radar:", this.data.radarSpec);
  }
});
