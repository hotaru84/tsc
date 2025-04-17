import { ChartOptions } from 'chart.js';
import { ja } from 'date-fns/locale';
import { useMemo } from 'react';

interface ChartOptionsHook {
  chartOptionsBase: ChartOptions<'bar' | 'line'>;
  interaction: ChartOptions<'bar' | 'line'>['interaction'];
  plugins: ChartOptions<'bar' | 'line'>['plugins'];
  scales: ChartOptions<'bar' | 'line'>['scales'];
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

    const scales: ChartOptions<'bar' | 'line'>['scales'] = {
      x: {
        type: 'time',
        adapters: {
          date: {
            locale: ja
          }
        }
      }
    };

    return { chartOptionsBase, interaction, plugins, scales };
  }, []);
};

export default useChartOptions;
