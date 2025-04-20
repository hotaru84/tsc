import ChartComponent from './ChartComponent';
import { mockData } from './data';
import { VStack } from '@chakra-ui/react';
import SyslogTable from './SyslogTable';

function App() {
  return (
    <VStack w="100vw" h="full" gap={4} p={6}>
      <ChartComponent data={mockData} />
      <SyslogTable />
    </VStack>
  );
}

export default App;
