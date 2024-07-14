import React from 'react'

const page = ({ params }: { params: { slug: string[] } }) => {
  const decodedParams = params.slug.map(decodeURIComponent);
  
  console.log(decodedParams);
  
  return (
    <div>
      <h1>
        The students page
      </h1>
    </div>
  )
}

export default page