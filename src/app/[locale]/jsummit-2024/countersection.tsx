'use client'
import CountUp from 'react-countup'; // Assuming you're using react-countup
import { useTranslation } from 'react-i18next';

const CounterSection = () => {

     const { t } = useTranslation();

    const counter = [
        {
            number: 1,
            text: t('counter-edition')
        },
        {
            number:1,
            text:t('counter-event')
        },
        {
            number: 5,
            text: t('counter-speakers')
        },
        {
            number: 150,
            text: t('counter-attend')
        },
    ];

    return (
        <div className="div flex flex-col  flex-wrap lg:flex-row  justify-between p-1 text-black">
            {counter && counter.map(({ number, text }, i) => {
                const modifiedText =
                    (number === 1 && text === 'Event') ? ' day' :
                    (number === 1 && text === 'Edition') ? 'ST' :
                    (number === 150 ) ? '+ 1' :
                   
                    ``;
              

                return (
                    <CountUp start={0} end={number}  enableScrollSpy scrollSpyOnce={true} duration={3}  key={i}>
                        {({ countUpRef }) => (
                            <div className='flex flex-col flex-wrap justify-center text-center items-center'>
                                <div>
                                    <span className='lg:text-8xl text-5xl text-white font-normal' ref={countUpRef} />
                                    <span className='lg:text-6xl text-2xl text-white font-normal'>{modifiedText}</span>
                                </div>
                                <p className='lg:text-2xl text-xl text-yellow-400'>{text}</p>
                            </div>
                        )}
                    </CountUp>
                );
            })}
        </div>
    );
};

export default CounterSection;
