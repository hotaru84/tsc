import ChartComponent from './ChartComponent';
import { mockData } from './data';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex w="100vw" h="full" gap={4} p={6}>
      <ChartComponent data={mockData} />
    </Flex>
  );
}

export default App;
