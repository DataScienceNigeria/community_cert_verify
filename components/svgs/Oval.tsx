import React from 'react'

interface OvalProps {
  color: string
  styling?: string
}

const Oval = ( { color, styling }: OvalProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 258 98" width="258" height="30"   preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)", contentVisibility: "visible" }}><defs><clipPath id="__lottie_element_7"><rect width="258" height="98" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_7)"><g transform="matrix(0.8395500183105469,0,0,0.8395500183105469,16.50029754638672,3.6642990112304688)" opacity="1" style={{ display: "block" }}><g opacity="1" transform="matrix(1,0,0,1,110.9209976196289,52.790000915527344)"><path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="4" stroke={`${color}`} strokeOpacity="1" strokeWidth="10" d=" M109.15799713134766,-42.59600067138672 C60.597999572753906,-50.88199996948242 -48.07899856567383,-55.33599853515625 -94.3010025024414,-6.861000061035156 C-152.07899475097656,53.733001708984375 21.010000228881836,55.33700180053711 86.9020004272461,45.9640007019043 C126.32599639892578,40.35599899291992 152.07899475097656,26.63599967956543 152.07899475097656,6.783999919891357 C152.07899475097656,-10.305999755859375 107.36000061035156,-35.99399948120117 26.426000595092773,-31.138999938964844"></path></g></g></g>
      </svg>
    </>
  )
}

export default Oval