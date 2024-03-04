<template>
  <div class="chart-container d-flex justify-content-between text-right mt-4 ml-auto overflow-hidden bg-white">
    <div class="status-content">
      <h2 class="text-center fw-light">הצלחות תלמידים בשיעור {{ lessonNumber }}</h2>

      <div class="chart d-flex">
        <div class='labels-container d-flex flex-column align-items-end justify-content-start'>
          <div class='top-label ml-2'>
            <h4>הצלחות</h4>
            <div class='color-square'></div>
          </div>
          <div class='bottom-label ml-2'>
            <h4>אי הצלחות</h4>
            <div class='color-square'></div>
          </div>
        </div>
        <svg ref="svgRef"></svg>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as d3 from 'd3';

export default {
  props: {
    passed: {
      type: Number,
      required: true
    },
    failed: {
      type: Number,
      required: true
    },
    lessonNumber: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const svgRef = ref(null);

    onMounted(() => {
      const data = [
        { label: 'Dark Blue', value: props.failed },
        { label: 'Gray', value: props.passed },
      ];

      const width = 200;
      const height = 230;

      const svg = d3.select(svgRef.value)
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', `0 -10 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

      const xScale = d3.scaleBand()
        .domain(data.map(d => d.label))
        .range([40, width - 40])
        .padding(0.2);

      const yScale = d3.scaleLinear()
        .domain([0, 30])
        .range([height, 0]);

      svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d.label))
        .attr('y', d => yScale(d.value))
        .attr('width', 20)
        .attr('height', d => height - yScale(d.value))
        .attr('fill', d => (d.label === 'Dark Blue' ? '#002266' : '#e4eaf2'));

      svg.append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${width - 40}, 0)`)
        .call(d3.axisRight(yScale).ticks(6).tickSize(-width + 80).tickPadding(5));

      svg.select('.domain').remove();
    });

    return {
      svgRef
    };
  }
};
</script>

<style scoped>
.chart-container {
  border: 1px solid var(--border-color);
  width: 20vw;
  height: 53%;
}

.chart-container h2 {
  border-bottom: 1px solid var(--border-color);
  padding: 8px 12px;
  font-size: 24px;
}

.chart {
  width: 100%;
  height: calc(100% - 24px);
}


.top-label, .bottom-label {
  border: 1px solid #E4EAF2;
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 3px;
  margin-bottom: 8px;
}

.top-label h4, .bottom-label h4 {
  font-weight: 400;
  font-size: 12px;
}

.top-label .color-square {
  background-color: #E4EAF2;
  width: 11.11px;
  height: 11.11px;
  margin-left: 4px;
  border: none;
  border-radius: 4px;
}

.bottom-label .color-square {
  background-color: #002266;
  width: 11.11px;
  height: 11.11px;
  margin-left: 4px;
  border: none;
  border-radius: 4px;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
