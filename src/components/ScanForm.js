import React, { useState } from 'react';

const ScanForm = ({ onScanResults }) => {
    const [url, setUrl] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleUrlChange = (e) => setUrl(e.target.value);
    const handleFileChange = (e) => setFile(e.target.files[0]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (url) {
            const response = await fetch('/scan-url', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });

            if (!response.ok) {
                setError('Error scanning URL. Please try again.');
                return;
            }
            const result = await response.json();
            onScanResults(result);
        } else if (file) {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/scan-file', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                setError('Error scanning file. Please try again.');
                return;
            }
            const result = await response.json();
            onScanResults(result);
        } else {
            setError('Please enter a URL or select a file to scan.');
        }
    };

    return (
        <form id="scan-form" onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label htmlFor="url-input">Scan URL:</label>
                <input
                    type="text"
                    id="url-input"
                    value={url}
                    onChange={handleUrlChange}
                    placeholder="Enter URL"
                />
            </div>
            <div>
                <label htmlFor="file-input">Scan File:</label>
                <input
                    type="file"
                    id="file-input"
                    onChange={handleFileChange}
                />
            </div>
            <button type="submit">Scan</button>
        </form>
    );
};

export default ScanForm;
