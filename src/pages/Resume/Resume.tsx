import React, { FC } from 'react';


interface ResumeProps { }

const Resume: FC<ResumeProps> = () => (
  <div data-testid="Resume" style={{ width: '100%', height: '100vh' }}>
    <div className="container-fluid h-100 mt-2">
      <div className="row h-100">
        <div className="col-12 d-flex align-items-center justify-content-center">
          <iframe
            src="/Resume.pdf"
            width="100%"
            height="100%"
            title="Resume"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
