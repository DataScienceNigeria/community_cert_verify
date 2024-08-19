"use client"; 

import Card from 'react-bootstrap/Card';
import { CardText } from './LandingText';

function VerificationFlow() {
  return (
    <>
    <section className=''>
      <h2 className='text-center text-2xl font-semibold mb-4'>How to Verify your Certificate</h2>
      <div className='flex flex-col md:flex-row justify-around items-center gap-4 py-4'>
        {
          CardText.map((card: any, index: any) => (
            console.log(card.color),
            <Card
            bg={card.color}
            key={card.color}
            text='primary'
            style={{ width: '18rem' }}
            className={`mb-2 border p-5 rounded-xl space-y-4 shadow-2xl bg-[${card.color}] text-black`}
          >
            <Card.Header>
              {card.icon}
            </Card.Header>
            <Card.Body>
              <Card.Title className='text-black font-semibold font'>{card.title}</Card.Title>
              <Card.Text className='mt-5'>
                {card.subtitle}
              </Card.Text>
            </Card.Body>
          </Card>
          ))
        }
        </div>
      </section>
    </>
  );
}

export default VerificationFlow;
