const dataBoxPilot = [
  {
    name: 'boxPlot',
    values: [
      {
        x: 'Sub-Saharan Africa',
        y1: 9.16270124 ,
        y2: 10.07530816  ,
        y3: 10.09027907  ,
        y4: 10.27579542  ,
        y5: 11.62222959  ,
        group:'High income'
      },
      {
        x: 'Sub-Saharan Africa',
        y1: 8.721525214 ,
        y2: 9.641352839  ,
        y3: 10.1736233  ,
        y4: 10.57169914 ,
        y5: 11.64427467  ,
        group:'Low income'
      },
      {
        x: 'South Asia',
        y1: 9.404757278  ,
        y2: 10.36482449 ,
        y3: 10.94903493 ,
        y4: 11.5806383  ,
        y5: 12.50192084 ,
        group:'Low income',
      },
              {
        x: 'South Asia',
        y1: 9.732841997  ,
        y2: 9.732841997 ,
        y3: 9.732841997 ,
        y4: 9.732841997  ,
        y5: 9.732841997 ,
        group:'High income',
      },
      {
        x: 'Middle East & North Africa',
        y1: 9.541951901 ,
        y2: 10.33719892 ,
        y3: 10.91206173  ,
        y4: 11.29821858  ,
        y5: 11.60653481  ,
        group:'Low income',
      },
      {
        x: 'Middle East & North Africa',
        y1: 10.2396509 ,
        y2: 10.63879995,
        y3: 11.09996104  ,
        y4: 11.54301107  ,
        y5: 11.92092709  ,
        group:'High income',
      },
      {
        x: 'Latin America & Caribbean',
        y1: 10.14653181 ,
        y2:10.32106777  ,
        y3: 10.45467215 ,
        y4: 10.45844052  ,
        y5: 10.6064696 ,
        group:'Low income',
      },
              {
        x: 'Latin America & Caribbean',
        y1: 8.743652009 ,
        y2:9.413881158  ,
        y3: 10.16606248 ,
        y4: 11.00011805  ,
        y5: 12.20655104,
        group:'High income',
      },
      {
        x: 'East Asia & Pacific',
        y1: 7.800035977  ,
        y2: 8.850646235  ,
        y3: 10.14633178 ,
        y4: 11.59877618 ,
        y5: 13.24880824,
        group:'High income'
      },
              {
        x: 'East Asia & Pacific',
        y1: 8.316035904  ,
        y2: 9.038602613  ,
        y3: 10.22954548 ,
        y4:10.71782871 ,
        y5: 12.07411874,
        group:'Low income'
      },
      {
        x: 'Europe & Central Asia',
        y1: 9.831631935 ,
        y2: 9.939275167   ,
        y3: 10.39108655   ,
        y4: 10.95556656  ,
        y5: 11.3012157,
        group: 'Low income',
      },
              {
        x: 'Europe & Central Asia',
        y1: 9.522480948 ,
        y2: 10.43085982   ,
        y3: 11.06642694   ,
        y4: 11.73822523  ,
        y5: 12.62940296,
        group: 'High income',
      }
    ]
  }
];

const dataRing = [
  { type: 'oxygen', value: '46.60', formula: 'O', texture: 'circle' },
  { type: 'silicon', value: '27.72', formula: 'Si', texture: 'horizontal-line' },
  { type: 'aluminum', value: '8.13', formula: 'Al', texture: 'vertical-line' },
  { type: 'iron', value: '5', formula: 'Fe', texture: 'rect' },
  { type: 'calcium', value: '3.63', formula: 'Ca', texture: 'grid' },
  { type: 'sodium', value: '2.83', formula: 'Na', texture: 'bias-rl' },
  { type: 'potassium', value: '2.59', formula: 'K', texture: 'diamond' },
  { type: 'others', value: '3.5', formula: 'Others', texture: 'bias-lr' }
];

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
    },

    // Funnel Chart
    funnelSpec: {
      type: 'funnel',
      data: [
        {
          id: 'data1',
          values: [
            { stage: 'Visitors', value: 5000 },
            { stage: 'Signups', value: 2000 },
            { stage: 'Purchases', value: 800 }
          ]
        }
      ],
      categoryField: 'stage',
      valueField: 'value',
      tooltip: { visible: true }
    },

    // Sankey Diagram
    sankeySpec: {
      type: 'sankey',
      data: [
        {
          values: [
              {
                nodes: [
                  { nodeName: 'Country A' },
                  { nodeName: 'Country B' },
                  { nodeName: 'Country C' },
                  { nodeName: 'Country D' },
                  { nodeName: 'Country E' },
                  { nodeName: 'Country F' },
                  { nodeName: 'Country G' },
                  { nodeName: 'Country H' },
                  { nodeName: 'Country I' },
                  { nodeName: 'Country J' },
                  { nodeName: 'Country K' },
                  { nodeName: 'Country L' },
                  { nodeName: 'Country M' },
                  { nodeName: 'Country N' },
                  { nodeName: 'Country O' },
                  { nodeName: 'Country P' }
                ],
                links: [
                  { source: 0, target: 1, value: 5 },
                  { source: 0, target: 2, value: 1 },
                  { source: 0, target: 3, value: 1 },
                  { source: 0, target: 4, value: 1 },
                  { source: 5, target: 1, value: 1 },
                  { source: 5, target: 2, value: 5 },
                  { source: 5, target: 4, value: 1 },
                  { source: 6, target: 1, value: 1 },
                  { source: 6, target: 2, value: 1 },
                  { source: 6, target: 3, value: 5 },
                  { source: 6, target: 4, value: 1 },
                  { source: 7, target: 1, value: 1 },
                  { source: 7, target: 2, value: 1 },
                  { source: 7, target: 3, value: 1 },
                  { source: 7, target: 4, value: 5 },
                  { source: 1, target: 8, value: 2 },
                  { source: 1, target: 9, value: 1 },
                  { source: 1, target: 10, value: 1 },
                  { source: 1, target: 11, value: 3 },
                  { source: 2, target: 8, value: 1 },
                  { source: 2, target: 9, value: 3 },
                  { source: 2, target: 12, value: 3 },
                  { source: 2, target: 10, value: 3 },
                  { source: 2, target: 11, value: 1 },
                  { source: 3, target: 9, value: 1 },
                  { source: 3, target: 10, value: 3 },
                  { source: 3, target: 11, value: 1 },
                  { source: 4, target: 8, value: 1 },
                  { source: 4, target: 9, value: 1 },
                  { source: 4, target: 10, value: 2 },
                  { source: 4, target: 11, value: 7 },
                  { source: 11, target: 13, value: 5 },
                  { source: 11, target: 14, value: 1 },
                  { source: 11, target: 15, value: 3 },
                  { source: 8, target: 13, value: 5 },
                  { source: 8, target: 14, value: 1 },
                  { source: 8, target: 15, value: 3 },
                  { source: 9, target: 13, value: 5 },
                  { source: 9, target: 14, value: 1 },
                  { source: 9, target: 15, value: 3 },
                  { source: 12, target: 13, value: 5 },
                  { source: 12, target: 14, value: 1 },
                  { source: 12, target: 15, value: 3 },
                  { source: 10, target: 13, value: 5 },
                  { source: 10, target: 14, value: 1 },
                  { source: 10, target: 15, value: 3 }
                ]
              }
          ]
        }
      ],
      categoryField: 'nodeName',
      valueField: 'value',
      sourceField: 'source',
      targetField: 'target',
    
      nodeAlign: 'justify',
      nodeGap: 8,
      nodeWidth: 10,
      minNodeHeight: 4,
    
      title: {
        text: 'How energy is converted or transmitted before being consumed or lost',
        subtext: 'Data: Department of Energy & Climate Change via Tom Counsell',
        subtextStyle: {
          fontSize: 12
        },
        padding: {
          bottom: 12
        }
      },
    
      label: {
        visible: true,
        style: {
          fontSize: 10
        }
      },
    
      node: {
        state: {
          hover: {
            stroke: '#333333'
          },
          selected: {
            fill: '#dddddd',
            stroke: '#333333',
            strokeWidth: 1,
            brighter: 1,
            fillOpacity: 1
          }
        }
      },
    
      link: {
        state: {
          hover: {
            fillOpacity: 1
          },
          selected: {
            fill: '#dddddd',
            stroke: '#333333',
            strokeWidth: 1,
            brighter: 1,
            fillOpacity: 1
          }
        }
      }
    },

    // Area
    areaSpec: {
      type: 'area',
      data: {
        values: [
          { type: 'Nail polish', country: 'Africa', value: 4229 },
          { type: 'Nail polish', country: 'EU', value: 4376 },
          { type: 'Nail polish', country: 'China', value: 3054 },
          { type: 'Nail polish', country: 'USA', value: 12814 },
          { type: 'Eyebrow pencil', country: 'Africa', value: 3932 },
          { type: 'Eyebrow pencil', country: 'EU', value: 3987 },
          { type: 'Eyebrow pencil', country: 'China', value: 5067 },
          { type: 'Eyebrow pencil', country: 'USA', value: 13012 },
          { type: 'Rouge', country: 'Africa', value: 5221 },
          { type: 'Rouge', country: 'EU', value: 3574 },
          { type: 'Rouge', country: 'China', value: 7004 },
          { type: 'Rouge', country: 'USA', value: 11624 },
          { type: 'Lipstick', country: 'Africa', value: 9256 },
          { type: 'Lipstick', country: 'EU', value: 4376 },
          { type: 'Lipstick', country: 'China', value: 9054 },
          { type: 'Lipstick', country: 'USA', value: 8814 },
          { type: 'Eyeshadows', country: 'Africa', value: 3308 },
          { type: 'Eyeshadows', country: 'EU', value: 4572 },
          { type: 'Eyeshadows', country: 'China', value: 12043 },
          { type: 'Eyeshadows', country: 'USA', value: 12998 },
          { type: 'Eyeliner', country: 'Africa', value: 5432 },
          { type: 'Eyeliner', country: 'EU', value: 3417 },
          { type: 'Eyeliner', country: 'China', value: 15067 },
          { type: 'Eyeliner', country: 'USA', value: 12321 },
          { type: 'Foundation', country: 'Africa', value: 13701 },
          { type: 'Foundation', country: 'EU', value: 5231 },
          { type: 'Foundation', country: 'China', value: 10119 },
          { type: 'Foundation', country: 'USA', value: 10342 },
          { type: 'Lip gloss', country: 'Africa', value: 4008 },
          { type: 'Lip gloss', country: 'EU', value: 4572 },
          { type: 'Lip gloss', country: 'China', value: 12043 },
          { type: 'Lip gloss', country: 'USA', value: 22998 },
          { type: 'Mascara', country: 'Africa', value: 18712 },
          { type: 'Mascara', country: 'EU', value: 6134 },
          { type: 'Mascara', country: 'China', value: 10419 },
          { type: 'Mascara', country: 'USA', value: 11261 }
        ]
      },
      title: {
        visible: true,
        text: 'Stacked area chart of cosmetic products'
      },
      stack: true,
      xField: 'type',
      yField: 'value',
      seriesField: 'country',
      legends: [{ visible: true, position: 'middle', orient: 'bottom' }]
    },

    // BoxPilot
    boxPilotSpec: {
      type: 'boxPlot',
      data: dataBoxPilot,
      xField: ['x','group'],
    
      minField: 'y1',
      q1Field: 'y2',
      medianField: 'y3',
      q3Field: 'y4',
      maxField: 'y5',
      seriesField: 'group',
    
      direction: 'vertical',
      color:['#62CDFF','#9E4784'],
    
      legends: [{ visible: true, position: 'middle', orient: 'top' }],
    
      title: {
        visible: true,
        text: 'Global GDP 2021',
        padding: {
          bottom: 10
        }
      },
    },

    // DualAxis
    dualAxisSpec: {
      type: 'common',
      seriesField: 'color',
      data: [
        {
          id: 'id0',
          values: [
            { x: '周一', type: '早餐', y: 15 },
            { x: '周一', type: '午餐', y: 25 },
            { x: '周二', type: '早餐', y: 12 },
            { x: '周二', type: '午餐', y: 30 },
            { x: '周三', type: '早餐', y: 15 },
            { x: '周三', type: '午餐', y: 24 },
            { x: '周四', type: '早餐', y: 10 },
            { x: '周四', type: '午餐', y: 25 },
            { x: '周五', type: '早餐', y: 13 },
            { x: '周五', type: '午餐', y: 20 },
            { x: '周六', type: '早餐', y: 10 },
            { x: '周六', type: '午餐', y: 22 },
            { x: '周日', type: '早餐', y: 12 },
            { x: '周日', type: '午餐', y: 19 }
          ]
        },
        {
          id: 'id1',
          values: [
            { x: '周一', type: '饮料', y: 22 },
            { x: '周二', type: '饮料', y: 43 },
            { x: '周三', type: '饮料', y: 33 },
            { x: '周四', type: '饮料', y: 22 },
            { x: '周五', type: '饮料', y: 10 },
            { x: '周六', type: '饮料', y: 30 },
            { x: '周日', type: '饮料', y: 50 }
          ]
        }
      ],
      series: [
        {
          type: 'bar',
          id: 'bar',
          dataIndex: 0,
          label: { visible: true },
          seriesField: 'type',
          dataIndex: 0,
          xField: ['x', 'type'],
          yField: 'y'
        },
        {
          type: 'line',
          id: 'line',
          dataIndex: 1,
          label: { visible: true },
          seriesField: 'type',
          xField: 'x',
          yField: 'y',
          stack: false
        }
      ],
      axes: [
        { orient: 'left', seriesIndex: [0] },
        { orient: 'right', seriesId: ['line'], gird: { visible: false } },
        { orient: 'bottom', label: { visible: true }, type: 'band' }
      ],
      legends: {
        visible: true,
        orient: 'bottom'
      },
      crosshair: {
        xField: {
          visible: true
        }
      }
    },

    // Horizontal Bar
    horizontalBarSpec: {
      type: 'bar',
      data: [
        {
          id: 'barData',
          values: [
            {
              name: 'Apple',
              value: 214480
            },
            {
              name: 'Google',
              value: 155506
            },
            {
              name: 'Amazon',
              value: 100764
            },
            {
              name: 'Microsoft',
              value: 92715
            },
            {
              name: 'Coca-Cola',
              value: 66341
            },
            {
              name: 'Samsung',
              value: 59890
            },
            {
              name: 'Toyota',
              value: 53404
            },
            {
              name: 'Mercedes-Benz',
              value: 48601
            },
            {
              name: 'Facebook',
              value: 45168
            },
            {
              name: "McDonald's",
              value: 43417
            },
            {
              name: 'Intel',
              value: 43293
            },
            {
              name: 'IBM',
              value: 42972
            },
            {
              name: 'BMW',
              value: 41006
            },
            {
              name: 'Disney',
              value: 39874
            },
            {
              name: 'Cisco',
              value: 34575
            },
            {
              name: 'GE',
              value: 32757
            },
            {
              name: 'Nike',
              value: 30120
            },
            {
              name: 'Louis Vuitton',
              value: 28152
            },
            {
              name: 'Oracle',
              value: 26133
            },
            {
              name: 'Honda',
              value: 23682
            }
          ]
        }
      ],
      direction: 'horizontal',
      xField: 'value',
      yField: 'name',
      axes: [
        {
          orient: 'bottom',
          visible: false
        }
      ],
      label: {
        visible: true
      }
    },

    // Ring
    ringSpec: {
      type: 'pie',
      data: [
        {
          id: 'id0',
          values: dataRing
        }
      ],
      outerRadius: 0.8,
      innerRadius: 0.5,
      padAngle: 0.6,
      valueField: 'value',
      categoryField: 'type',
      pie: {
        style: {
          cornerRadius: 10,
        },
        state: {
          hover: {
            outerRadius: 0.85,
            stroke: '#000',
            lineWidth: 1
          },
          selected: {
            outerRadius: 0.85,
            stroke: '#000',
            lineWidth: 1
          }
        }
      },
      title: {
        visible: true,
        text: '地表元素含量统计'
      },
      indicator: {
        visible: true,
        trigger: 'hover',
        limitRatio: 0.4,
        title: {
          visible: true,
          autoFit: true,
          field: 'formula',
          style: {
            fontWeight: 'bolder',
            fontFamily: 'Times New Roman',
            fill: '#888',
          }
        },
        content: [
          {
            visible: true,
            field: 'type',
            style: {
              fontSize: 20,
              fill: 'orange',
              fontWeight: 'bolder',
              fontFamily: 'Times New Roman',
            }
          },
          {
            visible: true,
            field: 'value',
            style: {
              fontSize: 18,
              fill: 'orange',
              fontFamily: 'Times New Roman',
            }
          }
        ]
      },
      legends: {
        visible: true,
        orient: 'left',
        item: {
          shape: {
            style: {
              symbolType: 'circle',
              texture: datum => datum['texture']
            }
          }
        }
      },
      tooltip: {
        mark: {
          content: [
            {
              key: datum => datum['type'],
              value: datum => datum['value'] + '%'
            }
          ]
        }
      }
    },

    // Rose
    roseSpec: {
      data: [
        {
          name: "data",
          values: [
            {
              value: 535,
              name: "社会",
            },
            {
              value: 410,
              name: "军事",
            },
            {
              value: 374,
              name: "历史",
            },
            {
              value: 335,
              name: "时政",
            },
            {
              value: 300,
              name: "美食",
            },
            {
              value: 295,
              name: "两性",
            },
            {
              value: 281,
              name: "健康",
            },
            {
              value: 270,
              name: "传媒",
            },
            {
              value: 263,
              name: "国际",
            },
            {
              value: 140,
              name: "娱乐",
            },
          ],
        },
      ],
      type: "rose",
      radius: 0.7,
      categoryField: "name",
      valueField: "value",
      seriesField: 'name',
      color: {
        type: "ordinal",
        range: [
          "#E9F2FF",
          "#D4E5FF",
          "#BED9FF",
          "#A8CCFF",
          "#93BFFF",
          "#7DB2FF",
          "#67A5FF",
          "#5199FF",
          "#3C8CFF",
          "#267FFF",
        ],
      },
      axes: [
        {
          orient: 'angle',
          domainLine: { visible: false },
          grid: { style: { lineDash: [0], stroke: '#F4F4F4' } },
          tick: {
            visible: false,
          },
          label: {
            space: 20,
            style: {
              fill: "rgba(22, 24, 35, 0.5)",
            }
          }
        },
        {
          orient: 'radius',
          domainLine: { visible: false },
          tick: {
            visible: false,
            tickCount: 3,
          },
          label: {
            visible: false
          },
          grid: { visible: true, smooth: true, style: { lineDash: [0], stroke: '#F4F4F4' } }
        }
      ],
      rose: {
        state: {
          hover: {
            lineWidth: 1,
            stroke: '#000'
          }
        }
      }
    },

    // Word Cloud
    wordCloudSpec: {
      type: 'wordCloud',
      data: [
        {
          name: 'source',
          values: [
            {
              name: '螺蛳粉',
              value: 957
            },
            {
              name: '钵钵鸡',
              value: 942
            },
            {
              name: '板栗',
              value: 842
            },
            {
              name: '胡辣汤',
              value: 828
            },
            {
              name: '关东煮',
              value: 665
            },
            {
              name: '羊肉汤',
              value: 627
            },
            {
              name: '热干面',
              value: 574
            },
            {
              name: '肠粉',
              value: 564
            },
            {
              name: '北京烤鸭',
              value: 554
            },
            {
              name: '龟苓膏',
              value: 540
            },
            {
              name: '米粉',
              value: 513
            },
            {
              name: '灌肠',
              value: 499
            },
            {
              name: '藕粉',
              value: 499
            },
            {
              name: '烤冷面',
              value: 495
            },
            {
              name: '炸酱面',
              value: 487
            },
            {
              name: '臭豆腐',
              value: 484
            },
            {
              name: '沙县小吃',
              value: 482
            },
            {
              name: '重庆小面',
              value: 482
            },
            {
              name: '冒菜',
              value: 479
            },
            {
              name: '醪糟',
              value: 462
            },
            {
              name: '肉夹馍',
              value: 456
            },
            {
              name: '酸辣粉',
              value: 456
            },
            {
              name: '驴打滚',
              value: 456
            },
            {
              name: '煎饼果子',
              value: 443
            },
            {
              name: '驴肉火烧',
              value: 443
            },
            {
              name: '小笼包',
              value: 426
            },
            {
              name: '烧麦',
              value: 425
            },
            {
              name: '卤煮',
              value: 422
            },
            {
              name: '油条',
              value: 414
            },
            {
              name: '桂林米粉',
              value: 414
            },
            {
              name: '兰州拉面',
              value: 409
            },
            {
              name: '双皮奶',
              value: 408
            },
            {
              name: '锅盔',
              value: 403
            },
            {
              name: '羊肉泡馍',
              value: 403
            },
            {
              name: '凉皮',
              value: 402
            },
            {
              name: '糍粑',
              value: 397
            },
            {
              name: '豆皮',
              value: 388
            },
            {
              name: '粘豆包',
              value: 388
            },
            {
              name: '过桥米线',
              value: 385
            },
            {
              name: '叉烧',
              value: 375
            },
            {
              name: '豆腐脑',
              value: 374
            },
            {
              name: '豆汁',
              value: 363
            },
            {
              name: '麻花',
              value: 363
            },
            {
              name: '春卷',
              value: 354
            },
            {
              name: '锅贴',
              value: 349
            },
            {
              name: '韭菜盒子',
              value: 349
            },
            {
              name: '面筋',
              value: 346
            },
            {
              name: '南瓜饼',
              value: 343
            },
            {
              name: '炒肝',
              value: 341
            },
            {
              name: '文昌鸡',
              value: 338
            }
          ]
        }
      ],
      animation: false,
      nameField: 'name',
      valueField: 'value',
      seriesField: 'name',
      drawOutOfBound: 'clip',
      maskShape: 'circle',
      fontSizeRange: [10, 40],
      wordCloudConfig: {
        layoutMode: 'fast'
      }
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
    // console.log("Bar:", this.data.barSpec);
    // console.log("Line:", this.data.lineSpec);
    // console.log("Pie:", this.data.pieSpec);
    // console.log("Scatter:", this.data.scatterSpec);
    // console.log("Radar:", this.data.radarSpec);
  }
});
