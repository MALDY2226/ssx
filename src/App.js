import React, { useState } from 'react';
import ScanForm from './components/ScanForm';
import ResultsChart from './components/ResultsChart';

const App = () => {
    const [scanResults, setScanResults] = useState(null);

    const handleScanResults = (results) => {
        setScanResults(results);
    };

    return (
        <div className="container">
            <h1 className="nosifer-regular">SafeScanX</h1>
            <ScanForm onScanResults={handleScanResults} />
            {scanResults && <ResultsChart results={scanResults} />}
        </div>
    );
};

export default App;
