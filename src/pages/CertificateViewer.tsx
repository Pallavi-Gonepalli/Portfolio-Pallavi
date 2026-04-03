
import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

const CertificateViewer = () => {
  const [searchParams] = useSearchParams();
  const fileUrl = searchParams.get('file');
  const title = searchParams.get('title') || 'Certificate';

  if (!fileUrl) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">No certificate specified.</p>
        <Link to="/certifications" className="text-purple-600 underline">Back to Certifications</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border bg-card sticky top-0 z-10">
        <Link
          to="/certifications"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-purple-600 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Certifications
        </Link>

        <h1 className="text-sm font-semibold truncate max-w-xs sm:max-w-md">{title}</h1>

        <a
          href={fileUrl}
          download
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity duration-200"
        >
          <Download className="w-3.5 h-3.5" />
          Download
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1">
        <iframe
          src={fileUrl}
          title={title}
          className="w-full h-full"
          style={{ minHeight: 'calc(100vh - 57px)', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default CertificateViewer;
