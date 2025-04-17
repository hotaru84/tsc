import { ChartOptions } from 'chart.js';
import { ja } from 'date-fns/locale';
import { useMemo } from 'react';

import { ScaleOptions } from 'chart.js';

interface ChartOptionsHook {
  chartOptionsBase: ChartOptions<'bar' | 'line'>;
  interaction: ChartOptions<'bar' | 'line'>['interaction'];
  plugins: ChartOptions<'bar' | 'line'>['plugins'];
  leftAxisOptions: ScaleOptions;
  rightAxisOptions: ScaleOptions;
  xAxisOptions: ScaleOptions;
}

const useChartOptions = (): ChartOptionsHook => {
  return useMemo(() => {
    const interaction: ChartOptions<'bar' | 'line'>['interaction'] = {
      mode: 'index' as const,
      intersect: false,
    };

    const chartOptionsBase: ChartOptions<'bar' | 'line'> = {
      responsive: true,
      maintainAspectRatio: false,
    }

    const plugins: ChartOptions<'bar' | 'line'>['plugins'] = {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Time Series Chart',
      }
    };

    const leftAxisOptions = {
      position: 'left' as const,
      ticks: {
        callback: (value: string | number) => {
          return Number(value).toFixed(2);
        },
      },
    };

    const rightAxisOptions = {
      position: 'right' as const,
      ticks: {
        callback: (value: string | number) => {
          return Number(value).toFixed(0);
        },
      },
    };

    const xAxisOptions = {
      type: 'time' as const,
      adapters: {
        date: {
          locale: ja
        }
      }
    };

    return { chartOptionsBase, interaction, plugins, leftAxisOptions, rightAxisOptions, xAxisOptions };
  }, []);
};

export default useChartOptions;
