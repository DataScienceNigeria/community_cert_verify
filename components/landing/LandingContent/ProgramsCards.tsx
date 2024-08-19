"use client"; 

import Card from 'react-bootstrap/Card';
import { Programs } from './LandingText';
import Image from 'next/image';

function ProgramsCards() {
  return (
    <>
    <section className=''>
      <div className='text-center text-2xl font-semibold mb-4'>Learn More About our Communities</div>
      <div className='flex flex-col md:flex-row justify-around items-center gap-4 py-4'>
        {
          Programs.map((card: any, index: any) => (
            console.log(card.color),
            <Card
            bg={card.color}
            key={card.color}
            text='primary'
            // style={{ width: '18rem' }}
            className={`mb-2 border p-5 rounded-xl space-y-4 flex-1 shadow-2xl bg-[${card.color}] h-[500px] overflow-y-auto`}
          >
            <Card.Header>
              <div className='relative'>
                <Image 
                  src={card.image}
                  alt='Arewa4Ladies'
                  width={300}
                  height={300}
                  className='hover:scale-[1.1] w-full h-[250px] max-h-[250px] object-cover'
                />
              </div>
            </Card.Header>
            <Card.Body className='h-auto'>
              <Card.Title className='text-black font-semibold font text-xl'>{card.heading}</Card.Title>
              <div className='mt-5 h-auto text-justify'>
                {card.smallText}
                <details className='hover:cursor-pointer'>
                  <summary className='hover:cursor-pointer'>Read more</summary>
                  {card.bigText}
                </details>
              </div>
            </Card.Body>
          </Card>
          ))
        }
        </div>
      </section>
    </>
  );
}

export default ProgramsCards;
