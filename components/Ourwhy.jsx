import React from 'react';
import { CldImage } from 'next-cloudinary';

function Ourwhy() {
  return (
    <div>
      <div className="hidden nm:flex">
        <CldImage src="v1672091678/utilities_qr4emp.png" width={4000} height={2250} />
      </div>
      <div className="nm:hidden flex">
        <CldImage src="v1672091678/utilitiesmobile_stgqqn.png" width={2250} height={3394} />
      </div>
    </div>
  );
}

export default Ourwhy;
