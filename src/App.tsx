import ChartComponent from './ChartComponent';
import { mockData } from './data';
import { VStack } from '@chakra-ui/react';
import SyslogTable from './SyslogTable';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './dashboard';

function App() {
  return (
    <Router>
      <VStack w="100vw" h="full" gap={4} p={6}>
        <Routes>
          <Route path="/" element={<>
            <Link to="/dashboard">Dashboard</Link><ChartComponent data={mockData} /><SyslogTable /></>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </VStack>
    </Router>
  );
}

export default App;
