import Navbar from '@/components/Navbar';
import SRSSection from '@/components/SRSSection';
import { GridPattern } from '@/components/ui/grid-pattern';
import { srsSections } from '@/lib/srs-data';
import html2pdf from 'html2pdf.js';
import { ArrowLeft, Download } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const SRSDocument = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    // Show loading toast
    toast.loading("Generating PDF...", {
      id: "pdf-download",
      duration: 5000,
    });

    // Create a clone of the document content to modify for PDF
    const srsContent = document.getElementById('srs-content');
    if (!srsContent) {
      toast.error("Could not generate PDF", {
        description: "Document content not found",
        duration: 3000,
      });
      return;
    }

    const clone = srsContent.cloneNode(true) as HTMLElement;

    // Apply some PDF-specific styling
    const style = document.createElement('style');
    style.innerHTML = `
      body { font-family: 'Inter', sans-serif; color: #000; }
      h1 { font-size: 24px; margin-bottom: 20px; color: #2563eb; }
      h2 { font-size: 20px; margin-top: 20px; margin-bottom: 10px; }
      h3 { font-size: 16px; margin-top: 15px; margin-bottom: 8px; }
      p { font-size: 12px; line-height: 1.5; margin-bottom: 10px; }
      .section-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; }
    `;
    clone.appendChild(style);

    // Config for html2pdf
    const opt = {
      margin: 10,
      filename: 'SRS_Document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generate the PDF
    html2pdf().from(clone).set(opt).save()
      .then(() => {
        toast.success("PDF downloaded successfully", {
          id: "pdf-download",
          description: "Your SRS document has been saved as PDF",
          duration: 3000,
        });
      })
      .catch((error) => {
        console.error("PDF generation error:", error);
        toast.error("PDF generation failed", {
          id: "pdf-download",
          description: "Please try again later",
          duration: 3000,
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] pointer-events-none"
      />

      <main className="flex-1 container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10 animate-fade-in">
            <Link
              to="/"
              className="flex items-center gap-1.5 hover:text-primary transition-colors font-medium"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>

            <button
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all btn-secondary hover:bg-blue-50"
              onClick={handleDownload}
            >
              <Download size={16} />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="mb-10 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-5">
              Software Requirements Specification
            </h1>
            <p className="text-lg">
              This document details the requirements for the SRS Structure application, following IEEE standards
              for software requirements documentation.
            </p>
          </div>

          {/* Diagrams Quick Links */}
          {/* <div className="mb-8 p-5 rounded-xl border border-border shadow-md animate-fade-in" style={{ animationDelay: '50ms' }}>
            <h2 className="text-lg font-semibold mb-4">
              <FileText className="w-5 h-5 inline mr-2" />
              Quick Access to Diagrams
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <a
                href="#diagram-usecase"
                className="p-3 rounded-lg text-sm font-medium flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
              >
                Use Case Diagram
              </a>
              <a
                href="#diagram-sequence"
                className="p-3 rounded-lg text-sm font-medium flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
              >
                Sequence Diagram
              </a>
              <a
                href="#diagram-architecture"
                className="p-3 rounded-lg text-sm font-medium flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
              >
                Architecture Diagram
              </a>
              <a
                href="#diagram-flowchart"
                className="p-3 rounded-lg text-sm font-medium flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
              >
                Flowchart Diagram
              </a>
            </div>
          </div> */}

          {/* Table of Contents */}
          <div className="mb-12 p-6 rounded-xl border border-border shadow-md animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-lg font-semibold mb-5">Table of Contents</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {srsSections.map((section) => (
                <li key={section.id} className="hover:text-primary">
                  <a
                    href={`#${section.id}`}
                    className="flex items-center gap-2 p-1.5 rounded-md hover:bg-primary/5 transition-colors"
                  >
                    <section.icon size={18} className="" />
                    <span className="font-medium">{section.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SRS Sections */}
          <div id="srs-content" className="space-y-8">
            {srsSections.map((section) => (
              <div id={section.id} key={section.id}>
                <SRSSection section={section} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-border border-t py-10 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-foreground/60 text-sm">
            <p className="font-medium mb-1">Software Requirements Specification Document</p>
            <p>Based on IEEE Standards for Software Engineering</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SRSDocument;
